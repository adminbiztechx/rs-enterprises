<?php
// Admin Site Settings Manager
declare(strict_types=1);

require_once __DIR__ . '/includes/auth_check.php';
require_once __DIR__ . '/../config/db.php';

$pageTitle = 'Site Settings';
$successMsg = '';

// Handle Settings Update
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $allowedKeys = [
        'company_name', 'tagline', 'phone_primary', 'phone_secondary',
        'whatsapp_number', 'email_primary', 'email_support',
        'office_address', 'working_hours', 'experience_years', 'happy_clients'
    ];

    $stmt = $pdo->prepare("
        INSERT INTO site_settings (setting_key, setting_value)
        VALUES (:k, :v)
        ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
    ");

    foreach ($allowedKeys as $k) {
        if (isset($_POST[$k])) {
            $stmt->execute([':k' => $k, ':v' => trim($_POST[$k])]);
        }
    }
    $successMsg = 'Site settings updated successfully!';
}

// Fetch all current settings
$stmt = $pdo->query("SELECT setting_key, setting_value FROM site_settings");
$settings = [];
while ($row = $stmt->fetch()) {
    $settings[$row['setting_key']] = $row['setting_value'];
}

$newInquiriesCount = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/sidebar.php';
?>

<main class="flex-1 min-w-0 overflow-y-auto">
  
  <div class="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
    <div>
      <h1 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Site Settings & Contact Info</h1>
      <p class="text-xs text-slate-500 mt-0.5">Manage your company details, phone numbers, WhatsApp, and office address.</p>
    </div>
  </div>

  <div class="p-6 space-y-6 max-w-4xl">

    <?php if (!empty($successMsg)): ?>
      <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
          <span><?= htmlspecialchars($successMsg) ?></span>
        </span>
        <button onclick="this.parentElement.remove()" class="text-emerald-700 hover:text-emerald-900"><i class="fa-solid fa-xmark"></i></button>
      </div>
    <?php endif; ?>

    <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
      
      <form method="POST" action="settings.php" class="space-y-6">
        
        <!-- Section 1: Business Identity -->
        <div>
          <h2 class="text-sm font-extrabold text-[#0a1a38] border-b border-slate-100 pb-2 mb-4">
            <i class="fa-solid fa-building text-blue-600 mr-1.5"></i> Business Identity
          </h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
              <input type="text" name="company_name" value="<?= htmlspecialchars($settings['company_name'] ?? 'Syn N Sol') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
              <input type="text" name="tagline" value="<?= htmlspecialchars($settings['tagline'] ?? '') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
          </div>
        </div>

        <!-- Section 2: Contact Numbers & WhatsApp -->
        <div>
          <h2 class="text-sm font-extrabold text-[#0a1a38] border-b border-slate-100 pb-2 mb-4">
            <i class="fa-solid fa-phone text-emerald-600 mr-1.5"></i> Contact & WhatsApp Numbers
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Primary Phone</label>
              <input type="text" name="phone_primary" value="<?= htmlspecialchars($settings['phone_primary'] ?? '+91 98765 43210') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Secondary Phone</label>
              <input type="text" name="phone_secondary" value="<?= htmlspecialchars($settings['phone_secondary'] ?? '') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number (with country code)</label>
              <input type="text" name="whatsapp_number" value="<?= htmlspecialchars($settings['whatsapp_number'] ?? '+919876543210') ?>" placeholder="+919876543210" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
          </div>
        </div>

        <!-- Section 3: Email Addresses -->
        <div>
          <h2 class="text-sm font-extrabold text-[#0a1a38] border-b border-slate-100 pb-2 mb-4">
            <i class="fa-solid fa-envelope text-indigo-600 mr-1.5"></i> Email Addresses
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Primary Email (Sales & Inquiries)</label>
              <input type="email" name="email_primary" value="<?= htmlspecialchars($settings['email_primary'] ?? 'info@rsenterprises.com') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Support Email</label>
              <input type="email" name="email_support" value="<?= htmlspecialchars($settings['email_support'] ?? 'support@rsenterprises.com') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
          </div>
        </div>

        <!-- Section 4: Physical Address & Working Hours -->
        <div>
          <h2 class="text-sm font-extrabold text-[#0a1a38] border-b border-slate-100 pb-2 mb-4">
            <i class="fa-solid fa-location-dot text-rose-600 mr-1.5"></i> Office Address & Hours
          </h2>

          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Office Address</label>
              <textarea name="office_address" rows="2" class="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#0052cc]"><?= htmlspecialchars($settings['office_address'] ?? '') ?></textarea>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Working Hours</label>
              <input type="text" name="working_hours" value="<?= htmlspecialchars($settings['working_hours'] ?? 'Mon - Sat: 9:30 AM - 7:00 PM') ?>" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="submit"
            class="px-6 py-2.5 rounded-xl bg-[#0052cc] hover:bg-[#0043a8] text-white text-xs font-bold transition shadow-md flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-floppy-disk text-xs"></i>
            <span>Save Settings</span>
          </button>
        </div>

      </form>

    </div>

  </div>
</main>

  </div>
</body>
</html>
