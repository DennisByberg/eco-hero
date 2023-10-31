-- DropIndex
DROP INDEX `RegUser_email_key` ON `reguser`;

-- AlterTable
ALTER TABLE `reguser` MODIFY `email` VARCHAR(255) NOT NULL;
