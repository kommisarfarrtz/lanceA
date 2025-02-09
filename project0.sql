-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Feb 09, 2025 at 04:23 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(5, 'Carpentry'),
(7, 'Cleaning'),
(21, 'Consulting'),
(12, 'Cooking'),
(8, 'Delivery'),
(4, 'Electrical'),
(17, 'Event Planning'),
(14, 'Fitness Training'),
(15, 'Gardening'),
(19, 'Handyman'),
(6, 'Landscaping'),
(13, 'Mechanic'),
(18, 'Music Lessons'),
(10, 'Painting'),
(16, 'Pet Care'),
(9, 'Photography'),
(3, 'Plumbing'),
(20, 'Tech Support'),
(11, 'Tutoring'),
(22, 'Writing');

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
) ;

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `user_id`, `category_id`, `title`, `description`, `serviceCoverpic`, `price`, `created_at`, `price_unit`) VALUES
(11, 7, 7, 'Event Photography', 'Professional photoshoots', 'photo.jpg', 150.00, '2025-02-09 16:20:07', 'hour'),
(12, 8, 8, 'Wall Painting', 'Interior and exterior painting', 'painting.jpg', 100.00, '2025-02-09 16:20:07', 'm'),
(13, 9, 9, 'Math Tutoring', 'Private lessons for students', 'tutoring.jpg', 40.00, '2025-02-09 16:20:07', 'hour'),
(14, 10, 10, 'Catering Services', 'Delicious catering for events', 'catering.jpg', 500.00, '2025-02-09 16:20:07', 'none'),
(21, 7, 7, 'Event Photography', 'Professional photoshoots', 'photo.jpg', 150.00, '2025-02-09 16:20:20', 'hour'),
(22, 8, 8, 'Wall Painting', 'Interior and exterior painting', 'painting.jpg', 100.00, '2025-02-09 16:20:20', 'm'),
(23, 9, 9, 'Math Tutoring', 'Private lessons for students', 'tutoring.jpg', 40.00, '2025-02-09 16:20:20', 'hour'),
(24, 10, 10, 'Catering Services', 'Delicious catering for events', 'catering.jpg', 500.00, '2025-02-09 16:20:20', 'none');

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
(7, 'Alice', 'Smith', 'alice@example.com', 'hashedpassword', 'alice.jpg', 'New York', '2025-02-09 16:15:01', 1, 5),
(8, 'Bob', 'Johnson', 'bob@example.com', 'hashedpassword', 'bob.jpg', 'Los Angeles', '2025-02-09 16:15:01', 0, 4),
(9, 'Charlie', 'Brown', 'charlie@example.com', 'hashedpassword', 'charlie.jpg', 'Chicago', '2025-02-09 16:15:01', 1, 3),
(10, 'David', 'Wilson', 'david@example.com', 'hashedpassword', 'david.jpg', 'Houston', '2025-02-09 16:15:01', 1, 4),
(11, 'Emily', 'Clark', 'emily@example.com', 'hashedpassword', 'emily.jpg', 'Phoenix', '2025-02-09 16:15:01', 0, 5),
(12, 'Frank', 'Wright', 'frank@example.com', 'hashedpassword', 'frank.jpg', 'San Diego', '2025-02-09 16:15:01', 1, 4),
(13, 'Grace', 'Hall', 'grace@example.com', 'hashedpassword', 'grace.jpg', 'San Antonio', '2025-02-09 16:15:01', 0, 3),
(14, 'Henry', 'King', 'henry@example.com', 'hashedpassword', 'henry.jpg', 'Dallas', '2025-02-09 16:15:01', 1, 5),
(15, 'Ivy', 'Young', 'ivy@example.com', 'hashedpassword', 'ivy.jpg', 'San Jose', '2025-02-09 16:15:01', 1, 4),
(16, 'Jack', 'Scott', 'jack@example.com', 'hashedpassword', 'jack.jpg', 'Austin', '2025-02-09 16:15:01', 0, 5),
(17, 'Kate', 'Adams', 'kate@example.com', 'hashedpassword', 'kate.jpg', 'San Francisco', '2025-02-09 16:15:01', 1, 4),
(18, 'Leo', 'Baker', 'leo@example.com', 'hashedpassword', 'leo.jpg', 'Seattle', '2025-02-09 16:15:01', 1, 3),
(19, 'Mia', 'Harris', 'mia@example.com', 'hashedpassword', 'mia.jpg', 'Denver', '2025-02-09 16:15:01', 0, 5),
(20, 'Noah', 'Martin', 'noah@example.com', 'hashedpassword', 'noah.jpg', 'Portland', '2025-02-09 16:15:01', 1, 4),
(21, 'Olivia', 'Lee', 'olivia@example.com', 'hashedpassword', 'olivia.jpg', 'Las Vegas', '2025-02-09 16:15:01', 0, 3),
(22, 'Paul', 'Garcia', 'paul@example.com', 'hashedpassword', 'paul.jpg', 'Miami', '2025-02-09 16:15:01', 1, 5),
(23, 'Quinn', 'Miller', 'quinn@example.com', 'hashedpassword', 'quinn.jpg', 'Boston', '2025-02-09 16:15:01', 0, 4),
(24, 'Ryan', 'Davis', 'ryan@example.com', 'hashedpassword', 'ryan.jpg', 'Philadelphia', '2025-02-09 16:15:01', 1, 5),
(25, 'Sophia', 'Rodriguez', 'sophia@example.com', 'hashedpassword', 'sophia.jpg', 'Detroit', '2025-02-09 16:15:01', 0, 4),
(26, 'Tom', 'Anderson', 'tom@example.com', 'hashedpassword', 'tom.jpg', 'Minneapolis', '2025-02-09 16:15:01', 1, 3);

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
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `fk_services_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_services_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
