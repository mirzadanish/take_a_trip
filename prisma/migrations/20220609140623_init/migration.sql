-- CreateTable
CREATE TABLE `booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_date` DATETIME(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `cancel_date` DATETIME(3) NOT NULL,
    `propertyId` INTEGER NOT NULL,
    `travelerId` INTEGER NOT NULL,

    UNIQUE INDEX `booking_propertyId_key`(`propertyId`),
    INDEX `booking_travelerId_fkey`(`travelerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `host` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_no` INTEGER NOT NULL,
    `cnic` VARCHAR(255) NOT NULL,
    `property_documents` VARCHAR(255) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL,
    `deleted` DATETIME(3) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `confirm_password` VARCHAR(255) NOT NULL,
    `verified` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hostId` INTEGER NOT NULL,
    `travelerId` INTEGER NOT NULL,

    UNIQUE INDEX `login_hostId_key`(`hostId`),
    UNIQUE INDEX `login_travelerId_key`(`travelerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `bookingId` INTEGER NOT NULL,
    `hostId` INTEGER NOT NULL,
    `travelerId` INTEGER NOT NULL,

    UNIQUE INDEX `payment_bookingId_key`(`bookingId`),
    INDEX `payment_hostId_fkey`(`hostId`),
    INDEX `payment_travelerId_fkey`(`travelerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `credit_card` VARCHAR(255) NOT NULL,
    `jazzcash` DOUBLE NOT NULL,
    `debit_card` VARCHAR(255) NOT NULL,
    `cash` DOUBLE NOT NULL,
    `easypaisa` DOUBLE NOT NULL,
    `paymentId` INTEGER NOT NULL,

    INDEX `payment_type_paymentId_fkey`(`paymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL,
    `deleted` DATETIME(3) NOT NULL,
    `property_image` BLOB NOT NULL,
    `price` INTEGER NOT NULL,
    `property_description` VARCHAR(191) NOT NULL,
    `property_name` VARCHAR(255) NOT NULL,
    `hostId` INTEGER NOT NULL,
    `travelerId` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `property_categoryId` INTEGER NULL,
    `bathrooms` INTEGER NOT NULL,
    `beds` INTEGER NOT NULL,
    `guests` INTEGER NOT NULL,
    `document` LONGBLOB NOT NULL,
    `verified` BOOLEAN NOT NULL,
    `air_conditioner` BOOLEAN NOT NULL,
    `bathroom_essentials` BOOLEAN NOT NULL,
    `bbq_grill` BOOLEAN NOT NULL,
    `bedroom_essentials` BOOLEAN NOT NULL,
    `exercise_equipment` BOOLEAN NOT NULL,
    `fire_alarm` BOOLEAN NOT NULL,
    `fire_extinguisher` BOOLEAN NOT NULL,
    `fire_place` BOOLEAN NOT NULL,
    `first_aid_kit` BOOLEAN NOT NULL,
    `kitchen` BOOLEAN NOT NULL,
    `parking_area` BOOLEAN NOT NULL,
    `pets_allowed` BOOLEAN NOT NULL,
    `pool` BOOLEAN NOT NULL,
    `pool_table` BOOLEAN NOT NULL,
    `security_cameras` BOOLEAN NOT NULL,
    `smart_TV` BOOLEAN NOT NULL,
    `smoke_alarm` BOOLEAN NOT NULL,
    `sub_typeId` INTEGER NULL,
    `washing_machine` BOOLEAN NOT NULL,
    `wifi` BOOLEAN NOT NULL,
    `workspace` BOOLEAN NOT NULL,

    INDEX `property_hostId_fkey`(`hostId`),
    INDEX `property_property_categoryId_fkey`(`property_categoryId`),
    INDEX `property_sub_typeId_fkey`(`sub_typeId`),
    INDEX `property_travelerId_fkey`(`travelerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `property_category_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sub_type_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property_review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `travelerId` INTEGER NOT NULL,
    `propertyId` INTEGER NOT NULL,

    INDEX `property_review_propertyId_fkey`(`propertyId`),
    INDEX `property_review_travelerId_fkey`(`travelerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traveler` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `cnic` VARCHAR(255) NOT NULL,
    `phone_no` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `passport` VARCHAR(255) NOT NULL,
    `verified` BOOLEAN NOT NULL,
    `confirm_password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `property` ADD CONSTRAINT `property_property_categoryId_fkey` FOREIGN KEY (`property_categoryId`) REFERENCES `property_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_sub_typeId_fkey` FOREIGN KEY (`sub_typeId`) REFERENCES `sub_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property` ADD CONSTRAINT `property_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property_review` ADD CONSTRAINT `property_review_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `property_review` ADD CONSTRAINT `property_review_travelerId_fkey` FOREIGN KEY (`travelerId`) REFERENCES `traveler`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
