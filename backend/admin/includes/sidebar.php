<?php
// Admin Sidebar Component
declare(strict_types=1);

$current = basename($_SERVER['PHP_SELF']);
?>
<!-- Mobile Topbar Header -->
<header class="lg:hidden bg-[#0a1a38] text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
  <div class="flex items-center gap-2.5">
    <div class="w-8 h-8 rounded-lg bg-[#0052cc] flex items-center justify-center font-black text-white text-sm shadow-sm">
      RS
    </div>
    <div>
      <h1 class="text-sm font-extrabold tracking-tight leading-none text-white">R.S Enterprises</h1>
      <span class="text-[10px] text-blue-300 font-semibold">Admin Panel</span>
    </div>
  </div>
  <button id="mobileMenuBtn" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
    <i class="fa-solid fa-bars text-lg"></i>
  </button>
</header>

<!-- Sidebar Overlay (Mobile) -->
<div id="sidebarOverlay" class="fixed inset-0 bg-black/60 z-40 hidden lg:hidden transition-opacity"></div>

<!-- Sidebar Container -->
<aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-[#0a1a38] text-slate-300 z-50 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-auto flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-slate-800 shadow-2xl lg:shadow-none">
  
  <div>
    <!-- Logo & Brand -->
    <div class="p-5 border-b border-slate-800 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052cc] to-sky-500 flex items-center justify-center font-black text-white text-base shadow-md">
          RS
        </div>
        <div>
          <h2 class="text-base font-black text-white tracking-tight leading-tight">R.S Enterprises</h2>
          <span class="text-[11px] text-blue-300 font-semibold flex items-center gap-1.5 mt-0.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Tally Partner Backend
          </span>
        </div>
      </div>
      <button id="closeMobileSidebar" class="lg:hidden text-slate-400 hover:text-white p-1">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="p-4 space-y-1.5">
      <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Menu</div>
      
      <!-- Dashboard -->
      <a href="index.php" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all <?= ($current === 'index.php') ? 'bg-[#0052cc] text-white shadow-md shadow-blue-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white' ?>">
        <i class="fa-solid fa-chart-pie w-4 text-center"></i>
        <span>Dashboard</span>
      </a>

      <!-- Leads & Inquiries -->
      <a href="inquiries.php" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all <?= ($current === 'inquiries.php') ? 'bg-[#0052cc] text-white shadow-md shadow-blue-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white' ?>">
        <span class="flex items-center gap-3">
          <i class="fa-solid fa-envelope-open-text w-4 text-center"></i>
          <span>Leads & Inquiries</span>
        </span>
        <?php if (!empty($newInquiriesCount) && $newInquiriesCount > 0): ?>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-500 text-white"><?= $newInquiriesCount ?></span>
        <?php endif; ?>
      </a>

      <!-- Products -->
      <a href="products.php" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all <?= ($current === 'products.php') ? 'bg-[#0052cc] text-white shadow-md shadow-blue-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white' ?>">
        <i class="fa-solid fa-boxes-stacked w-4 text-center"></i>
        <span>Manage Products</span>
      </a>

      <!-- Site Settings -->
      <a href="settings.php" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all <?= ($current === 'settings.php') ? 'bg-[#0052cc] text-white shadow-md shadow-blue-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white' ?>">
        <i class="fa-solid fa-sliders w-4 text-center"></i>
        <span>Site Settings</span>
      </a>

      <!-- Security / Change Password -->
      <a href="change_password.php" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all <?= ($current === 'change_password.php') ? 'bg-[#0052cc] text-white shadow-md shadow-blue-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white' ?>">
        <i class="fa-solid fa-shield-halved w-4 text-center"></i>
        <span>Change Password</span>
      </a>
    </nav>
  </div>

  <!-- Bottom Admin Info & Links -->
  <div class="p-4 border-t border-slate-800 space-y-3">
    <!-- View Website Button -->
    <a href="http://localhost:5173" target="_blank" class="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
      <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      <span>Open Live Website</span>
    </a>

    <!-- Admin Profile Strip -->
    <div class="flex items-center justify-between pt-2">
      <div class="flex items-center gap-2.5 overflow-hidden">
        <div class="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 flex items-center justify-center font-bold text-xs flex-shrink-0">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="overflow-hidden">
          <div class="text-xs font-bold text-white truncate"><?= htmlspecialchars($adminName) ?></div>
          <div class="text-[10px] text-slate-400 truncate">@<?= htmlspecialchars($adminUser) ?></div>
        </div>
      </div>
      <a href="logout.php" title="Logout" class="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors">
        <i class="fa-solid fa-right-from-bracket"></i>
      </a>
    </div>
  </div>

</aside>

<script>
  // Mobile sidebar toggle script
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeSidebarBtn = document.getElementById('closeMobileSidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }

  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
</script>
