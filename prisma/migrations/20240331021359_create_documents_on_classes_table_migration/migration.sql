-- CreateTable
CREATE TABLE `documents_on_classes` (
    `document_id` INTEGER NOT NULL,
    `class_id` INTEGER NOT NULL,

    PRIMARY KEY (`document_id`, `class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `documents_on_classes` ADD CONSTRAINT `documents_on_classes_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `document`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents_on_classes` ADD CONSTRAINT `documents_on_classes_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
