/*
  Warnings:

  - You are about to drop the column `propertyId` on the `property_amanity` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `property_category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `property_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subType]` on the table `property_category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bathrooms` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beds` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `air_conditioner` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathroom_essentials` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bbq_grill` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroom_essentials` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_equipment` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_alarm` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_extinguisher` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fire_place` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_aid_kit` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kitchen` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parking_area` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pets_allowed` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pool` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pool_table` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `security_cameras` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smart_TV` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smoke_alarm` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `washing_machine` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wifi` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspace` to the `property_amanity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subType` to the `property_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `property_category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property_amanity` DROP FOREIGN KEY `property_amanity_propertyId_fkey`;

-- DropIndex
DROP INDEX `Property_category_name_key` ON `property_category`;

-- AlterTable
ALTER TABLE `property` ADD COLUMN `bathrooms` INTEGER NOT NULL,
    ADD COLUMN `beds` INTEGER NOT NULL,
    ADD COLUMN `guests` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `property_amanity` DROP COLUMN `propertyId`,
    ADD COLUMN `air_conditioner` BOOLEAN NOT NULL,
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
    ADD COLUMN `washing_machine` BOOLEAN NOT NULL,
    ADD COLUMN `wifi` BOOLEAN NOT NULL,
    ADD COLUMN `workspace` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `property_category` DROP COLUMN `name`,
    ADD COLUMN `subType` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_PropertyToProperty_amanity` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PropertyToProperty_amanity_AB_unique`(`A`, `B`),
    INDEX `_PropertyToProperty_amanity_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `property_category_type_key` ON `property_category`(`type`);

-- CreateIndex
CREATE UNIQUE INDEX `property_category_subType_key` ON `property_category`(`subType`);

-- AddForeignKey
ALTER TABLE `_PropertyToProperty_amanity` ADD FOREIGN KEY (`A`) REFERENCES `property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyToProperty_amanity` ADD FOREIGN KEY (`B`) REFERENCES `property_amanity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
