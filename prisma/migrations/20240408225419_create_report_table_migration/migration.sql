-- CreateTable
CREATE TABLE `report` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `start_date` DATETIME(3) NOT NULL,
    `due_date` DATETIME(3) NOT NULL,
    `comment` TEXT NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
