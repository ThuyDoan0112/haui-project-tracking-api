-- CreateTable
CREATE TABLE `task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `is_completed` BOOLEAN NOT NULL DEFAULT false,
    `note` TEXT NULL,
    `report_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `task_report_id_fkey` FOREIGN KEY (`report_id`) REFERENCES `report`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
