/*
  Warnings:

  - You are about to drop the `property_reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `property_reviews`;

-- CreateTable
CREATE TABLE `property_review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `travelerId` INTEGER NOT NULL,
    `propertyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PropertyToTraveler` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PropertyToTraveler_AB_unique`(`A`, `B`),
    INDEX `_PropertyToTraveler_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `property_review` ADD CONSTRAINT `property_review_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property_review` ADD CONSTRAINT `property_review_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyToTraveler` ADD FOREIGN KEY (`A`) REFERENCES `property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PropertyToTraveler` ADD FOREIGN KEY (`B`) REFERENCES `traveler`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
