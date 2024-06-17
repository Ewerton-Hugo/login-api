-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "usuarioNome" TEXT NOT NULL,
    "usuarioEmail" TEXT NOT NULL,
    "usuarioSenha" TEXT NOT NULL,
    "usuarioCpf" TEXT,
    "cargo" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "idCliente" SERIAL NOT NULL,
    "clienteNome" TEXT NOT NULL,
    "clienteEndereco" TEXT NOT NULL,
    "clienteEmail" TEXT NOT NULL,
    "clienteSenha" TEXT NOT NULL,
    "clienteCpf" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "ContasPagar" (
    "idPagar" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "ContasPagar_pkey" PRIMARY KEY ("idPagar")
);

-- CreateTable
CREATE TABLE "ContasReceber" (
    "idReceber" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataRecebimento" TIMESTAMP(3) NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "ContasReceber_pkey" PRIMARY KEY ("idReceber")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "idAgendamento" SERIAL NOT NULL,
    "dataAgendamento" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("idAgendamento")
);

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
