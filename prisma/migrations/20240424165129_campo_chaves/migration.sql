-- CreateTable
CREATE TABLE "Chaves" (
    "id" TEXT NOT NULL,
    "chave" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "Chaves_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chaves_chave_key" ON "Chaves"("chave");

-- AddForeignKey
ALTER TABLE "Chaves" ADD CONSTRAINT "Chaves_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
