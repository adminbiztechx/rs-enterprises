<?php
// Admin Leads & Inquiries Manager
declare(strict_types=1);

require_once __DIR__ . '/includes/auth_check.php';
require_once __DIR__ . '/../config/db.php';

$pageTitle = 'Leads & Inquiries';

// Handle POST actions (Update status, update notes, delete)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $id = (int)($_POST['id'] ?? 0);

    if ($action === 'update' && $id > 0) {
        $status = $_POST['status'] ?? 'new';
        $notes  = trim($_POST['notes'] ?? '');
        $up = $pdo->prepare("UPDATE inquiries SET status = :s, notes = :n WHERE id = :id");
        $up->execute([':s' => $status, ':n' => $notes, ':id' => $id]);
        header('Location: inquiries.php?msg=updated');
        exit;
    }

    if ($action === 'delete' && $id > 0) {
        $del = $pdo->prepare("DELETE FROM inquiries WHERE id = :id");
        $del->execute([':id' => $id]);
        header('Location: inquiries.php?msg=deleted');
        exit;
    }
}

// Filters & Search
$statusFilter = $_GET['status'] ?? 'all';
$typeFilter   = $_GET['type'] ?? 'all';
$search       = trim($_GET['search'] ?? '');

$where = [];
$params = [];

if (!empty($statusFilter) && $statusFilter !== 'all') {
    $where[] = "status = :status";
    $params[':status'] = $statusFilter;
}

if (!empty($typeFilter) && $typeFilter !== 'all') {
    $where[] = "type = :type";
    $params[':type'] = $typeFilter;
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
$totalRows = (int)$countStmt->fetchColumn();

// Fetch records
$sql = "SELECT * FROM inquiries {$whereSql} ORDER BY created_at DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$inquiries = $stmt->fetchAll();

// Counts by status for tabs
$newCount = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();
$newInquiriesCount = $newCount;

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/sidebar.php';
?>

<main class="flex-1 min-w-0 overflow-y-auto">
  
  <!-- Header Bar -->
  <div class="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
    <div>
      <h1 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Leads & Inquiries Manager</h1>
      <p class="text-xs text-slate-500 mt-0.5">Manage incoming inquiries from website forms, free demo requests, and phone callbacks.</p>
    </div>
    <div class="flex items-center gap-3">
      <!-- Export CSV -->
      <a href="../api/inquiries.php?export=csv" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors shadow-xs">
        <i class="fa-solid fa-file-csv text-emerald-600"></i>
        <span>Export to CSV</span>
      </a>
    </div>
  </div>

  <div class="p-6 space-y-6 max-w-7xl">

    <!-- Notification Alert -->
    <?php if (isset($_GET['msg'])): ?>
      <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
          <span>
            <?= $_GET['msg'] === 'deleted' ? 'Inquiry deleted successfully!' : 'Inquiry updated successfully!' ?>
          </span>
        </span>
        <button onclick="this.parentElement.remove()" class="text-emerald-700 hover:text-emerald-900"><i class="fa-solid fa-xmark"></i></button>
      </div>
    <?php endif; ?>

    <!-- Filter & Search Toolbar -->
    <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
      
      <!-- Status Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 lg:pb-0">
        <?php
          $tabs = [
            'all'         => 'All Leads',
            'new'         => 'New',
            'in_progress' => 'In Progress',
            'contacted'   => 'Contacted',
            'converted'   => 'Converted',
            'closed'      => 'Closed'
          ];
          foreach ($tabs as $k => $label):
            $isActive = $statusFilter === $k;
        ?>
          <a
            href="?status=<?= $k ?>&type=<?= urlencode($typeFilter) ?>&search=<?= urlencode($search) ?>"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap <?= $isActive ? 'bg-[#0052cc] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' ?>"
          >
            <?= $label ?>
            <?php if ($k === 'new' && $newCount > 0): ?>
              <span class="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] <?= $isActive ? 'bg-white text-[#0052cc]' : 'bg-rose-500 text-white' ?>"><?= $newCount ?></span>
            <?php endif; ?>
          </a>
        <?php endforeach; ?>
      </div>

      <!-- Search Input & Type Filter -->
      <form method="GET" action="inquiries.php" class="flex items-center gap-2">
        <input type="hidden" name="status" value="<?= htmlspecialchars($statusFilter) ?>">
        
        <!-- Type Filter -->
        <select name="type" onchange="this.form.submit()" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[#0052cc]">
          <option value="all" <?= $typeFilter === 'all' ? 'selected' : '' ?>>All Types</option>
          <option value="demo" <?= $typeFilter === 'demo' ? 'selected' : '' ?>>Demo Requests</option>
          <option value="callback" <?= $typeFilter === 'callback' ? 'selected' : '' ?>>Callback Requests</option>
          <option value="contact" <?= $typeFilter === 'contact' ? 'selected' : '' ?>>Contact Forms</option>
          <option value="quote" <?= $typeFilter === 'quote' ? 'selected' : '' ?>>Price Quotes</option>
        </select>

        <!-- Search Bar -->
        <div class="relative">
          <input
            type="text"
            name="search"
            value="<?= htmlspecialchars($search) ?>"
            placeholder="Search leads..."
            class="w-48 sm:w-64 pl-8 pr-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 focus:outline-none focus:border-[#0052cc]"
          >
          <span class="absolute inset-y-0 left-0 pl-2.5 flex items-center text-slate-400 pointer-events-none text-xs">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <button type="submit" class="px-3 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition">
          Filter
        </button>

        <?php if (!empty($search) || $typeFilter !== 'all' || $statusFilter !== 'all'): ?>
          <a href="inquiries.php" class="px-2.5 py-2 text-slate-400 hover:text-rose-500 text-xs font-bold" title="Reset Filters">
            <i class="fa-solid fa-rotate-left"></i>
          </a>
        <?php endif; ?>
      </form>

    </div>

    <!-- Leads Table Container -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div>Showing <strong class="text-slate-800"><?= count($inquiries) ?></strong> leads</div>
        <div class="text-[11px] text-slate-400">Click any row or 'Edit' to update notes & status</div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200/80 uppercase text-[10.5px] tracking-wider">
              <th class="py-3.5 px-5">ID</th>
              <th class="py-3.5 px-5">Client Information</th>
              <th class="py-3.5 px-4">Type</th>
              <th class="py-3.5 px-4">Product Interest</th>
              <th class="py-3.5 px-4">Date</th>
              <th class="py-3.5 px-4">Status</th>
              <th class="py-3.5 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <?php if (empty($inquiries)): ?>
              <tr>
                <td colspan="7" class="py-12 text-center text-slate-400 font-semibold">
                  No inquiries found matching your filters.
                </td>
              </tr>
            <?php else: ?>
              <?php foreach ($inquiries as $lead): 
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
                  <td class="py-3.5 px-5 font-mono text-[11px] text-slate-400">#<?= $lead['id'] ?></td>

                  <!-- Client Info -->
                  <td class="py-3.5 px-5">
                    <div class="font-bold text-slate-900 text-xs"><?= htmlspecialchars($lead['name']) ?></div>
                    <div class="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                      <span class="font-semibold text-slate-700"><i class="fa-solid fa-phone text-[10px] text-slate-400"></i> <?= htmlspecialchars($lead['phone']) ?></span>
                      <?php if (!empty($lead['email'])): ?>
                        <span>•</span>
                        <span><?= htmlspecialchars($lead['email']) ?></span>
                      <?php endif; ?>
                    </div>
                    <?php if (!empty($lead['company'])): ?>
                      <div class="text-[10px] text-slate-400 mt-0.5">
                        <i class="fa-solid fa-building text-[9px]"></i> <?= htmlspecialchars($lead['company']) ?>
                        <?= !empty($lead['city']) ? '(' . htmlspecialchars($lead['city']) . ')' : '' ?>
                      </div>
                    <?php endif; ?>
                    <?php if (!empty($lead['message'])): ?>
                      <div class="text-[11px] text-slate-600 italic bg-slate-50 rounded p-1.5 mt-1 border border-slate-100 max-w-sm truncate" title="<?= htmlspecialchars($lead['message']) ?>">
                        "<?= htmlspecialchars($lead['message']) ?>"
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
                  <td class="py-3.5 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                    <?= date('d M Y, h:i A', strtotime($lead['created_at'])) ?>
                  </td>

                  <!-- Status -->
                  <td class="py-3.5 px-4">
                    <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border <?= $statusBadge ?>">
                      <?= str_replace('_', ' ', $lead['status']) ?>
                    </span>
                  </td>

                  <!-- Actions -->
                  <td class="py-3.5 px-5 text-right space-x-1.5 whitespace-nowrap">
                    <!-- WhatsApp -->
                    <a
                      href="https://wa.me/<?= $cleanPhone ?>?text=Hello%20<?= urlencode($lead['name']) ?>,%20thank%20you%20for%20contacting%20R.S%20Enterprises%20regarding%20<?= urlencode($lead['product_interest'] ?? 'Tally') ?>."
                      target="_blank"
                      title="Chat on WhatsApp"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <i class="fa-brands fa-whatsapp text-sm"></i>
                    </a>

                    <!-- Call -->
                    <a
                      href="tel:<?= $cleanPhone ?>"
                      title="Call"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0052cc] hover:bg-[#0052cc] hover:text-white transition-colors"
                    >
                      <i class="fa-solid fa-phone text-xs"></i>
                    </a>

                    <!-- Edit / View Modal Trigger -->
                    <button
                      onclick='openLeadModal(<?= json_encode($lead, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP) ?>)'
                      title="Edit Notes & Status"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <i class="fa-solid fa-pen-to-square text-xs"></i>
                    </button>

                    <!-- Delete Form -->
                    <form method="POST" action="inquiries.php" class="inline-block" onsubmit="return confirm('Are you sure you want to delete this inquiry?')">
                      <input type="hidden" name="action" value="delete">
                      <input type="hidden" name="id" value="<?= $lead['id'] ?>">
                      <button
                        type="submit"
                        title="Delete"
                        class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors"
                      >
                        <i class="fa-solid fa-trash text-xs"></i>
                      </button>
                    </form>
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

<!-- Edit Lead Details Modal -->
<div id="leadModal" class="fixed inset-0 bg-black/60 z-50 hidden flex items-center justify-center p-4">
  <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
    
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
      <div>
        <h3 class="text-base font-extrabold text-[#0a1a38]" id="mName">Lead Details</h3>
        <p class="text-xs text-slate-500 mt-0.5" id="mMeta"></p>
      </div>
      <button onclick="closeLeadModal()" class="text-slate-400 hover:text-slate-600 p-1">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <!-- Client Full Details -->
    <div class="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
      <div><strong class="text-slate-700">Phone:</strong> <span id="mPhone" class="font-mono text-slate-900 font-bold"></span></div>
      <div><strong class="text-slate-700">Email:</strong> <span id="mEmail" class="text-slate-800"></span></div>
      <div><strong class="text-slate-700">Company:</strong> <span id="mCompany" class="text-slate-800"></span></div>
      <div><strong class="text-slate-700">Product Interest:</strong> <span id="mProduct" class="text-blue-600 font-bold"></span></div>
      <div><strong class="text-slate-700">Customer Message:</strong> <div id="mMessage" class="mt-1 text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200"></div></div>
    </div>

    <!-- Status & Notes Edit Form -->
    <form method="POST" action="inquiries.php" class="space-y-4">
      <input type="hidden" name="action" value="update">
      <input type="hidden" name="id" id="mId" value="">

      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1.5">Update Status</label>
        <select name="status" id="mStatus" class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0052cc]">
          <option value="new">New (Unread)</option>
          <option value="in_progress">In Progress</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted (Closed Won)</option>
          <option value="closed">Closed (No Interest)</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1.5">Internal Admin Notes</label>
        <textarea
          name="notes"
          id="mNotes"
          rows="3"
          placeholder="e.g. Spoke with Rajesh, scheduled on-site demo for Tuesday 3 PM..."
          class="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0052cc]"
        ></textarea>
      </div>

      <div class="flex items-center justify-end gap-2.5 pt-2">
        <button type="button" onclick="closeLeadModal()" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition">Cancel</button>
        <button type="submit" class="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition shadow-sm">Save Changes</button>
      </div>
    </form>

  </div>
</div>

<script>
  function openLeadModal(lead) {
    document.getElementById('mId').value = lead.id;
    document.getElementById('mName').textContent = lead.name;
    document.getElementById('mMeta').textContent = '#' + lead.id + ' • ' + lead.type.toUpperCase() + ' • ' + lead.created_at;
    document.getElementById('mPhone').textContent = lead.phone;
    document.getElementById('mEmail').textContent = lead.email || 'N/A';
    document.getElementById('mCompany').textContent = (lead.company || 'N/A') + (lead.city ? ' (' + lead.city + ')' : '');
    document.getElementById('mProduct').textContent = lead.product_interest || 'General';
    document.getElementById('mMessage').textContent = lead.message || 'No additional message provided.';
    document.getElementById('mStatus').value = lead.status;
    document.getElementById('mNotes').value = lead.notes || '';

    document.getElementById('leadModal').classList.remove('hidden');
  }

  function closeLeadModal() {
    document.getElementById('leadModal').classList.add('hidden');
  }
</script>

  </div>
</body>
</html>
