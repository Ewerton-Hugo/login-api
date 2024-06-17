/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[clienteEmail]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clienteCpf]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Made the column `clienteCpf` on table `Cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "clienteCpf" SET NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Usuario_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_clienteEmail_key" ON "Cliente"("clienteEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_clienteCpf_key" ON "Cliente"("clienteCpf");
