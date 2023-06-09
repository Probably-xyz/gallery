/*
  Warnings:

  - Added the required column `industry` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `investStage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagline` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "industry" TEXT NOT NULL,
ADD COLUMN     "investStage" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "stage" TEXT NOT NULL,
ADD COLUMN     "tagline" TEXT NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL;
