/*
  Warnings:

  - You are about to alter the column `email` on the `reguser` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - A unique constraint covering the columns `[email]` on the table `RegUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `reguser` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `RegUser_email_key` ON `RegUser`(`email`);
