/*
  Warnings:

  - The primary key for the `Agendamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ContasPagar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ContasReceber` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Agendamento_id_seq";

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cliente_id_seq";

-- AlterTable
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContasPagar_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContasPagar_id_seq";

-- AlterTable
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContasReceber_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContasReceber_id_seq";
