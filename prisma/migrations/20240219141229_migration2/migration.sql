/*
  Warnings:

  - The primary key for the `Agendamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAgendamento` on the `Agendamento` table. All the data in the column will be lost.
  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idCliente` on the `Cliente` table. All the data in the column will be lost.
  - The primary key for the `ContasPagar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPagar` on the `ContasPagar` table. All the data in the column will be lost.
  - The primary key for the `ContasReceber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idReceber` on the `ContasReceber` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idUsuario` on the `Usuario` table. All the data in the column will be lost.

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
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_pkey",
DROP COLUMN "idAgendamento",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
DROP COLUMN "idCliente",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_pkey",
DROP COLUMN "idPagar",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ContasPagar_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_pkey",
DROP COLUMN "idReceber",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ContasReceber_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "idUsuario",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
