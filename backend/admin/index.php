<?php
// Admin Dashboard
declare(strict_types=1);

require_once __DIR__ . '/includes/auth_check.php';
require_once __DIR__ . '/../config/db.php';

$pageTitle = 'Dashboard';

// Fetch quick stats
$totalInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries")->fetchColumn();
$newInquiriesCount = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();
$todayInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE DATE(created_at) = CURDATE()")->fetchColumn();
$convertedInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'converted'")->fetchColumn();
$totalProducts = (int)$pdo->query("SELECT COUNT(*) FROM products WHERE is_active = 1")->fetchColumn();

// Fetch recent 8 inquiries
$stmt = $pdo->query("SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 8");
$recentInquiries = $stmt->fetchAll();

// Handle quick status update POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'update_status') {
    $inquiryId = (int)($_POST['inquiry_id'] ?? 0);
    $newStatus = trim($_POST['status'] ?? 'new');
    if ($inquiryId > 0 && in_array($newStatus, ['new', 'in_progress', 'contacted', 'converted', 'closed'], true)) {
        $up = $pdo->prepare("UPDATE inquiries SET status = :s WHERE id = :id");
        $up->execute([':s' => $newStatus, ':id' => $inquiryId]);
        header('Location: index.php?msg=status_updated');
        exit;
    }
}

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/sidebar.php';
?>

<!-- Main Content Area -->
<main class="flex-1 min-w-0 overflow-y-auto">
  
  <!-- Top Navbar -->
  <div class="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
    <div>
      <h1 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Overview Dashboard</h1>
      <p class="text-xs text-slate-500 mt-0.5">Welcome back, <?= htmlspecialchars($_SESSION['admin_name'] ?? 'Admin') ?>! Here is what's happening today.</p>
    </div>
    <div class="flex items-center gap-3">
      <!-- Quick CSV Export -->
      <a href="../api/inquiries.php?export=csv" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors shadow-xs">
        <i class="fa-solid fa-file-csv text-emerald-600"></i>
        <span>Export Leads CSV</span>
      </a>
      <!-- Add Product Quick Button -->
      <a href="products.php?action=new" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-colors shadow-sm">
        <i class="fa-solid fa-plus text-xs"></i>
        <span>Add Product</span>
      </a>
    </div>
  </div>

  <div class="p-6 space-y-6 max-w-7xl">

    <?php if (isset($_GET['msg']) && $_GET['msg'] === 'status_updated'): ?>
      <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
          <span>Lead status updated successfully!</span>
        </span>
        <button onclick="this.parentElement.remove()" class="text-emerald-700 hover:text-emerald-900"><i class="fa-solid fa-xmark"></i></button>
      </div>
    <?php endif; ?>

    <!-- 1. KPI Metric Cards (4 Cards) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      
      <!-- Card 1: Total Leads -->
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Leads</span>
          <div class="text-2xl font-black text-[#0a1a38] mt-1"><?= $totalInquiries ?></div>
          <span class="text-[11px] text-slate-400 mt-0.5 block">Lifetime customer inquiries</span>
        </div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center text-lg">
          <i class="fa-solid fa-users"></i>
        </div>
      </div>

      <!-- Card 2: New Inquiries (Action Required) -->
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span class="text-[11px] font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            New / Unread
          </span>
          <div class="text-2xl font-black text-rose-600 mt-1"><?= $newInquiriesCount ?></div>
          <span class="text-[11px] text-rose-400 font-semibold mt-0.5 block">Requires immediate response</span>
        </div>
        <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>

      <!-- Card 3: Converted Leads -->
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <span class="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Converted Clients</span>
          <div class="text-2xl font-black text-emerald-600 mt-1"><?= $convertedInquiries ?></div>
          <span class="text-[11px] text-slate-400 mt-0.5 block">Closed successful deals</span>
        </div>
        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
          <i class="fa-solid fa-trophy"></i>
        </div>
      </div>

      <!-- Card 4: Active Products -->
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Products</span>
          <div class="text-2xl font-black text-[#0a1a38] mt-1"><?= $totalProducts ?></div>
          <span class="text-[11px] text-slate-400 mt-0.5 block">Tally software & services</span>
        </div>
        <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg">
          <i class="fa-solid fa-boxes-stacked"></i>
        </div>
      </div>

    </div>

    <!-- 2. Recent Leads Section -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      
      <!-- Table Header Bar -->
      <div class="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 class="text-base font-extrabold text-[#0a1a38] tracking-tight">Recent Leads & Inquiries</h2>
          <p class="text-xs text-slate-500">Live submissions from website contact forms, demo modals and callback requests.</p>
        </div>
        <a href="inquiries.php" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] hover:text-[#003bb3] transition-colors">
          <span>View All Inquiries (<?= $totalInquiries ?>)</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </div>

      <!-- Inquiries Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200/80 uppercase text-[10.5px] tracking-wider">
              <th class="py-3.5 px-5">Lead / Contact</th>
              <th class="py-3.5 px-4">Type</th>
              <th class="py-3.5 px-4">Product Interest</th>
              <th class="py-3.5 px-4">Date</th>
              <th class="py-3.5 px-4">Status</th>
              <th class="py-3.5 px-5 text-right">Quick Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <?php if (empty($recentInquiries)): ?>
              <tr>
                <td colspan="6" class="py-12 text-center text-slate-400 font-semibold">
                  No inquiries received yet. Submit a test form on the website to see it here!
                </td>
              </tr>
            <?php else: ?>
              <?php foreach ($recentInquiries as $lead): 
                $cleanPhone = preg_replace('/[^0-9]/', '', $lead['phone']);
                if (strlen($cleanPhone) === 10) $cleanPhone = '91' . $cleanPhone;
                
                $statusColors = [
                  'new'         => 'bg-rose-50 text-rose-700 border-rose-200',
                  'in_progress' => 'bg-amber-50 text-amber-700 border-amber-200',
                  'contacted'   => 'bg-blue-50 text-blue-700 border-blue-200',
                  'converted'   => 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'closed'      => 'bg-slate-100 text-slate-600 border-slate-200',
                ];
                $statusBadge = $statusColors[$lead['status']] ?? 'bg-slate-100 text-slate-700 border-slate-200';
              ?>
                <tr class="hover:bg-slate-50/60 transition-colors">
                  
                  <!-- Lead Name & Info -->
                  <td class="py-3.5 px-5">
                    <div class="font-bold text-slate-900 text-xs"><?= htmlspecialchars($lead['name']) ?></div>
                    <div class="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                      <span><i class="fa-solid fa-phone text-[10px] text-slate-400"></i> <?= htmlspecialchars($lead['phone']) ?></span>
                      <?php if (!empty($lead['email'])): ?>
                        <span>•</span>
                        <span><?= htmlspecialchars($lead['email']) ?></span>
                      <?php endif; ?>
                    </div>
                    <?php if (!empty($lead['company'])): ?>
                      <div class="text-[10px] text-slate-400 font-medium mt-0.5">
                        <i class="fa-solid fa-building text-[9px]"></i> <?= htmlspecialchars($lead['company']) ?>
                        <?= !empty($lead['city']) ? '(' . htmlspecialchars($lead['city']) . ')' : '' ?>
                      </div>
                    <?php endif; ?>
                  </td>

                  <!-- Type -->
                  <td class="py-3.5 px-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      <?= htmlspecialchars($lead['type']) ?>
                    </span>
                  </td>

                  <!-- Product Interest -->
                  <td class="py-3.5 px-4">
                    <span class="font-bold text-[#0052cc] text-xs">
                      <?= htmlspecialchars($lead['product_interest'] ?: 'General Inquiry') ?>
                    </span>
                  </td>

                  <!-- Date -->
                  <td class="py-3.5 px-4 text-slate-500 text-[11px]">
                    <?= date('d M Y, h:i A', strtotime($lead['created_at'])) ?>
                  </td>

                  <!-- Status with Quick Change Form -->
                  <td class="py-3.5 px-4">
                    <form method="POST" action="index.php" class="inline-block">
                      <input type="hidden" name="action" value="update_status">
                      <input type="hidden" name="inquiry_id" value="<?= $lead['id'] ?>">
                      <select name="status" onchange="this.form.submit()" class="px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer <?= $statusBadge ?> focus:outline-none">
                        <option value="new" <?= $lead['status'] === 'new' ? 'selected' : '' ?>>New</option>
                        <option value="in_progress" <?= $lead['status'] === 'in_progress' ? 'selected' : '' ?>>In Progress</option>
                        <option value="contacted" <?= $lead['status'] === 'contacted' ? 'selected' : '' ?>>Contacted</option>
                        <option value="converted" <?= $lead['status'] === 'converted' ? 'selected' : '' ?>>Converted</option>
                        <option value="closed" <?= $lead['status'] === 'closed' ? 'selected' : '' ?>>Closed</option>
                      </select>
                    </form>
                  </td>

                  <!-- Quick Actions -->
                  <td class="py-3.5 px-5 text-right space-x-1.5 whitespace-nowrap">
                    <!-- WhatsApp Direct Link -->
                    <a
                      href="https://wa.me/<?= $cleanPhone ?>?text=Hello%20<?= urlencode($lead['name']) ?>,%20thank%20you%20for%20contacting%20R.S%20Enterprises%20regarding%20<?= urlencode($lead['product_interest'] ?? 'Tally') ?>."
                      target="_blank"
                      title="Chat on WhatsApp"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <i class="fa-brands fa-whatsapp text-sm"></i>
                    </a>
                    
                    <!-- Call Link -->
                    <a
                      href="tel:<?= $cleanPhone ?>"
                      title="Call Lead"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0052cc] hover:bg-[#0052cc] hover:text-white transition-colors"
                    >
                      <i class="fa-solid fa-phone text-xs"></i>
                    </a>

                    <!-- View Details Link -->
                    <a
                      href="inquiries.php?id=<?= $lead['id'] ?>"
                      title="View Details"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <i class="fa-solid fa-eye text-xs"></i>
                    </a>
                  </td>

                </tr>
              <?php endforeach; ?>
            <?php endif; ?>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</main>

  </div>
</body>
</html>
