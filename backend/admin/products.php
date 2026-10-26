<?php
// Admin Products Management
declare(strict_types=1);

require_once __DIR__ . '/includes/auth_check.php';
require_once __DIR__ . '/../config/db.php';

$pageTitle = 'Manage Products';

// Handle POST actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? 'save';

    if ($action === 'delete') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $del = $pdo->prepare("DELETE FROM products WHERE id = :id");
            $del->execute([':id' => $id]);
            header('Location: products.php?msg=deleted');
            exit;
        }
    }

    if ($action === 'toggle') {
        $id = (int)($_POST['id'] ?? 0);
        $curr = (int)($_POST['current_status'] ?? 1);
        $new = $curr === 1 ? 0 : 1;
        $up = $pdo->prepare("UPDATE products SET is_active = :a WHERE id = :id");
        $up->execute([':a' => $new, ':id' => $id]);
        header('Location: products.php?msg=status_changed');
        exit;
    }

    if ($action === 'save') {
        $id = (int)($_POST['id'] ?? 0);
        $title = trim($_POST['title'] ?? '');
        $slug = trim($_POST['slug'] ?? '');
        $category = trim($_POST['category'] ?? 'TallyPrime');
        $desc = trim($_POST['desc'] ?? '');
        $link_text = trim($_POST['link_text'] ?? 'Request Demo');
        $sort_order = (int)($_POST['sort_order'] ?? 0);
        $is_active = isset($_POST['is_active']) ? 1 : 0;
        
        $featuresRaw = trim($_POST['features'] ?? '');
        $features = array_values(array_filter(array_map('trim', explode("\n", $featuresRaw))));
        $features_json = json_encode($features, JSON_UNESCAPED_UNICODE);

        if (empty($slug)) {
            $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
        }

        if ($id > 0) {
            // Update
            $stmt = $pdo->prepare("
                UPDATE products 
                SET title = :title, slug = :slug, category = :category, `desc` = :desc,
                    features_json = :features_json, link_text = :link_text, sort_order = :sort_order, is_active = :is_active
                WHERE id = :id
            ");
            $stmt->execute([
                ':title'         => $title,
                ':slug'          => $slug,
                ':category'      => $category,
                ':desc'          => $desc,
                ':features_json' => $features_json,
                ':link_text'     => $link_text,
                ':sort_order'    => $sort_order,
                ':is_active'     => $is_active,
                ':id'            => $id
            ]);
            header('Location: products.php?msg=saved');
            exit;
        } else {
            // Insert
            $stmt = $pdo->prepare("
                INSERT INTO products (title, slug, category, `desc`, features_json, link_text, sort_order, is_active)
                VALUES (:title, :slug, :category, :desc, :features_json, :link_text, :sort_order, :is_active)
            ");
            $stmt->execute([
                ':title'         => $title,
                ':slug'          => $slug,
                ':category'      => $category,
                ':desc'          => $desc,
                ':features_json' => $features_json,
                ':link_text'     => $link_text,
                ':sort_order'    => $sort_order,
                ':is_active'     => $is_active
            ]);
            header('Location: products.php?msg=created');
            exit;
        }
    }
}

// Fetch products
$stmt = $pdo->query("SELECT * FROM products ORDER BY sort_order ASC, id ASC");
$products = $stmt->fetchAll();

$newInquiriesCount = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();

require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/sidebar.php';
?>

<main class="flex-1 min-w-0 overflow-y-auto">
  
  <!-- Header Bar -->
  <div class="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
    <div>
      <h1 class="text-xl font-extrabold text-[#0a1a38] tracking-tight">Tally Products Catalog</h1>
      <p class="text-xs text-slate-500 mt-0.5">Manage products displayed on the live website and products carousel.</p>
    </div>
    <div>
      <button
        onclick="openProductModal()"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition-colors shadow-sm cursor-pointer"
      >
        <i class="fa-solid fa-plus text-xs"></i>
        <span>Add New Product</span>
      </button>
    </div>
  </div>

  <div class="p-6 space-y-6 max-w-7xl">

    <?php if (isset($_GET['msg'])): ?>
      <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
          <span>Action completed successfully!</span>
        </span>
        <button onclick="this.parentElement.remove()" class="text-emerald-700 hover:text-emerald-900"><i class="fa-solid fa-xmark"></i></button>
      </div>
    <?php endif; ?>

    <!-- Products Grid / Table -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      
      <div class="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div>Total Products: <strong class="text-slate-800"><?= count($products) ?></strong></div>
        <div class="text-[11px] text-slate-400">Products are ordered by 'Sort Order' on the live site</div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200/80 uppercase text-[10.5px] tracking-wider">
              <th class="py-3.5 px-5">Order</th>
              <th class="py-3.5 px-5">Product Title & Category</th>
              <th class="py-3.5 px-4">Key Features</th>
              <th class="py-3.5 px-4">Button Text</th>
              <th class="py-3.5 px-4">Status</th>
              <th class="py-3.5 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <?php foreach ($products as $p): 
              $feats = json_decode($p['features_json'] ?? '[]', true) ?: [];
            ?>
              <tr class="hover:bg-slate-50/60 transition-colors">
                <td class="py-3.5 px-5 font-mono text-slate-400 font-bold text-xs">
                  #<?= $p['sort_order'] ?>
                </td>

                <!-- Title & Desc -->
                <td class="py-3.5 px-5">
                  <div class="font-extrabold text-[#0a1a38] text-sm"><?= htmlspecialchars($p['title']) ?></div>
                  <span class="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0052cc] border border-blue-100">
                    <?= htmlspecialchars($p['category']) ?>
                  </span>
                  <p class="text-xs text-slate-500 mt-1 max-w-sm truncate" title="<?= htmlspecialchars($p['desc']) ?>">
                    <?= htmlspecialchars($p['desc']) ?>
                  </p>
                </td>

                <!-- Features -->
                <td class="py-3.5 px-4">
                  <div class="space-y-0.5">
                    <?php foreach (array_slice($feats, 0, 3) as $f): ?>
                      <div class="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <i class="fa-solid fa-check text-[9px] text-emerald-500"></i>
                        <span><?= htmlspecialchars($f) ?></span>
                      </div>
                    <?php endforeach; ?>
                    <?php if (count($feats) > 3): ?>
                      <span class="text-[10px] text-slate-400 font-semibold">+<?= count($feats) - 3 ?> more</span>
                    <?php endif; ?>
                  </div>
                </td>

                <!-- Link Text -->
                <td class="py-3.5 px-4 font-semibold text-slate-700">
                  <?= htmlspecialchars($p['link_text']) ?>
                </td>

                <!-- Status Toggle -->
                <td class="py-3.5 px-4">
                  <form method="POST" action="products.php" class="inline-block">
                    <input type="hidden" name="action" value="toggle">
                    <input type="hidden" name="id" value="<?= $p['id'] ?>">
                    <input type="hidden" name="current_status" value="<?= $p['is_active'] ?>">
                    <button
                      type="submit"
                      class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border cursor-pointer <?= $p['is_active'] ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200' ?>"
                      title="Click to toggle status"
                    >
                      <?= $p['is_active'] ? 'Active' : 'Inactive' ?>
                    </button>
                  </form>
                </td>

                <!-- Actions -->
                <td class="py-3.5 px-5 text-right space-x-1.5 whitespace-nowrap">
                  <!-- Edit -->
                  <button
                    onclick='editProduct(<?= json_encode($p, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP) ?>)'
                    class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0052cc] hover:bg-[#0052cc] hover:text-white transition-colors"
                    title="Edit Product"
                  >
                    <i class="fa-solid fa-pen text-xs"></i>
                  </button>

                  <!-- Delete -->
                  <form method="POST" action="products.php" class="inline-block" onsubmit="return confirm('Delete this product?')">
                    <input type="hidden" name="action" value="delete">
                    <input type="hidden" name="id" value="<?= $p['id'] ?>">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors"
                      title="Delete Product"
                    >
                      <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                  </form>
                </td>

              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</main>

<!-- Add / Edit Product Modal -->
<div id="productModal" class="fixed inset-0 bg-black/60 z-50 hidden flex items-center justify-center p-4 overflow-y-auto">
  <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
    
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
      <h3 class="text-base font-extrabold text-[#0a1a38]" id="pModalTitle">Add New Product</h3>
      <button onclick="closeProductModal()" class="text-slate-400 hover:text-slate-600 p-1">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <form method="POST" action="products.php" class="space-y-4">
      <input type="hidden" name="action" value="save">
      <input type="hidden" name="id" id="pId" value="0">

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Title -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Product Title *</label>
          <input type="text" name="title" id="pTitle" required placeholder="e.g. TallyPrime Silver" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>
        <!-- Category -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Category *</label>
          <select name="category" id="pCategory" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
            <option value="TallyPrime">TallyPrime</option>
            <option value="TallyPrime Server">TallyPrime Server</option>
            <option value="Add-ons">Add-ons</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Services">Services</option>
            <option value="Other Products">Other Products</option>
          </select>
        </div>
      </div>

      <!-- Description -->
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Short Description *</label>
        <textarea name="desc" id="pDesc" rows="2" required placeholder="Brief 1-2 sentence description..." class="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#0052cc]"></textarea>
      </div>

      <!-- Features (One per line) -->
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Key Features (One feature per line)</label>
        <textarea name="features" id="pFeatures" rows="4" placeholder="Advanced Reporting&#10;Inventory Management&#10;GST Compliance" class="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#0052cc]"></textarea>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Button Text -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">CTA Button</label>
          <input type="text" name="link_text" id="pLinkText" value="Request Demo" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>
        <!-- Sort Order -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Sort Order</label>
          <input type="number" name="sort_order" id="pSortOrder" value="0" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#0052cc]">
        </div>
        <!-- Is Active Checkbox -->
        <div class="flex items-center pt-5">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="is_active" id="pIsActive" value="1" checked class="w-4 h-4 text-blue-600 rounded">
            <span class="text-xs font-bold text-slate-700">Active on Website</span>
          </label>
        </div>
      </div>

      <div class="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
        <button type="button" onclick="closeProductModal()" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition">Cancel</button>
        <button type="submit" class="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0043a8] transition shadow-sm">Save Product</button>
      </div>

    </form>

  </div>
</div>

<script>
  function openProductModal() {
    document.getElementById('pModalTitle').textContent = 'Add New Product';
    document.getElementById('pId').value = '0';
    document.getElementById('pTitle').value = '';
    document.getElementById('pCategory').value = 'TallyPrime';
    document.getElementById('pDesc').value = '';
    document.getElementById('pFeatures').value = '';
    document.getElementById('pLinkText').value = 'Request Demo';
    document.getElementById('pSortOrder').value = '0';
    document.getElementById('pIsActive').checked = true;

    document.getElementById('productModal').classList.remove('hidden');
  }

  function editProduct(p) {
    document.getElementById('pModalTitle').textContent = 'Edit Product: ' + p.title;
    document.getElementById('pId').value = p.id;
    document.getElementById('pTitle').value = p.title;
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pDesc').value = p.desc;
    
    let feats = [];
    try { feats = JSON.parse(p.features_json || '[]'); } catch(e){}
    document.getElementById('pFeatures').value = feats.join('\n');

    document.getElementById('pLinkText').value = p.link_text || 'Request Demo';
    document.getElementById('pSortOrder').value = p.sort_order || 0;
    document.getElementById('pIsActive').checked = p.is_active == 1;

    document.getElementById('productModal').classList.remove('hidden');
  }

  function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
  }
</script>

  </div>
</body>
</html>
