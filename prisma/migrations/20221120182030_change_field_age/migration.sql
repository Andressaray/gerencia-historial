/*
  Warnings:

  - A unique constraint covering the columns `[card_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `age` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "photo" SET DEFAULT '',
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_card_id_key" ON "User"("card_id");
