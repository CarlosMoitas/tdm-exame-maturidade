CREATE TABLE `diagnoses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`type` enum('express','complete') NOT NULL DEFAULT 'express',
	`status` enum('in_progress','completed','failed') NOT NULL DEFAULT 'in_progress',
	`token` varchar(255) NOT NULL,
	`answers` json,
	`analysis` json,
	`maturityLevel` int,
	`scores` json,
	`gaps` json,
	`recommendations` json,
	`benchmarking` json,
	`reportUrl` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`completedAt` timestamp,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `diagnoses_id` PRIMARY KEY(`id`),
	CONSTRAINT `diagnoses_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(255),
	`company` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`),
	CONSTRAINT `leads_email_unique` UNIQUE(`email`)
);
