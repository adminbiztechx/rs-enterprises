<?php
// API: Dashboard Statistics
declare(strict_types=1);

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

session_start();
if (empty($_SESSION['admin_logged_in'])) {
    jsonResponse(false, 'Unauthorized', null, 401);
}

// 1. Inquiries counts
$totalInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries")->fetchColumn();
$newInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();
$todayInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE DATE(created_at) = CURDATE()")->fetchColumn();
$convertedInquiries = (int)$pdo->query("SELECT COUNT(*) FROM inquiries WHERE status = 'converted'")->fetchColumn();

// 2. Breakdown by type
$typeCounts = [];
$typeStmt = $pdo->query("SELECT type, COUNT(*) as count FROM inquiries GROUP BY type");
while ($row = $typeStmt->fetch()) {
    $typeCounts[$row['type']] = (int)$row['count'];
}

// 3. Products & Services count
$totalProducts = (int)$pdo->query("SELECT COUNT(*) FROM products WHERE is_active = 1")->fetchColumn();
$totalServices = (int)$pdo->query("SELECT COUNT(*) FROM services WHERE is_active = 1")->fetchColumn();

// 4. Latest 5 inquiries
$recentStmt = $pdo->query("SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 5");
$recentInquiries = $recentStmt->fetchAll();

jsonResponse(true, 'Stats retrieved', [
    'stats' => [
        'total_inquiries'     => $totalInquiries,
        'new_inquiries'       => $newInquiries,
        'today_inquiries'     => $todayInquiries,
        'converted_inquiries' => $convertedInquiries,
        'type_counts'         => $typeCounts,
        'total_products'      => $totalProducts,
        'total_services'      => $totalServices
    ],
    'recent_inquiries' => $recentInquiries
]);
