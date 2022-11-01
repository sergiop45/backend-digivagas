/*
  Warnings:

  - Added the required column `user_id` to the `Vaga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vaga` ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vaga` ADD CONSTRAINT `Vaga_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
