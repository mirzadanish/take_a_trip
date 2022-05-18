/*
  Warnings:

  - You are about to drop the column `condirm_password` on the `traveler` table. All the data in the column will be lost.
  - You are about to drop the `property_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `property_categoryId` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirm_password` to the `traveler` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property_type` DROP FOREIGN KEY `property_type_propertyId_fkey`;

-- AlterTable
ALTER TABLE `property` ADD COLUMN `property_categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `traveler` DROP COLUMN `condirm_password`,
    ADD COLUMN `confirm_password` VARCHAR(255) NOT NULL,
    MODIFY `cnic` VARCHAR(255) NOT NULL,
    MODIFY `phone_no` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `property_type`;

-- CreateTable
CREATE TABLE `Property_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Property_category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_property_categoryId_fkey` FOREIGN KEY (`property_categoryId`) REFERENCES `Property_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
