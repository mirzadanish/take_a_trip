/*
  Warnings:

  - You are about to alter the column `property_image` on the `property` table. The data in that column could be lost. The data in that column will be cast from `Blob` to `VarChar(191)`.
  - You are about to alter the column `document` on the `property` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `property` MODIFY `property_image` VARCHAR(191) NOT NULL,
    MODIFY `document` VARCHAR(191) NOT NULL;
