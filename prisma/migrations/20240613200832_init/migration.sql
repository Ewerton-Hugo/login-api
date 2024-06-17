/*
  Warnings:

  - Added the required column `secret2FA` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Autenticacao2FAEmail" ADD COLUMN     "clienteId" TEXT;

-- AlterTable
ALTER TABLE "ChavesRecuperaSenha" ADD COLUMN     "clienteId" TEXT;

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "permicaoAppExterno2FA" BOOLEAN,
ADD COLUMN     "permicaoEmail2FA" BOOLEAN,
ADD COLUMN     "secret2FA" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ChavesRecuperaSenha" ADD CONSTRAINT "ChavesRecuperaSenha_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Autenticacao2FAEmail" ADD CONSTRAINT "Autenticacao2FAEmail_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
