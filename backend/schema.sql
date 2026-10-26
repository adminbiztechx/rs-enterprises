-- R.S ENTERPRISES DATABASE SCHEMA
-- Compatible with MySQL 5.7+ / MariaDB 10+ / PHP 8+

CREATE DATABASE IF NOT EXISTS `rs_enterprise_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `rs_enterprise_db`;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(60) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `role` VARCHAR(20) DEFAULT 'admin',
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Inquiries / Leads Table
CREATE TABLE IF NOT EXISTS `inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `type` VARCHAR(30) NOT NULL DEFAULT 'contact', -- 'demo', 'callback', 'contact', 'quote'
  `name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(25) NOT NULL,
  `email` VARCHAR(120) DEFAULT NULL,
  `company` VARCHAR(120) DEFAULT NULL,
  `city` VARCHAR(80) DEFAULT NULL,
  `product_interest` VARCHAR(120) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('new', 'in_progress', 'contacted', 'converted', 'closed') DEFAULT 'new',
  `notes` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_status (`status`),
  INDEX idx_type (`type`),
  INDEX idx_created (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Products Table
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(120) NOT NULL,
  `slug` VARCHAR(120) NOT NULL UNIQUE,
  `category` VARCHAR(60) NOT NULL DEFAULT 'TallyPrime',
  `desc` TEXT NOT NULL,
  `price` VARCHAR(60) DEFAULT NULL,
  `icon_type` VARCHAR(40) DEFAULT 'tally-square',
  `features_json` TEXT DEFAULT NULL,
  `link_text` VARCHAR(40) DEFAULT 'Request Demo',
  `is_active` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Services Table
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(120) NOT NULL,
  `slug` VARCHAR(120) NOT NULL UNIQUE,
  `category` VARCHAR(60) NOT NULL DEFAULT 'Core Services',
  `desc` TEXT NOT NULL,
  `features_json` TEXT DEFAULT NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Site Settings Table (Key-Value Store)
CREATE TABLE IF NOT EXISTS `site_settings` (
  `setting_key` VARCHAR(80) PRIMARY KEY,
  `setting_value` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- SEED INITIAL DATA
-- --------------------------------------------------------

-- Insert default Admin (admin / admin123)
INSERT INTO `admins` (`id`, `username`, `password_hash`, `name`, `email`, `role`)
VALUES (1, 'admin', '$2y$12$Qm51IBTcef9WvxqAOLGHieM/.BIgIox6dgJtKLQDBLcqUO873QDK.', 'System Administrator', 'admin@sysnsol.in', 'admin')
ON DUPLICATE KEY UPDATE `username` = `username`;

-- Insert Site Settings
INSERT INTO `site_settings` (`setting_key`, `setting_value`) VALUES
('company_name', 'Syn N Sol'),
('tagline', 'Authorized Tally Partner for Smarter Business'),
('phone_primary', '+91-9386896383'),
('phone_secondary', '+91-7004128603, +91-9060819603'),
('whatsapp_number', '+919386896383'),
('email_primary', 'info@sysnsol.in'),
('email_support', 'info@sysnsol.in'),
('office_address', 'Head Office: 1st Floor, Madhuri Bhawan, Jamal Road, Patna, Bihar 800001 | Branch Office: Kumar Apartment, Kailash Nagar, Old GT Road, Sasaram, Rohtas-821115'),
('working_hours', 'Mon - Sat: 9:30 AM - 7:00 PM (Sunday Closed)'),
('experience_years', '20+'),
('happy_clients', '10,000+')
ON DUPLICATE KEY UPDATE `setting_value` = VALUES(`setting_value`);

-- Insert Initial Products
INSERT INTO `products` (`title`, `slug`, `category`, `desc`, `features_json`, `link_text`, `sort_order`, `is_active`) VALUES
('TallyPrime', 'tallyprime', 'TallyPrime', 'The all-new business management software designed for SMBs.', '[\"Advanced Reporting\",\"Inventory Management\",\"GST & Compliance\",\"Multi-Company Management\"]', 'Request Demo', 1, 1),
('TallyPrime Server', 'tallyprime-server', 'TallyPrime Server', 'Access TallyPrime from multiple systems in your network with high concurrency.', '[\"Multi-user Access\",\"Centralized Data\",\"Advanced Security\",\"Seamless Performance\"]', 'Request Demo', 2, 1),
('TallyPrime Edit Log', 'tallyprime-edit-log', 'TallyPrime', 'Track and monitor all data changes with complete audit trail compliant with MCA rules.', '[\"Track All Modifications\",\"User-wise Tracking\",\"Data Security\",\"Audit Trail\"]', 'Request Demo', 3, 1),
('TallyPrime Cloud', 'tallyprime-cloud', 'Cloud Solutions', 'Access your business data securely from anywhere, anytime on any device.', '[\"Secure Cloud Access\",\"Automatic Backup\",\"Work From Anywhere\",\"Cost Effective\"]', 'Request Demo', 4, 1),
('TallyPrime Silver', 'tallyprime-silver', 'TallyPrime', 'Single user standalone edition designed specifically for small businesses.', '[\"Single User Access\",\"Essential Features\",\"Easy & Intuitive\",\"Cost Effective\"]', 'Buy Now', 5, 1),
('TallyPrime Gold', 'tallyprime-gold', 'TallyPrime', 'Unlimited multi-user edition with priority support for growing enterprises.', '[\"Advanced Reporting\",\"Inventory & GST\",\"Multi-Company\",\"Priority Support\"]', 'Buy Now', 6, 1),
('TSS (Tally Software Services)', 'tss', 'Services', 'Get the latest regular updates, tax compliance, and technical support for Tally.', '[\"Product Updates\",\"Technical Support\",\"Error Resolutions\",\"Compliance Updates\"]', 'Renew Now', 7, 1),
('Tally Capital', 'tally-capital', 'Other Products', 'Simplify your working capital financing powered by your verified Tally data.', '[\"Business Loans\",\"Quick Approval\",\"Flexible Tenure\",\"Power of Tally Data\"]', 'Know More', 8, 1),
('Tally Certification', 'tally-certification', 'Services', 'Get certified and validate your accounting skills with official Tally certifications.', '[\"Official Certification\",\"Skill Validation\",\"Career Growth\",\"Industry Recognition\"]', 'Learn More', 9, 1)
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- Insert Initial Services
INSERT INTO `services` (`title`, `slug`, `category`, `desc`, `features_json`, `sort_order`, `is_active`) VALUES
('Tally Installation & Setup', 'installation-setup', 'Core Services', 'Professional setup, single and multi-user network configuration for maximum performance.', '[\"Same day installation\",\"Network configuration\",\"Data folder setup\",\"User access rights\"]', 1, 1),
('Tally Customization (TDL)', 'tally-customization', 'Development', 'Custom invoice formats, vouchers, custom fields, and tailored industry workflows.', '[\"Custom invoice & voucher formats\",\"Automated workflows\",\"Custom fields & reports\",\"Industry modules\"]', 2, 1),
('Tally Data Migration', 'data-migration', 'Data Services', 'Safe and seamless data transfer from older Tally versions (4.5, 7.2, 9, ERP 9) to TallyPrime.', '[\"Zero data loss guaranteed\",\"Version upgrades\",\"Error correction\",\"Trial balance verification\"]', 3, 1),
('Tally on Cloud', 'tally-on-cloud', 'Cloud Solutions', 'Host your Tally data on ultra-secure cloud servers with 99.9% uptime and anywhere access.', '[\"Access from anywhere\",\"Daily automated backups\",\"Ransomware protection\",\"Multi-device support\"]', 4, 1),
('TSS Renewal & AMC Support', 'tss-amc-support', 'Support', 'Annual maintenance contracts and TSS renewal with dedicated phone and remote support.', '[\"Priority telephone support\",\"Instant remote assistance\",\"Tax rate update assistance\",\"Regular health checkup\"]', 5, 1),
('GST & E-Invoicing Setup', 'gst-einvoicing', 'Compliance', 'One-click e-invoice and e-way bill generation setup directly from within TallyPrime.', '[\"GSP/ASP API integration\",\"E-invoice QR code on invoices\",\"Bulk e-way bill generation\",\"GSTR-1, 3B, 9 reconciliation\"]', 6, 1)
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- Insert Sample Inquiries to populate dashboard
INSERT INTO `inquiries` (`type`, `name`, `phone`, `email`, `company`, `city`, `product_interest`, `message`, `status`) VALUES
('demo', 'Rajesh Sharma', '+91 98112 34567', 'rajesh@sharmatraders.in', 'Sharma Traders Pvt Ltd', 'New Delhi', 'TallyPrime Gold', 'Need a demo for multi-user TallyPrime across 5 computers with GST filing.', 'new'),
('callback', 'Pooja Verma', '+91 98220 98765', 'pooja@vermafabrics.com', 'Verma Fabrics', 'Surat', 'Tally on Cloud', 'Interested in accessing Tally from factory and home. Please call back.', 'in_progress'),
('contact', 'Amit Patel', '+91 99090 12345', 'amit@patelcorp.com', 'Patel Logistics', 'Ahmedabad', 'Tally Customization (TDL)', 'Need custom invoice format with QR code and automated dispatch slip.', 'contacted'),
('quote', 'Vikram Malhotra', '+91 98450 56789', 'vikram@malhotratech.com', 'Malhotra Technologies', 'Bengaluru', 'TallyPrime Server', 'Looking for enterprise pricing for 20+ concurrent users.', 'converted')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);
