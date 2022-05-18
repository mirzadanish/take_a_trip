/*
  Warnings:

  - You are about to drop the column `signup_id` on the `login` table. All the data in the column will be lost.
  - You are about to drop the `signup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `login` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `login` DROP FOREIGN KEY `login_signup_id_fkey`;

-- DropIndex
DROP INDEX `login_email_key` ON `login`;

-- AlterTable
ALTER TABLE `login` DROP COLUMN `signup_id`,
    ADD COLUMN `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `signup`;

-- CreateTable
CREATE TABLE `booking` (
    `id` INTEGER NOT NULL,
    `booking_date` DATETIME(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `cancel_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `host` (
    `id` INTEGER NOT NULL,
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
CREATE TABLE `name:cities` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_type` (
    `id` INTEGER NOT NULL,
    `credit_card` VARCHAR(255) NOT NULL,
    `jazzcash` DOUBLE NOT NULL,
    `debit_card` VARCHAR(255) NOT NULL,
    `cash` DOUBLE NOT NULL,
    `easypaisa` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property` (
    `id` INTEGER NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL,
    `deleted` DATETIME(3) NOT NULL,
    `property_image` BLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property_amanity` (
    `id` INTEGER NOT NULL,
    `images` BLOB NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property_reviews` (
    `id` INTEGER NOT NULL,
    `rating` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `property_type` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `room_type` VARCHAR(255) NOT NULL,
    `bedroom_count` VARCHAR(255) NOT NULL,
    `bathroom_count` VARCHAR(255) NOT NULL,
    `bed_count` INTEGER NOT NULL,
    `kitchen` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `traveler` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `cnic` INTEGER NOT NULL,
    `phone_no` INTEGER NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `condirm_password` VARCHAR(255) NOT NULL,
    `passport` VARCHAR(255) NOT NULL,
    `verified` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
