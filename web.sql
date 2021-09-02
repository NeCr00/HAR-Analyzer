-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2021 at 07:36 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `entry`
--

CREATE TABLE `entry` (
  `entryId` int(11) NOT NULL,
  `user_id` smallint(5) UNSIGNED NOT NULL,
  `uploadDate` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `startedDateTime` varchar(255) NOT NULL,
  `serverIPAddress` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  `wait` float DEFAULT NULL,
  `method` enum('GET','POST','PUT','HEAD','DELETE','CONNECT','OPTIONS','TRACE','PATCH') DEFAULT NULL,
  `url` varchar(2083) DEFAULT NULL,
  `hostRequest` varchar(255) DEFAULT NULL,
  `pragmaRequest` varchar(255) DEFAULT NULL,
  `cache_controlRequest` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `statusText` varchar(255) DEFAULT NULL,
  `cache_controlResponse` varchar(255) DEFAULT NULL,
  `pragmaResponse` varchar(255) DEFAULT NULL,
  `ageResponse` varchar(255) DEFAULT NULL,
  `last_modifiedResponse` varchar(255) DEFAULT NULL,
  `content_typeResponse` varchar(255) DEFAULT NULL,
  `expiresResponse` varchar(255) DEFAULT NULL,
  `isp` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `serversip`
--

CREATE TABLE `serversip` (
  `server_id` int(11) NOT NULL,
  `user_id` smallint(5) UNSIGNED NOT NULL,
  `server_ip` varchar(100) NOT NULL,
  `lat` varchar(100) NOT NULL,
  `lng` varchar(100) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` smallint(5) UNSIGNED NOT NULL,
  `role` enum('Admin','User') NOT NULL DEFAULT 'User',
  `username` varchar(60) NOT NULL,
  `password` longtext NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `role`, `username`, `password`, `email`) VALUES
(1, 'User', 'Test', 'test', 'test@test.com'),
(6, 'Admin', 'admin', 'admin', ''),
(7, 'User', 'giannis', 'Giannis007!', ''),
(8, 'User', 'necro', 'Giannis007!', ''),
(9, 'User', 'john', 'Johny007!', 'giannisxristodou@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `userips`
--

CREATE TABLE `userips` (
  `id_ip` int(11) NOT NULL,
  `user_id` smallint(5) UNSIGNED NOT NULL,
  `user_ip` varchar(100) NOT NULL,
  `lat` varchar(100) NOT NULL,
  `lng` varchar(100) NOT NULL,
  `isp` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entry`
--
ALTER TABLE `entry`
  ADD PRIMARY KEY (`entryId`),
  ADD KEY `foreignν` (`user_id`);

--
-- Indexes for table `serversip`
--
ALTER TABLE `serversip`
  ADD PRIMARY KEY (`server_id`),
  ADD KEY `foreign` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `userips`
--
ALTER TABLE `userips`
  ADD PRIMARY KEY (`id_ip`),
  ADD KEY `foreign_key` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entry`
--
ALTER TABLE `entry`
  MODIFY `entryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1324;

--
-- AUTO_INCREMENT for table `serversip`
--
ALTER TABLE `serversip`
  MODIFY `server_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userips`
--
ALTER TABLE `userips`
  MODIFY `id_ip` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `entry`
--
ALTER TABLE `entry`
  ADD CONSTRAINT `foreignν` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `serversip`
--
ALTER TABLE `serversip`
  ADD CONSTRAINT `foreign` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userips`
--
ALTER TABLE `userips`
  ADD CONSTRAINT `foreign_key` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
