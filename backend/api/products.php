<?php
// API: Products Management
declare(strict_types=1);

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

// -------------------------------------------------------------
// GET: Fetch products
// -------------------------------------------------------------
if ($method === 'GET') {
    $adminView = isset($_GET['admin']) && $_GET['admin'] === '1';

    if ($adminView) {
        session_start();
        if (empty($_SESSION['admin_logged_in'])) {
            jsonResponse(false, 'Unauthorized', null, 401);
        }
        $stmt = $pdo->query("SELECT * FROM products ORDER BY sort_order ASC, id ASC");
    } else {
        $category = $_GET['category'] ?? '';
        if (!empty($category) && $category !== 'All Products') {
            $stmt = $pdo->prepare("SELECT * FROM products WHERE is_active = 1 AND category = :cat ORDER BY sort_order ASC, id ASC");
            $stmt->execute([':cat' => $category]);
        } else {
            $stmt = $pdo->query("SELECT * FROM products WHERE is_active = 1 ORDER BY sort_order ASC, id ASC");
        }
    }

    $products = $stmt->fetchAll();
    foreach ($products as &$p) {
        $p['features'] = json_decode($p['features_json'] ?? '[]', true) ?: [];
    }

    jsonResponse(true, 'Products retrieved', ['products' => $products]);
}

// -------------------------------------------------------------
// POST / PUT / DELETE: Admin Operations
// -------------------------------------------------------------
session_start();
if (empty($_SESSION['admin_logged_in'])) {
    jsonResponse(false, 'Unauthorized. Admin login required.', null, 401);
}

$input = getJsonInput();
$action = $_GET['action'] ?? $input['action'] ?? 'save';

if ($action === 'delete') {
    $id = (int)($input['id'] ?? $_GET['id'] ?? 0);
    if ($id <= 0) {
        jsonResponse(false, 'Invalid ID', null, 422);
    }
    $stmt = $pdo->prepare("DELETE FROM products WHERE id = :id");
    $stmt->execute([':id' => $id]);
    jsonResponse(true, 'Product deleted successfully', ['id' => $id]);
}

if ($action === 'toggle_active') {
    $id = (int)($input['id'] ?? 0);
    $active = (int)($input['is_active'] ?? 1);
    $stmt = $pdo->prepare("UPDATE products SET is_active = :a WHERE id = :id");
    $stmt->execute([':a' => $active, ':id' => $id]);
    jsonResponse(true, 'Product status updated', ['id' => $id, 'is_active' => $active]);
}

// Add or Edit Product
$id = (int)($input['id'] ?? 0);
$title = trim($input['title'] ?? '');
$slug = trim($input['slug'] ?? '');
$category = trim($input['category'] ?? 'TallyPrime');
$desc = trim($input['desc'] ?? '');
$link_text = trim($input['link_text'] ?? 'Request Demo');
$sort_order = (int)($input['sort_order'] ?? 0);
$is_active = (int)($input['is_active'] ?? 1);
$features = $input['features'] ?? [];
if (is_string($features)) {
    // split by newlines or comma if passed as raw text
    $features = array_values(array_filter(array_map('trim', explode("\n", $features))));
}
$features_json = json_encode($features, JSON_UNESCAPED_UNICODE);

if (empty($title)) {
    jsonResponse(false, 'Product title is required', null, 422);
}

if (empty($slug)) {
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
}

if ($id > 0) {
    // Update
    $stmt = $pdo->prepare("
        UPDATE products 
        SET title = :title, slug = :slug, category = :category, `desc` = :desc, 
            features_json = :features_json, link_text = :link_text, 
            sort_order = :sort_order, is_active = :is_active
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
    jsonResponse(true, 'Product updated successfully', ['id' => $id]);
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
    $newId = (int)$pdo->lastInsertId();
    jsonResponse(true, 'Product created successfully', ['id' => $newId], 201);
}
