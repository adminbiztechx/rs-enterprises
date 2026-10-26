<?php
// API: Authentication
declare(strict_types=1);

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

session_start();

$action = $_GET['action'] ?? $_POST['action'] ?? '';
$input = getJsonInput();
if (empty($action) && isset($input['action'])) {
    $action = $input['action'];
}

// -------------------------------------------------------------
// Action: check (verify if current user has an active session)
// -------------------------------------------------------------
if ($action === 'check') {
    if (!empty($_SESSION['admin_logged_in'])) {
        jsonResponse(true, 'Authenticated', [
            'logged_in' => true,
            'admin'     => [
                'id'       => $_SESSION['admin_id'] ?? 1,
                'username' => $_SESSION['admin_username'] ?? 'admin',
                'name'     => $_SESSION['admin_name'] ?? 'Administrator',
                'email'    => $_SESSION['admin_email'] ?? '',
                'role'     => $_SESSION['admin_role'] ?? 'admin'
            ]
        ]);
    } else {
        jsonResponse(false, 'Not authenticated', ['logged_in' => false], 401);
    }
}

// -------------------------------------------------------------
// Action: login
// -------------------------------------------------------------
if ($action === 'login' || $_SERVER['REQUEST_METHOD'] === 'POST' && empty($action)) {
    $username = trim($input['username'] ?? '');
    $password = trim($input['password'] ?? '');

    if (empty($username) || empty($password)) {
        jsonResponse(false, 'Username and password are required', null, 422);
    }

    $stmt = $pdo->prepare("SELECT * FROM admins WHERE username = :u LIMIT 1");
    $stmt->execute([':u' => $username]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password_hash'])) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id']        = $admin['id'];
        $_SESSION['admin_username']  = $admin['username'];
        $_SESSION['admin_name']      = $admin['name'];
        $_SESSION['admin_email']     = $admin['email'];
        $_SESSION['admin_role']      = $admin['role'];

        // Update last login
        $upStmt = $pdo->prepare("UPDATE admins SET last_login = NOW() WHERE id = :id");
        $upStmt->execute([':id' => $admin['id']]);

        jsonResponse(true, 'Login successful!', [
            'admin' => [
                'id'       => $admin['id'],
                'username' => $admin['username'],
                'name'     => $admin['name'],
                'email'    => $admin['email']
            ]
        ]);
    } else {
        jsonResponse(false, 'Invalid username or password', null, 401);
    }
}

// -------------------------------------------------------------
// Action: logout
// -------------------------------------------------------------
if ($action === 'logout') {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();
    jsonResponse(true, 'Logged out successfully');
}

// -------------------------------------------------------------
// Action: change_password
// -------------------------------------------------------------
if ($action === 'change_password') {
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized', null, 401);
    }

    $current_pass = $input['current_password'] ?? '';
    $new_pass = $input['new_password'] ?? '';

    if (strlen($new_pass) < 6) {
        jsonResponse(false, 'New password must be at least 6 characters long', null, 422);
    }

    $adminId = (int)$_SESSION['admin_id'];
    $stmt = $pdo->prepare("SELECT password_hash FROM admins WHERE id = :id");
    $stmt->execute([':id' => $adminId]);
    $hash = $stmt->fetchColumn();

    if (!$hash || !password_verify($current_pass, $hash)) {
        jsonResponse(false, 'Current password is incorrect', null, 400);
    }

    $newHash = password_hash($new_pass, PASSWORD_BCRYPT);
    $upStmt = $pdo->prepare("UPDATE admins SET password_hash = :p WHERE id = :id");
    $upStmt->execute([':p' => $newHash, ':id' => $adminId]);

    jsonResponse(true, 'Password updated successfully!');
}

jsonResponse(false, 'Invalid action', null, 400);
