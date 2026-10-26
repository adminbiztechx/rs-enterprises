<?php
// API: Site Settings
declare(strict_types=1);

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT setting_key, setting_value FROM site_settings");
    $settings = [];
    while ($row = $stmt->fetch()) {
        $settings[$row['setting_key']] = $row['setting_value'];
    }
    jsonResponse(true, 'Settings retrieved', ['settings' => $settings]);
}

if ($method === 'POST') {
    session_start();
    if (empty($_SESSION['admin_logged_in'])) {
        jsonResponse(false, 'Unauthorized', null, 401);
    }

    $input = getJsonInput();
    $allowedKeys = [
        'company_name', 'tagline', 'phone_primary', 'phone_secondary',
        'whatsapp_number', 'email_primary', 'email_support',
        'office_address', 'working_hours', 'experience_years', 'happy_clients'
    ];

    $pdo->beginTransaction();
    try {
        $stmt = $pdo->prepare("
            INSERT INTO site_settings (setting_key, setting_value)
            VALUES (:k, :v)
            ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)
        ");

        foreach ($input as $k => $v) {
            if (in_array($k, $allowedKeys, true)) {
                $stmt->execute([':k' => $k, ':v' => trim((string)$v)]);
            }
        }
        $pdo->commit();
        jsonResponse(true, 'Settings saved successfully');
    } catch (Exception $e) {
        $pdo->rollBack();
        jsonResponse(false, 'Failed to save settings: ' . $e->getMessage(), null, 500);
    }
}
