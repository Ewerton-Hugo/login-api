/*
  Warnings:

  - Added the required column `usuarioNome` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "usuarioNome" TEXT NOT NULL;
