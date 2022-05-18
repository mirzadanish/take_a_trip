/*
  Warnings:

  - You are about to drop the `_propertytotraveler` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[propertyId]` on the table `booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hostId]` on the table `login` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[travelerId]` on the table `login` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookingId]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[propertyId]` on the table `property_type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertyId` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerId` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `login` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerId` to the `login` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentId` to the `payment_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `citiesId` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelerId` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `property_amanity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_propertytotraveler` DROP FOREIGN KEY `_propertytotraveler_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_propertytotraveler` DROP FOREIGN KEY `_propertytotraveler_ibfk_2`;

-- AlterTable
ALTER TABLE `booking` ADD COLUMN `propertyId` INTEGER NOT NULL,
    ADD COLUMN `travelerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `login` ADD COLUMN `hostId` INTEGER NOT NULL,
    ADD COLUMN `travelerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payment` ADD COLUMN `bookingId` INTEGER NOT NULL,
    ADD COLUMN `hostId` INTEGER NOT NULL,
    ADD COLUMN `travelerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payment_type` ADD COLUMN `paymentId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `property` ADD COLUMN `citiesId` INTEGER NOT NULL,
    ADD COLUMN `hostId` INTEGER NOT NULL,
    ADD COLUMN `travelerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `property_amanity` ADD COLUMN `propertyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `property_type` ADD COLUMN `propertyId` INTEGER NULL;

-- DropTable
DROP TABLE `_propertytotraveler`;

-- CreateIndex
CREATE UNIQUE INDEX `booking_propertyId_key` ON `booking`(`propertyId`);

-- CreateIndex
CREATE UNIQUE INDEX `login_hostId_key` ON `login`(`hostId`);

-- CreateIndex
CREATE UNIQUE INDEX `login_travelerId_key` ON `login`(`travelerId`);

-- CreateIndex
CREATE UNIQUE INDEX `payment_bookingId_key` ON `payment`(`bookingId`);

-- CreateIndex
CREATE UNIQUE INDEX `property_type_propertyId_key` ON `property_type`(`propertyId`);

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `login_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `host`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `login_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `host`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_type` ADD CONSTRAINT `payment_type_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `host`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_citiesId_fkey` FOREIGN KEY (`citiesId`) REFERENCES `name:cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property_amanity` ADD CONSTRAINT `property_amanity_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property_type` ADD CONSTRAINT `property_type_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
