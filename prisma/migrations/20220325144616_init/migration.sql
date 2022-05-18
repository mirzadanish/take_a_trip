/*
  Warnings:

  - The primary key for the `login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `login` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `login` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signup_id` to the `login` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `login_username_key` ON `login`;

-- AlterTable
ALTER TABLE `login` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `username`,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `signup_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `login_email_key` ON `login`(`email`);

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `login_signup_id_fkey` FOREIGN KEY (`signup_id`) REFERENCES `signup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
