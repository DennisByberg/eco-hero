/*
  Warnings:

  - You are about to drop the `registreduser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `registreduser`;

-- CreateTable
CREATE TABLE `RegisteredUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `registeredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RegisteredUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
