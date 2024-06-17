/*
  Warnings:

  - You are about to drop the column `agendamentoId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `contasReceberId` on the `Cliente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Agendamento" ALTER COLUMN "usuarioId" DROP NOT NULL,
ALTER COLUMN "usuarioId" SET DATA TYPE TEXT,
ALTER COLUMN "clienteId" DROP NOT NULL,
ALTER COLUMN "clienteId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "agendamentoId",
DROP COLUMN "contasReceberId";

-- AlterTable
ALTER TABLE "ContasReceber" ALTER COLUMN "clienteId" DROP NOT NULL,
ALTER COLUMN "clienteId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
