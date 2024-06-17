/*
  Warnings:

  - You are about to drop the `Chaves` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `permicaoAppExterno2FA` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permicaoEmail2FA` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `secret2FA` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Chaves" DROP CONSTRAINT "Chaves_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "permicaoAppExterno2FA" BOOLEAN NOT NULL,
ADD COLUMN     "permicaoEmail2FA" BOOLEAN NOT NULL,
ALTER COLUMN "secret2FA" SET NOT NULL;

-- DropTable
DROP TABLE "Chaves";

-- CreateTable
CREATE TABLE "ChavesRecuperaSenha" (
    "id" TEXT NOT NULL,
    "chave" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "ChavesRecuperaSenha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autenticacao2FAEmail" (
    "id" TEXT NOT NULL,
    "chave" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "Autenticacao2FAEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChavesRecuperaSenha_chave_key" ON "ChavesRecuperaSenha"("chave");

-- CreateIndex
CREATE UNIQUE INDEX "Autenticacao2FAEmail_chave_key" ON "Autenticacao2FAEmail"("chave");

-- AddForeignKey
ALTER TABLE "ChavesRecuperaSenha" ADD CONSTRAINT "ChavesRecuperaSenha_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Autenticacao2FAEmail" ADD CONSTRAINT "Autenticacao2FAEmail_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
