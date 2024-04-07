/*
  Warnings:

  - You are about to drop the column `createdAt` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `permissions` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_authApps` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `port` to the `App` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `App` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "_authApps" DROP CONSTRAINT "_authApps_A_fkey";

-- DropForeignKey
ALTER TABLE "_authApps" DROP CONSTRAINT "_authApps_B_fkey";

-- AlterTable
ALTER TABLE "App" DROP COLUMN "createdAt",
DROP COLUMN "ownerId",
DROP COLUMN "updatedAt",
ADD COLUMN     "certPath" TEXT,
ADD COLUMN     "forceHttps" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "keyPath" TEXT,
ADD COLUMN     "port" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "permissions",
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "_authApps";

-- CreateTable
CREATE TABLE "invite" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "invite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "appId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToinvite" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserTogroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserTopermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserTorule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppTopermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_inviteTopermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_groupToinvite" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_groupTopermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_groupTorule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "invite_code_key" ON "invite"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToinvite_AB_unique" ON "_UserToinvite"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToinvite_B_index" ON "_UserToinvite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserTogroup_AB_unique" ON "_UserTogroup"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTogroup_B_index" ON "_UserTogroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserTopermission_AB_unique" ON "_UserTopermission"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTopermission_B_index" ON "_UserTopermission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserTorule_AB_unique" ON "_UserTorule"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTorule_B_index" ON "_UserTorule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppToUser_AB_unique" ON "_AppToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AppToUser_B_index" ON "_AppToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppTopermission_AB_unique" ON "_AppTopermission"("A", "B");

-- CreateIndex
CREATE INDEX "_AppTopermission_B_index" ON "_AppTopermission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_inviteTopermission_AB_unique" ON "_inviteTopermission"("A", "B");

-- CreateIndex
CREATE INDEX "_inviteTopermission_B_index" ON "_inviteTopermission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_groupToinvite_AB_unique" ON "_groupToinvite"("A", "B");

-- CreateIndex
CREATE INDEX "_groupToinvite_B_index" ON "_groupToinvite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_groupTopermission_AB_unique" ON "_groupTopermission"("A", "B");

-- CreateIndex
CREATE INDEX "_groupTopermission_B_index" ON "_groupTopermission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_groupTorule_AB_unique" ON "_groupTorule"("A", "B");

-- CreateIndex
CREATE INDEX "_groupTorule_B_index" ON "_groupTorule"("B");

-- AddForeignKey
ALTER TABLE "rule" ADD CONSTRAINT "rule_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToinvite" ADD CONSTRAINT "_UserToinvite_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToinvite" ADD CONSTRAINT "_UserToinvite_B_fkey" FOREIGN KEY ("B") REFERENCES "invite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTogroup" ADD CONSTRAINT "_UserTogroup_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTogroup" ADD CONSTRAINT "_UserTogroup_B_fkey" FOREIGN KEY ("B") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTopermission" ADD CONSTRAINT "_UserTopermission_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTopermission" ADD CONSTRAINT "_UserTopermission_B_fkey" FOREIGN KEY ("B") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTorule" ADD CONSTRAINT "_UserTorule_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTorule" ADD CONSTRAINT "_UserTorule_B_fkey" FOREIGN KEY ("B") REFERENCES "rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppToUser" ADD CONSTRAINT "_AppToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "App"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppToUser" ADD CONSTRAINT "_AppToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppTopermission" ADD CONSTRAINT "_AppTopermission_A_fkey" FOREIGN KEY ("A") REFERENCES "App"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppTopermission" ADD CONSTRAINT "_AppTopermission_B_fkey" FOREIGN KEY ("B") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_inviteTopermission" ADD CONSTRAINT "_inviteTopermission_A_fkey" FOREIGN KEY ("A") REFERENCES "invite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_inviteTopermission" ADD CONSTRAINT "_inviteTopermission_B_fkey" FOREIGN KEY ("B") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupToinvite" ADD CONSTRAINT "_groupToinvite_A_fkey" FOREIGN KEY ("A") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupToinvite" ADD CONSTRAINT "_groupToinvite_B_fkey" FOREIGN KEY ("B") REFERENCES "invite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupTopermission" ADD CONSTRAINT "_groupTopermission_A_fkey" FOREIGN KEY ("A") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupTopermission" ADD CONSTRAINT "_groupTopermission_B_fkey" FOREIGN KEY ("B") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupTorule" ADD CONSTRAINT "_groupTorule_A_fkey" FOREIGN KEY ("A") REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groupTorule" ADD CONSTRAINT "_groupTorule_B_fkey" FOREIGN KEY ("B") REFERENCES "rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
