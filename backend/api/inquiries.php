<?php
// API: Inquiries / Leads (Submit & Management)
declare(strict_types=1);

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

// Handle CSV Export
if ($method === 'GET' && isset($_GET['export']) && $_GET['export'] === 'csv') {
    // Session check for export
    session_start();
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized. Please login.', null, 401);
    }

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=rs_enterprises_leads_' . date('Y-m-d') . '.csv');

    $output = fopen('php://output', 'w');
    // BOM for Excel compatibility
    fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
    
    fputcsv($output, ['ID', 'Date', 'Type', 'Name', 'Phone', 'Email', 'Company', 'City', 'Product Interest', 'Status', 'Message', 'Admin Notes']);

    $stmt = $pdo->query("SELECT * FROM inquiries ORDER BY created_at DESC");
    while ($row = $stmt->fetch()) {
        fputcsv($output, [
            $row['id'],
            $row['created_at'],
            ucfirst($row['type']),
            $row['name'],
            $row['phone'],
            $row['email'] ?? '',
            $row['company'] ?? '',
            $row['city'] ?? '',
            $row['product_interest'] ?? '',
            strtoupper($row['status']),
            $row['message'] ?? '',
            $row['notes'] ?? ''
        ]);
    }
    fclose($output);
    exit;
}

// -------------------------------------------------------------
// POST: Submit a new inquiry (Public endpoint)
// -------------------------------------------------------------
if ($method === 'POST') {
    $input = getJsonInput();

    $name = trim($input['name'] ?? '');
    $phone = trim($input['phone'] ?? '');

    if (empty($name) || empty($phone)) {
        jsonResponse(false, 'Name and phone number are required.', null, 422);
    }

    $type = trim($input['type'] ?? 'contact');
    $email = trim($input['email'] ?? '');
    $company = trim($input['company'] ?? '');
    $city = trim($input['city'] ?? '');
    $product_interest = trim($input['product_interest'] ?? $input['product'] ?? '');
    $message = trim($input['message'] ?? '');

    try {
        $stmt = $pdo->prepare("
            INSERT INTO inquiries (type, name, phone, email, company, city, product_interest, message, status)
            VALUES (:type, :name, :phone, :email, :company, :city, :product_interest, :message, 'new')
        ");
        $stmt->execute([
            ':type'             => $type,
            ':name'             => $name,
            ':phone'            => $phone,
            ':email'            => $email ?: null,
            ':company'          => $company ?: null,
            ':city'             => $city ?: null,
            ':product_interest' => $product_interest ?: null,
            ':message'          => $message ?: null,
        ]);

        $newId = (int)$pdo->lastInsertId();

        jsonResponse(true, 'Inquiry submitted successfully! Our expert will contact you shortly.', [
            'id' => $newId,
            'name' => $name,
            'phone' => $phone
        ], 201);
    } catch (PDOException $e) {
        jsonResponse(false, 'Failed to save inquiry: ' . $e->getMessage(), null, 500);
    }
}

// -------------------------------------------------------------
// GET: List inquiries (Admin only)
// -------------------------------------------------------------
if ($method === 'GET') {
    session_start();
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized. Please login to view inquiries.', null, 401);
    }

    $status = $_GET['status'] ?? '';
    $type   = $_GET['type'] ?? '';
    $search = trim($_GET['search'] ?? '');
    $page   = max(1, (int)($_GET['page'] ?? 1));
    $limit  = min(100, max(5, (int)($_GET['limit'] ?? 20)));
    $offset = ($page - 1) * $limit;

    $where = [];
    $params = [];

    if (!empty($status) && $status !== 'all') {
        $where[] = "status = :status";
        $params[':status'] = $status;
    }
    if (!empty($type) && $type !== 'all') {
        $where[] = "type = :type";
        $params[':type'] = $type;
    }
    if (!empty($search)) {
        $where[] = "(name LIKE :s1 OR phone LIKE :s2 OR email LIKE :s3 OR company LIKE :s4 OR product_interest LIKE :s5)";
        $params[':s1'] = "%{$search}%";
        $params[':s2'] = "%{$search}%";
        $params[':s3'] = "%{$search}%";
        $params[':s4'] = "%{$search}%";
        $params[':s5'] = "%{$search}%";
    }

    $whereSql = count($where) ? "WHERE " . implode(" AND ", $where) : "";

    // Count total
    $countStmt = $pdo->prepare("SELECT COUNT(*) FROM inquiries {$whereSql}");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetchColumn();

    // Fetch records
    $stmt = $pdo->prepare("SELECT * FROM inquiries {$whereSql} ORDER BY created_at DESC LIMIT :limit OFFSET :offset");
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, $v);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $inquiries = $stmt->fetchAll();

    jsonResponse(true, 'Inquiries retrieved', [
        'inquiries' => $inquiries,
        'pagination' => [
            'total' => $total,
            'page'  => $page,
            'limit' => $limit,
            'pages' => ceil($total / $limit)
        ]
    ]);
}

// -------------------------------------------------------------
// PUT: Update inquiry status / notes
// -------------------------------------------------------------
if ($method === 'PUT' || ($method === 'POST' && isset($_GET['_method']) && $_GET['_method'] === 'PUT')) {
    session_start();
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized', null, 401);
    }

    $input = getJsonInput();
    $id = (int)($input['id'] ?? $_GET['id'] ?? 0);
    if ($id <= 0) {
        jsonResponse(false, 'Invalid ID', null, 422);
    }

    $status = $input['status'] ?? null;
    $notes = $input['notes'] ?? null;

    $updates = [];
    $params = [':id' => $id];

    if ($status !== null) {
        $updates[] = "status = :status";
        $params[':status'] = $status;
    }
    if ($notes !== null) {
        $updates[] = "notes = :notes";
        $params[':notes'] = $notes;
    }

    if (empty($updates)) {
        jsonResponse(false, 'Nothing to update', null, 422);
    }

    $sql = "UPDATE inquiries SET " . implode(", ", $updates) . " WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    jsonResponse(true, 'Inquiry updated successfully', ['id' => $id, 'status' => $status]);
}

// -------------------------------------------------------------
// DELETE: Delete inquiry
// -------------------------------------------------------------
if ($method === 'DELETE' || ($method === 'POST' && isset($_GET['_method']) && $_GET['_method'] === 'DELETE')) {
    session_start();
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized', null, 401);
    }

    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) {
        $input = getJsonInput();
        $id = (int)($input['id'] ?? 0);
    }

    if ($id <= 0) {
        jsonResponse(false, 'Invalid ID', null, 422);
    }

    $stmt = $pdo->prepare("DELETE FROM inquiries WHERE id = :id");
    $stmt->execute([':id' => $id]);

    jsonResponse(true, 'Inquiry deleted successfully', ['id' => $id]);
}
