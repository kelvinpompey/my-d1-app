-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `_cf_KV` (
	`key` text PRIMARY KEY NOT NULL,
	`value` blob
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY,
	`title` text NOT NULL,
	`description` text,
	`due_date` numeric,
	`priority` text DEFAULT 'Medium',
	`category_id` integer,
	`completed` numeric DEFAULT 0,
	`created_at` numeric DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY,
	`name` text NOT NULL
);

*/