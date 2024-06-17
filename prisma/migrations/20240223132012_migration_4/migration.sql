/*
  Warnings:

  - A unique constraint covering the columns `[usuarioEmail]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioCpf]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `agendamentoId` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contasReceberId` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "agendamentoId" INTEGER NOT NULL,
ADD COLUMN     "contasReceberId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuarioEmail_key" ON "Usuario"("usuarioEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuarioCpf_key" ON "Usuario"("usuarioCpf");
