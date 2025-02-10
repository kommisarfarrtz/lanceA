-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Feb 10, 2025 at 08:07 PM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project0`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'أدب'),
(2, 'ألعاب'),
(3, 'إدارة'),
(4, 'إعلانات'),
(5, 'استشارات'),
(6, 'برمجة'),
(7, 'تأليف نصوص'),
(8, 'تجارة إلكترونية'),
(9, 'تحرير'),
(10, 'ترفيه'),
(11, 'تسويق'),
(12, 'تصميم'),
(13, 'تصوير'),
(14, 'تطوير ويب'),
(15, 'تعليم'),
(16, 'تعليم إلكتروني'),
(17, 'تعليم لغات'),
(18, 'تقنية'),
(19, 'رياضة'),
(20, 'سفر'),
(21, 'صحة'),
(22, 'صناعة فيديو'),
(23, 'صيانة أجهزة'),
(24, 'طعام'),
(25, 'علوم'),
(124, 'فن'),
(132, 'كتابة'),
(141, 'موسيقى'),
(138, 'موضة'),
(151, 'هندسة');

-- --------------------------------------------------------

--
-- Table structure for table `completed_services`
--

DROP TABLE IF EXISTS `completed_services`;
CREATE TABLE IF NOT EXISTS `completed_services` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `buyer_id` bigint UNSIGNED NOT NULL,
  `seller_id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `status` enum('pending','completed','canceled') NOT NULL DEFAULT 'pending',
  `completed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `seller_id` (`seller_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` bigint UNSIGNED NOT NULL,
  `receiver_id` bigint UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `jnjnk` (`sender_id`),
  KEY `bb` (`receiver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `user2_id` bigint UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `boo` (`user_id`),
  KEY `oooo` (`user2_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `service_id`, `rating`, `comment`, `created_at`) VALUES
(1, 14, 2, 4, 'fghjbjkn', '2025-02-10 19:00:32'),
(2, 10, 2, 5, 'fioezizjfifj', '2025-02-10 19:00:32'),
(3, 14, 4, 4, 'ghvhjbcsjqc', '2025-02-10 19:01:01'),
(4, 1, 4, 5, 'cjsbcjhcb', '2025-02-10 19:01:01'),
(5, 2, 1, 5, 'خدمة ممتازة وسريعة!', '2025-02-10 19:02:01'),
(6, 3, 2, 4, 'تصميم رائع ولكن السعر مرتفع قليلاً.', '2025-02-10 19:02:01'),
(7, 5, 3, 3, 'دروس جيدة ولكن يمكن تحسين التنظيم.', '2025-02-10 19:02:01'),
(8, 1, 5, 5, 'تنظيم احترافي وأجواء رائعة!', '2025-02-10 19:02:01'),
(9, 4, 1, 4, 'التطبيق يعمل بشكل جيد ولكن به بعض الأخطاء.', '2025-02-10 19:02:01'),
(10, 2, 4, 5, 'استشارة طبية مفيدة وشاملة.', '2025-02-10 19:02:01'),
(11, 3, 2, 3, 'تصميم جيد ولكنه يحتاج لبعض التحسينات.', '2025-02-10 19:02:01'),
(12, 4, 3, 4, 'المدرس ممتاز ويشرح بشكل واضح.', '2025-02-10 19:02:01'),
(13, 5, 5, 5, 'أفضل تجربة لحفلة خاصة مررت بها.', '2025-02-10 19:02:01'),
(14, 1, 2, 2, 'التصميم ليس كما توقعت.', '2025-02-10 19:02:01');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `serviceCoverpic` text NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `price_unit` enum('kg','g','m','hour','litre','piece','none') NOT NULL DEFAULT 'none',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `user_id`, `category_id`, `title`, `description`, `serviceCoverpic`, `price`, `created_at`, `price_unit`) VALUES
(1, 1, 6, 'تطوير تطبيق ويب', 'تطوير تطبيق ويب احترافي باستخدام أحدث التقنيات.', 'cover1.jpg', 500.00, '2025-02-10 18:52:56', 'hour'),
(2, 2, 15, 'تصميم شعار', 'تصميم شعار احترافي يعكس هوية شركتك.', 'cover2.jpg', 300.00, '2025-02-10 18:52:56', 'piece'),
(3, 3, 17, 'دروس لغة إنجليزية', 'دروس مكثفة في اللغة الإنجليزية لجميع المستويات.', 'cover3.jpg', 200.00, '2025-02-10 18:52:56', 'hour'),
(4, 4, 18, 'استشارة طبية', 'استشارة طبية من قبل أخصائي صحة معتمد.', 'cover4.jpg', 100.00, '2025-02-10 18:52:56', 'g'),
(5, 5, 13, 'تنظيم حفلات', 'تنظيم حفلات وأحداث خاصة بشكل احترافي.', 'cover5.jpg', 1000.00, '2025-02-10 18:52:56', 'm'),
(6, 1, 6, 'fezfijoiefojez', 'fkjezbuiezj', 'fiezizeofej', 140.00, '2025-02-10 19:03:04', 'kg'),
(7, 2, 3, 'تصوير فوتوغرافي', 'جلسة تصوير احترافية لمناسباتك الخاصة.', 'cover6.jpg', 200.00, '2025-02-10 19:03:41', 'piece'),
(8, 4, 9, 'ترجمة مستندات', 'ترجمة دقيقة واحترافية من العربية إلى الإنجليزية والعكس.', 'cover7.jpg', 150.00, '2025-02-10 19:03:41', 'piece'),
(9, 1, 14, 'تصميم داخلي', 'تصميم داخلي عصري وعملي يناسب ذوقك.', 'cover8.jpg', 700.00, '2025-02-10 19:03:41', 'none'),
(10, 5, 2, 'إصلاح سيارات', 'خدمات إصلاح وصيانة السيارات بجودة عالية.', 'cover9.jpg', 500.00, '2025-02-10 19:03:41', 'hour'),
(11, 3, 11, 'دروس رياضيات', 'شرح تفصيلي لمفاهيم الرياضيات لجميع المستويات.', 'cover10.jpg', 100.00, '2025-02-10 19:03:41', 'hour'),
(12, 2, 8, 'كتابة محتوى', 'كتابة محتوى جذاب ومتوافق مع تحسين محركات البحث.', 'cover11.jpg', 120.00, '2025-02-10 19:03:41', 'none'),
(13, 1, 21, 'إصلاح الأجهزة الإلكترونية', 'خدمة إصلاح موثوقة للأجهزة الإلكترونية.', 'cover12.jpg', 250.00, '2025-02-10 19:03:41', 'piece'),
(14, 4, 6, 'تصميم مواقع ويب', 'إنشاء مواقع ويب عصرية ومتجاوبة.', 'cover13.jpg', 800.00, '2025-02-10 19:03:41', 'none'),
(15, 3, 15, 'تحليل بيانات', 'تحليل بيانات باستخدام أدوات إحصائية متقدمة.', 'cover14.jpg', 350.00, '2025-02-10 19:03:41', 'hour'),
(16, 5, 7, 'خدمات توصيل', 'توصيل سريع وآمن لأي موقع.', 'cover15.jpg', 50.00, '2025-02-10 19:03:41', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `service_images`
--

DROP TABLE IF EXISTS `service_images`;
CREATE TABLE IF NOT EXISTS `service_images` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `service_img` varchar(225) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`,`service_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `profile_picture` text,
  `location` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_seller` tinyint(1) DEFAULT '0',
  `stars` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `profile_picture`, `location`, `created_at`, `is_seller`, `stars`) VALUES
(1, 'أحمد', 'السيد', 'ahmed@example.com', 'password1', NULL, 'تونس', '2025-02-10 18:51:34', 1, 5),
(2, 'فاطمة', 'عبدالله', 'fatma@example.com', 'password2', NULL, 'سوسة', '2025-02-10 18:51:34', 0, 4),
(3, 'خالد', 'بن علي', 'khaled@example.com', 'password3', NULL, 'المنستير', '2025-02-10 18:51:34', 1, 3),
(4, 'ليلى', 'محمد', 'layla@example.com', 'password4', NULL, 'تونس العاصمة', '2025-02-10 18:51:34', 0, 2),
(5, 'يوسف', 'المهيري', 'youssef@example.com', 'password5', NULL, 'صفاقس', '2025-02-10 18:51:34', 1, 4),
(6, 'محمد', 'العربي', 'mohamed@gmail.com', 'password123', 'profile1.jpg', 'تونس', '2025-02-10 18:50:58', 1, 5),
(7, 'علي', 'بن سالم', 'ali@gmail.com', 'password123', 'profile2.jpg', 'سوسة', '2025-02-10 18:50:58', 0, 4),
(8, 'خديجة', 'المهيري', 'khadija@gmail.com', 'password123', 'profile3.jpg', 'صفاقس', '2025-02-10 18:50:58', 1, 5),
(9, 'يوسف', 'الحداد', 'youssef@gmail.com', 'password123', 'profile4.jpg', 'تونس', '2025-02-10 18:50:58', 1, 3),
(10, 'آمنة', 'الزهري', 'amina@gmail.com', 'password123', 'profile5.jpg', 'القيروان', '2025-02-10 18:50:58', 0, 4),
(11, 'حمزة', 'الناصر', 'hamza@gmail.com', 'password123', 'profile6.jpg', 'المنستير', '2025-02-10 18:50:58', 1, 5),
(12, 'سلمى', 'الشريف', 'salma@gmail.com', 'password123', 'profile7.jpg', 'تونس', '2025-02-10 18:50:58', 0, 3),
(13, 'فاطمة', 'الغربي', 'fatima@gmail.com', 'password123', 'profile8.jpg', 'مدنين', '2025-02-10 18:50:58', 1, 4),
(14, 'عبد الله', 'الشاذلي', 'abdallah@gmail.com', 'password123', 'profile9.jpg', 'نابل', '2025-02-10 18:50:58', 0, 5),
(15, 'سارة', 'الغنوشي', 'sara@gmail.com', 'password123', 'profile10.jpg', 'بنزرت', '2025-02-10 18:50:58', 1, 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `completed_services`
--
ALTER TABLE `completed_services`
  ADD CONSTRAINT `completed_services_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `completed_services_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `completed_services_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `bb` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jnjnk` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `boo` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `oooo` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `fk_reviews_service_id` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reviews_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `fk_services_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_services_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_images`
--
ALTER TABLE `service_images`
  ADD CONSTRAINT `service_images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service_images_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
