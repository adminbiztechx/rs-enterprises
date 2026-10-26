<?php
// Admin Login Page
declare(strict_types=1);

session_start();
if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: index.php');
    exit;
}

require_once __DIR__ . '/../config/db.php';

$error = '';
$username = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($username) || empty($password)) {
        $error = 'Please enter both username and password.';
    } else {
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
            $up = $pdo->prepare("UPDATE admins SET last_login = NOW() WHERE id = :id");
            $up->execute([':id' => $admin['id']]);

            header('Location: index.php');
            exit;
        } else {
            $error = 'Invalid username or password. Please try again.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Login - Syn N Sol</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style> body { font-family: 'Plus Jakarta Sans', sans-serif; } </style>
</head>
<body class="bg-gradient-to-br from-[#061730] via-[#092248] to-[#0d2e5e] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
  
  {/* Background constellation overlay */}
  <div class="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

  <div class="w-full max-w-md relative z-10">
    
    <!-- Brand Box -->
    <div class="text-center mb-8">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0052cc] to-sky-400 text-white flex items-center justify-center font-black text-xl mx-auto mb-3 shadow-xl shadow-blue-500/20">
        SnS
      </div>
      <h1 class="text-2xl font-black text-white tracking-tight">Syn N Sol</h1>
      <p class="text-xs font-semibold text-blue-200 mt-1">Authorized Tally Partner • Management Console</p>
    </div>

    <!-- Login Card -->
    <div class="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100">
      
      <div class="mb-6">
        <h2 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Welcome Back</h2>
        <p class="text-xs text-slate-500 mt-1">Please sign in to manage your inquiries, products and settings.</p>
      </div>

      <?php if (!empty($error)): ?>
        <div class="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2.5">
          <i class="fa-solid fa-triangle-exclamation text-rose-500 text-sm"></i>
          <span><?= htmlspecialchars($error) ?></span>
        </div>
      <?php endif; ?>

      <form method="POST" action="login.php" class="space-y-4">
        
        <!-- Username -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5" for="username">
            Username
          </label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              id="username"
              name="username"
              value="<?= htmlspecialchars($username) ?>"
              required
              autofocus
              placeholder="e.g. admin"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0052cc] text-xs font-semibold text-slate-800 transition"
            >
          </div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5" for="password">
            Password
          </label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              class="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0052cc] text-xs font-semibold text-slate-800 transition"
            >
            <button
              type="button"
              onclick="togglePassVisibility()"
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <i id="passEye" class="fa-solid fa-eye text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Default Credentials Hint -->
        <div class="bg-blue-50/80 rounded-xl p-3 border border-blue-100 flex items-center justify-between text-[11px] text-blue-800">
          <div>
            <span class="font-bold">Default Login:</span> <code class="bg-white px-1.5 py-0.5 rounded border border-blue-200">admin</code>
          </div>
          <div>
            <span class="font-bold">Password:</span> <code class="bg-white px-1.5 py-0.5 rounded border border-blue-200">admin123</code>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            type="submit"
            class="w-full py-3 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0043a8] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Sign In to Dashboard</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

      </form>

      <!-- Back to site -->
      <div class="mt-6 text-center border-t border-slate-100 pt-5">
        <a href="http://localhost:5173" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0052cc] transition-colors">
          <i class="fa-solid fa-arrow-left text-[11px]"></i>
          <span>Back to Main Website</span>
        </a>
      </div>

    </div>

  </div>

  <script>
    function togglePassVisibility() {
      const p = document.getElementById('password');
      const eye = document.getElementById('passEye');
      if (p.type === 'password') {
        p.type = 'text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
      } else {
        p.type = 'password';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
      }
    }
  </script>
</body>
</html>
