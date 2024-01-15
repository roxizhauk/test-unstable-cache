CREATE TABLE `words` (
	`id` int AUTO_INCREMENT NOT NULL,
	`word` varchar(255) NOT NULL,
	`num` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `words_id` PRIMARY KEY(`id`),
	CONSTRAINT `words_word_unique` UNIQUE(`word`),
	CONSTRAINT `words_num_unique` UNIQUE(`num`)
);
