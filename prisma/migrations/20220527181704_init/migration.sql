/*
  Warnings:

  - You are about to drop the column `images` on the `property_amanity` table. All the data in the column will be lost.
  - Added the required column `document` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `property` ADD COLUMN `document` LONGBLOB NOT NULL,
    ADD COLUMN `verified` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `property_amanity` DROP COLUMN `images`;
