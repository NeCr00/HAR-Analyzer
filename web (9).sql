-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2021 at 05:06 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.28

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

--
-- Dumping data for table `entry`
--

INSERT INTO `entry` (`entryId`, `user_id`, `uploadDate`, `startedDateTime`, `serverIPAddress`, `lat`, `lng`, `wait`, `method`, `url`, `hostRequest`, `pragmaRequest`, `cache_controlRequest`, `status`, `statusText`, `cache_controlResponse`, `pragmaResponse`, `ageResponse`, `last_modifiedResponse`, `content_typeResponse`, `expiresResponse`, `isp`) VALUES
(672, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:15.910Z', '192.229.133.221', NULL, NULL, 55.971, 'GET', 'www.w3schools.com', '', '', 'max-age=0', '200', '', 'Public,public', '', '11327', 'Tue, 03 Aug 2021 21:32:28 GMT', 'text/html', 'Wed, 04 Aug 2021 04:41:15 GMT', 'Evergy S.A.'),
(673, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.007Z', '192.229.133.221', NULL, NULL, 0.069, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5944', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(674, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.008Z', '192.229.133.221', NULL, NULL, 0.037, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5994', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(675, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.008Z', '192.229.133.221', NULL, NULL, 0.048, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5932', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(676, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.008Z', '192.229.133.221', NULL, NULL, 0.0530001, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5949', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(677, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.008Z', '192.229.133.221', NULL, NULL, 0.066, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5857', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(678, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.008Z', '192.229.133.221', NULL, NULL, 0.048, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '4914', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(679, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.010Z', '192.229.133.221', NULL, NULL, 0.054, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '433', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/css', '', 'Evergy S.A.'),
(680, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.010Z', '', NULL, NULL, 0, 'GET', 'cdn.snigelweb.com', '', '', '', '0', '', '', '', '', '', '', '', 'Evergy S.A.'),
(681, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.010Z', '', NULL, NULL, 0, 'GET', 'cdn.snigelweb.com', '', '', '', '0', '', '', '', '', '', '', '', 'Evergy S.A.'),
(682, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.011Z', '192.229.133.221', NULL, NULL, 0.083, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '4987', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/javascript', '', 'Evergy S.A.'),
(683, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.011Z', '192.229.133.221', NULL, NULL, 0.038, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '10619', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(684, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.011Z', '192.229.133.221', NULL, NULL, 0.036, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '928', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(685, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.011Z', '192.229.133.221', NULL, NULL, 0.034, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '7356', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/jpeg', '', 'Evergy S.A.'),
(686, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.040Z', '[2a00:1450:4001:800::200e]', NULL, NULL, 0.133, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'public, max-age=7200', '', '215', 'Tue, 13 Jul 2021 18:24:06 GMT', 'text/javascript', 'Wed, 04 Aug 2021 01:36:34 GMT', 'Evergy S.A.'),
(687, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.041Z', '192.229.133.221', NULL, NULL, 0.054, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '11402', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/javascript', '', 'Evergy S.A.'),
(688, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.059Z', '192.229.133.221', NULL, NULL, 0.346, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '11574', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/html', '', 'Evergy S.A.'),
(689, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.060Z', '192.229.133.221', NULL, NULL, 0.47, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '10892', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/html', '', 'Evergy S.A.'),
(690, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.103Z', '192.229.133.221', NULL, NULL, 0.094, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5296', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(691, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.126Z', '[2a00:1450:4001:831::200e]', NULL, NULL, 73.275, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'private, max-age=900', '', '', '', 'application/javascript; charset=UTF-8', 'Wed, 04 Aug 2021 00:41:15 GMT', 'Evergy S.A.'),
(692, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.132Z', '34.121.251.0', NULL, NULL, 148.805, 'POST', 'my-learning.w3schools.com', '', '', '', '200', '', 'no-store, no-cache, must-revalidate', 'no-cache', '', 'Wed, 04 Aug 2021 00:41:15 GMT', 'text/html; charset=UTF-8', 'Mon, 26 Jun 1997 05:00:00 GMT', 'Evergy S.A.'),
(693, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.270Z', '[2a00:1450:4001:831::200e]', NULL, NULL, 55.494, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'no-cache, no-store, must-revalidate', 'no-cache', '16005', 'Sun, 17 May 1998 03:00:00 GMT', 'image/gif', 'Mon, 01 Jan 1990 00:00:00 GMT', 'Evergy S.A.'),
(694, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:16.272Z', '192.229.133.221', NULL, NULL, 56.016, 'GET', 'www.w3schools.com', '', 'no-cache', 'no-cache', '200', '', 'public,max-age=14400,public', '', '11529', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/x-icon', '', 'Evergy S.A.'),
(695, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.832Z', '192.229.133.221', NULL, NULL, 55.678, 'GET', 'www.w3schools.com', '', '', 'max-age=0', '200', '', 'Public,public', '', '5566', 'Tue, 03 Aug 2021 23:08:41 GMT', 'text/html', 'Wed, 04 Aug 2021 04:41:27 GMT', 'Evergy S.A.'),
(696, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.922Z', '192.229.133.221', NULL, NULL, 0.128, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5944', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(697, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.923Z', '192.229.133.221', NULL, NULL, 0.043, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5994', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(698, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.923Z', '192.229.133.221', NULL, NULL, 0.043, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5932', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(699, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.923Z', '192.229.133.221', NULL, NULL, 0.074, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5949', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(700, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.923Z', '192.229.133.221', NULL, NULL, 0.0469999, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5857', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(701, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.923Z', '192.229.133.221', NULL, NULL, 0.069, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '4914', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/font-woff2', '', 'Evergy S.A.'),
(702, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.925Z', '192.229.133.221', NULL, NULL, 0.054, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '433', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/css', '', 'Evergy S.A.'),
(703, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.925Z', '', NULL, NULL, 0, 'GET', 'cdn.snigelweb.com', '', '', '', '0', '', '', '', '', '', '', '', 'Evergy S.A.'),
(704, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.925Z', '', NULL, NULL, 0, 'GET', 'cdn.snigelweb.com', '', '', '', '0', '', '', '', '', '', '', '', 'Evergy S.A.'),
(705, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.926Z', '192.229.133.221', NULL, NULL, 0.061, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '4987', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/javascript', '', 'Evergy S.A.'),
(706, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.926Z', '192.229.133.221', NULL, NULL, 0.199, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '10619', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(707, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.926Z', '192.229.133.221', NULL, NULL, 0.31, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '928', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(708, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.926Z', '192.229.133.221', NULL, NULL, 0.041, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '7356', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/jpeg', '', 'Evergy S.A.'),
(709, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.951Z', '[2a00:1450:4001:800::200e]', NULL, NULL, 0.195, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'public, max-age=7200', '', '215', 'Tue, 13 Jul 2021 18:24:06 GMT', 'text/javascript', 'Wed, 04 Aug 2021 01:36:34 GMT', 'Evergy S.A.'),
(710, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.952Z', '192.229.133.221', NULL, NULL, 0.052, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '11402', 'Tue, 03 Aug 2021 11:56:20 GMT', 'application/javascript', '', 'Evergy S.A.'),
(711, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.971Z', '192.229.133.221', NULL, NULL, 0.195, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '11574', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/html', '', 'Evergy S.A.'),
(712, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:27.972Z', '192.229.133.221', NULL, NULL, 0.204, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '10892', 'Tue, 03 Aug 2021 11:56:20 GMT', 'text/html', '', 'Evergy S.A.'),
(713, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:28.002Z', '192.229.133.221', NULL, NULL, 0.068, 'GET', 'www.w3schools.com', '', '', '', '200', '', 'public,max-age=14400,public', '', '5296', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/png', '', 'Evergy S.A.'),
(714, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:28.019Z', '34.121.251.0', NULL, NULL, 148.591, 'POST', 'my-learning.w3schools.com', '', '', '', '200', '', 'no-store, no-cache, must-revalidate', 'no-cache', '', 'Wed, 04 Aug 2021 00:41:27 GMT', 'text/html; charset=UTF-8', 'Mon, 26 Jun 1997 05:00:00 GMT', 'Evergy S.A.'),
(715, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:28.048Z', '[2a00:1450:4001:831::200e]', NULL, NULL, 0.411, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'private, max-age=900', '', '', '', 'application/javascript; charset=UTF-8', 'Wed, 04 Aug 2021 00:41:15 GMT', 'Evergy S.A.'),
(716, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:28.188Z', '[2a00:1450:4001:831::200e]', NULL, NULL, 55.263, 'GET', 'www.google-analytics.com', '', '', '', '200', '', 'no-cache, no-store, must-revalidate', 'no-cache', '16017', 'Sun, 17 May 1998 03:00:00 GMT', 'image/gif', 'Mon, 01 Jan 1990 00:00:00 GMT', 'Evergy S.A.'),
(717, 1, '2021-09-02 20:33:47', '2021-08-04T00:41:28.191Z', '192.229.133.221', NULL, NULL, 53.967, 'GET', 'www.w3schools.com', '', 'no-cache', 'no-cache', '200', '', 'public,max-age=14400,public', '', '11541', 'Tue, 03 Aug 2021 11:56:20 GMT', 'image/x-icon', '', 'Evergy S.A.');

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

--
-- Dumping data for table `serversip`
--

INSERT INTO `serversip` (`server_id`, `user_id`, `server_ip`, `lat`, `lng`, `count`) VALUES
(59, 1, '2a02:26f0:c000:195::30f1', '37.97565', '23.73401', 3),
(60, 1, '2a02:26f0:c000:180::1f51', '37.97565', '23.73401', 148),
(61, 1, '2a02:26f0:c000:1aa::1e80', '37.97565', '23.73401', 4),
(62, 1, '212.205.77.145', '35.32787', '25.14341', 9),
(63, 1, '2a00:1450:4001:812::200a', '50.11552', '8.68417', 1),
(64, 1, '2a00:1450:4001:810::2003', '50.11552', '8.68417', 2),
(65, 1, '2a00:1450:4001:810::2004', '53.33306', '-6.24889', 1),
(66, 1, '2a02:26f0:c000:19e::2c10', '37.97565', '23.73401', 2),
(67, 1, '2a02:26f0:c000:185::1f51', '37.97565', '23.73401', 3),
(68, 1, '2a00:1450:4001:829::2003', '50.11552', '8.68417', 1),
(69, 1, '2a00:1450:4001:808::2003', '50.11552', '8.68417', 1),
(70, 1, '2600:9000:2045:9200:15:8bd8:3100:93a1', '45.46427', '9.18951', 1),
(71, 1, '151.101.17.27', '37.73317', '-122.39864', 1),
(72, 1, '192.229.133.221', '39.04372', '-77.48749', 34),
(73, 1, '2a00:1450:4001:800::200e', '50.11552', '8.68417', 2),
(74, 1, '2a00:1450:4001:831::200e', '50.11552', '8.68417', 4),
(75, 1, '34.121.251.0', '37.3975', '-122.07917', 2);

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
-- Dumping data for table `userips`
--

INSERT INTO `userips` (`id_ip`, `user_id`, `user_ip`, `lat`, `lng`, `isp`) VALUES
(11, 1, '46.190.127.74', '38.05', '23.8', 'Evergy S.A.');

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
  MODIFY `entryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=718;

--
-- AUTO_INCREMENT for table `serversip`
--
ALTER TABLE `serversip`
  MODIFY `server_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userips`
--
ALTER TABLE `userips`
  MODIFY `id_ip` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
