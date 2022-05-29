/*
  Warnings:

  - You are about to drop the column `subType` on the `property_category` table. All the data in the column will be lost.
  - You are about to drop the `_propertytoproperty_amanity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_amanity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `air_conditioner` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathroom_essentials` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bbq_grill` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroom_essentials` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_equipment` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_alarm` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_extinguisher` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_place` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_aid_kit` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kitchen` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parking_area` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pets_allowed` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pool` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pool_table` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `security_cameras` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smart_TV` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smoke_alarm` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `washing_machine` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wifi` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspace` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_propertytoproperty_amanity` DROP FOREIGN KEY `_propertytoproperty_amanity_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_propertytoproperty_amanity` DROP FOREIGN KEY `_propertytoproperty_amanity_ibfk_2`;

-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `property_citiesId_fkey`;

-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `property_property_categoryId_fkey`;

-- DropIndex
DROP INDEX `property_category_subType_key` ON `property_category`;

-- AlterTable
ALTER TABLE `property` ADD COLUMN `air_conditioner` BOOLEAN NOT NULL,
    ADD COLUMN `bathroom_essentials` BOOLEAN NOT NULL,
    ADD COLUMN `bbq_grill` BOOLEAN NOT NULL,
    ADD COLUMN `bedroom_essentials` BOOLEAN NOT NULL,
    ADD COLUMN `exercise_equipment` BOOLEAN NOT NULL,
    ADD COLUMN `fire_alarm` BOOLEAN NOT NULL,
    ADD COLUMN `fire_extinguisher` BOOLEAN NOT NULL,
    ADD COLUMN `fire_place` BOOLEAN NOT NULL,
    ADD COLUMN `first_aid_kit` BOOLEAN NOT NULL,
    ADD COLUMN `kitchen` BOOLEAN NOT NULL,
    ADD COLUMN `parking_area` BOOLEAN NOT NULL,
    ADD COLUMN `pets_allowed` BOOLEAN NOT NULL,
    ADD COLUMN `pool` BOOLEAN NOT NULL,
    ADD COLUMN `pool_table` BOOLEAN NOT NULL,
    ADD COLUMN `security_cameras` BOOLEAN NOT NULL,
    ADD COLUMN `smart_TV` BOOLEAN NOT NULL,
    ADD COLUMN `smoke_alarm` BOOLEAN NOT NULL,
    ADD COLUMN `sub_typeId` INTEGER NULL,
    ADD COLUMN `washing_machine` BOOLEAN NOT NULL,
    ADD COLUMN `wifi` BOOLEAN NOT NULL,
    ADD COLUMN `workspace` BOOLEAN NOT NULL,
    MODIFY `citiesId` INTEGER NULL,
    MODIFY `property_categoryId` INTEGER NULL;

-- AlterTable
ALTER TABLE `property_category` DROP COLUMN `subType`;

-- DropTable
DROP TABLE `_propertytoproperty_amanity`;

-- DropTable
DROP TABLE `property_amanity`;

-- CreateTable
CREATE TABLE `sub_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sub_type_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_citiesId_fkey` FOREIGN KEY (`citiesId`) REFERENCES `name:cities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_property_categoryId_fkey` FOREIGN KEY (`property_categoryId`) REFERENCES `property_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_sub_typeId_fkey` FOREIGN KEY (`sub_typeId`) REFERENCES `sub_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
