use solidadb;

-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Abr-2020 às 05:30
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `add_family_info`
--

CREATE TABLE `add_family_info` (
  `add_family_info_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `has_knowledge_community_members` tinyint(1) DEFAULT NULL,
  `has_associate_community_meeting` tinyint(1) DEFAULT NULL,
  `work_community_priorities` text DEFAULT NULL,
  `has_social_government_programs` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `family_health_info`
--

CREATE TABLE `family_health_info` (
  `family_health_info_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `family_members_count` int(11) DEFAULT NULL,
  `sickness` text DEFAULT NULL,
  `has_death_in_last_two_years` tinyint(1) DEFAULT NULL,
  `deaths_two_years_cause` text DEFAULT NULL,
  `has_disabled_people_members` tinyint(1) DEFAULT NULL,
  `deficiencies` text DEFAULT NULL,
  `has_old_people` tinyint(1) DEFAULT NULL,
  `old_people_count` int(11) DEFAULT NULL,
  `health_add_info` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `family_info`
--

CREATE TABLE `family_info` (
  `family_info_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `origin_city` text DEFAULT NULL,
  `state` text DEFAULT NULL,
  `city_residence_time` text DEFAULT NULL,
  `home_residence_time` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `family_members`
--

CREATE TABLE `family_members` (
  `family_members_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `age` text DEFAULT NULL,
  `scholarity` text DEFAULT NULL,
  `occupacy` text DEFAULT NULL,
  `earning` text DEFAULT NULL,
  `relationship` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `owners`
--

CREATE TABLE `owners` (
  `owner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `father_name` text DEFAULT NULL,
  `rg` text DEFAULT NULL,
  `rg_expedition` text DEFAULT NULL,
  `cpf` text DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `nationality` text DEFAULT NULL,
  `marital_status` text DEFAULT NULL,
  `marital_property_systems` text DEFAULT NULL,
  `ocupacy_situation` text DEFAULT NULL,
  `job` text DEFAULT NULL,
  `literate` tinyint(1) DEFAULT NULL,
  `company_job` text DEFAULT NULL,
  `clt` tinyint(1) DEFAULT NULL,
  `earning` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `square` text DEFAULT NULL,
  `lot` text DEFAULT NULL,
  `landmark` text DEFAULT NULL,
  `district` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `cell_phone_number` text DEFAULT NULL,
  `phone_number` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `owners_partners`
--

CREATE TABLE `owners_partners` (
  `partner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `father_name` text DEFAULT NULL,
  `rg` text DEFAULT NULL,
  `cpf` text DEFAULT NULL,
  `age` text DEFAULT NULL,
  `nationality` text DEFAULT NULL,
  `ocupacy_situation` text DEFAULT NULL,
  `job` text DEFAULT NULL,
  `literate` tinyint(1) DEFAULT NULL,
  `company_job` text DEFAULT NULL,
  `clt` tinyint(1) DEFAULT NULL,
  `earning` text DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `property_info`
--

CREATE TABLE `property_info` (
  `property_info_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `construction` text DEFAULT NULL,
  `finish` text DEFAULT NULL,
  `drinking_water` text DEFAULT NULL,
  `sewage` text DEFAULT NULL,
  `electric_power` text DEFAULT NULL,
  `trash_destiny` text DEFAULT NULL,
  `property_type` text DEFAULT NULL,
  `lot_condition` text DEFAULT NULL,
  `lot_occupacy_number` text DEFAULT NULL,
  `has_another_property` tinyint(1) DEFAULT NULL,
  `has_iptu` tinyint(1) DEFAULT NULL,
  `iptu_holder` text DEFAULT NULL,
  `property_documentation` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `social_government_programs`
--

CREATE TABLE `social_government_programs` (
  `social_government_programs_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `earn` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `add_family_info`
--
ALTER TABLE `add_family_info`
  ADD PRIMARY KEY (`add_family_info_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `family_health_info`
--
ALTER TABLE `family_health_info`
  ADD PRIMARY KEY (`family_health_info_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `family_info`
--
ALTER TABLE `family_info`
  ADD PRIMARY KEY (`family_info_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `family_members`
--
ALTER TABLE `family_members`
  ADD PRIMARY KEY (`family_members_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`owner_id`);

--
-- Índices para tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  ADD PRIMARY KEY (`partner_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `property_info`
--
ALTER TABLE `property_info`
  ADD PRIMARY KEY (`property_info_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `social_government_programs`
--
ALTER TABLE `social_government_programs`
  ADD PRIMARY KEY (`social_government_programs_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `add_family_info`
--
ALTER TABLE `add_family_info`
  MODIFY `add_family_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `family_health_info`
--
ALTER TABLE `family_health_info`
  MODIFY `family_health_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `family_info`
--
ALTER TABLE `family_info`
  MODIFY `family_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `family_members`
--
ALTER TABLE `family_members`
  MODIFY `family_members_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `owners`
--
ALTER TABLE `owners`
  MODIFY `owner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `property_info`
--
ALTER TABLE `property_info`
  MODIFY `property_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `social_government_programs`
--
ALTER TABLE `social_government_programs`
  MODIFY `social_government_programs_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `add_family_info`
--
ALTER TABLE `add_family_info`
  ADD CONSTRAINT `add_family_info_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `family_health_info`
--
ALTER TABLE `family_health_info`
  ADD CONSTRAINT `family_health_info_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `family_info`
--
ALTER TABLE `family_info`
  ADD CONSTRAINT `family_info_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `family_members`
--
ALTER TABLE `family_members`
  ADD CONSTRAINT `family_members_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  ADD CONSTRAINT `owners_partners_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`);

--
-- Limitadores para a tabela `property_info`
--
ALTER TABLE `property_info`
  ADD CONSTRAINT `property_info_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `social_government_programs`
--
ALTER TABLE `social_government_programs`
  ADD CONSTRAINT `social_government_programs_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
