/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `price` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "imageUrl",
DROP COLUMN "name",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL;
