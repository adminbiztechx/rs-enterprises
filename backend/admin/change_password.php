<?php
// Admin Change Password
declare(strict_types=1);

require_once __DIR__ . '/includes/auth_check.php';
require_once __DIR__ . '/../config/db.php';

$pageTitle = 'Change Password';
$msg = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $current_pass = $_POST['current_password'] ?? '';
    $new_pass     = $_POST['new_password'] ?? '';
    $confirm_pass = $_POST['confirm_password'] ?? '';

    if (empty($current_pass) || empty($new_pass)) {
        $error = 'All fields are required.';
    } elseif ($new_pass !== $confirm_pass) {
        $error = 'New password and confirm password do not match.';
    } elseif (strlen($new_pass) < 6) {
        $error = 'New password must be at least 6 characters.';
    } else {
        $adminId = (int)$_SESSION['admin_id'];
        $stmt = $pdo->prepare("SELECT password_hash FROM admins WHERE id = :id");
        $stmt->execute([':id' => $adminId]);
        $hash = $stmt->fetchColumn();

        if ($hash && password_verify($current_pass, $hash)) {
            $newHash = password_hash($new_pass, PASSWORD_BCRYPT);
            $up = $pdo->prepare("UPDATE admins SET password_hash = :p WHERE id = :id");
            $up->execute([':p' => $newHash, ':id' => $adminId]);
            $msg = 'Password changed successfully! Keep it safe.';
        } else {
            $error = 'Current password is incorrect.';
        }
    }
}

$newInquiriesCount = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/sidebar.php';
?>

<main class="flex-1 min-w-0 overflow-y-auto">
  
  <div class="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30 shadow-xs">
    <h1 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Security & Change Password</h1>
    <p class="text-xs text-slate-500 mt-0.5">Keep your admin account secure with a strong password.</p>
  </div>

  <div class="p-6 space-y-6 max-w-xl">

    <?php if (!empty($msg)): ?>
      <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
        <i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
        <span><?= htmlspecialchars($msg) ?></span>
      </div>
    <?php endif; ?>

    <?php if (!empty($error)): ?>
      <div class="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
        <i class="fa-solid fa-triangle-exclamation text-rose-500 text-sm"></i>
        <span><?= htmlspecialchars($error) ?></span>
      </div>
    <?php endif; ?>

    <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
      <form method="POST" action="change_password.php" class="space-y-4">
        
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Current Password</label>
          <input type="password" name="current_password" required class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">New Password (Min. 6 chars)</label>
          <input type="password" name="new_password" required minlength="6" class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
          <input type="password" name="confirm_password" required minlength="6" class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>

        <div class="pt-3">
          <button
            type="submit"
            class="w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0043a8] text-white text-xs font-bold transition shadow-sm"
          >
            Update Password
          </button>
        </div>

      </form>
    </div>

  </div>
</main>

  </div>
</body>
</html>
