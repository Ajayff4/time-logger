-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2020 at 07:27 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timelogger`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories`
(
  `category` varchar
(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`
category`)
VALUES
  ('non-official'),
  ('official'),
  ('test');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs`
(
  `id` int
(11) NOT NULL,
  `tag` varchar
(50) NOT NULL DEFAULT '--',
  `date_time` varchar
(50) NOT NULL DEFAULT '--',
  `duration` int
(11) NOT NULL DEFAULT 0,
  `log_details` varchar
(100) NOT NULL DEFAULT '--'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`
id`,
`tag
`, `date_time`, `duration`, `log_details`) VALUES
(1, 'lunch', '2020-05-22 13:37:53.812', 0, ''),
(2, 'first-log', '2020-05-22 13:49:48.309', 0, 'Starting the day'),
(3, 'lunch', '2020-05-22 13:49:59.650', 0, ''),
(4, 'work', '2020-05-25 07:47:01.729', 0, 'studying TC code base from 7:00AM'),
(5, 'first-log', '2020-05-26 10:11:26.259', 0, 'had scrum with team'),
(6, 'testTag', '2020-05-28 08:06:47.808', 0, 'testing logs');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags`
(
  `tag` varchar
(50) NOT NULL,
  `category_fk` varchar
(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`
tag`,
`category_fk
`) VALUES
('breakfast', 'official'),
('dinner', 'official'),
('first-log', 'official'),
('lunch', 'official'),
('scrum', 'official'),
('tutorials', 'official'),
('work', 'official'),
('testTag', 'test'),
('testTag2', 'test'),
('testTag3', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users`
(
  `username` varchar
(50) NOT NULL,
  `fullname` varchar
(50) NOT NULL,
  `email` varchar
(50) NOT NULL,
  `password` varchar
(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`
username`,
`fullname
`, `email`, `password`) VALUES
('ajayff4', 'Ajay Agrawal', 'ajayff4@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
('john', 'John Doe1', 'john@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
('suru', 'Sarika Dewangan', 'Sarika@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
('test', 'test data', 'test@gma', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
ADD PRIMARY KEY
(`category`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
ADD PRIMARY KEY
(`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
ADD PRIMARY KEY
(`tag`),
ADD KEY `category_fk`
(`category_fk`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY
(`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tags`
--
ALTER TABLE `tags`
ADD CONSTRAINT `category_fk_constraint` FOREIGN KEY
(`category_fk`) REFERENCES `categories`
(`category`) ON
DELETE CASCADE ON
UPDATE CASCADE;
COMMIT;