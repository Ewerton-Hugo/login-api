import { PrismaService } from '../../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';

export async function getClientByIdService(
  prisma: PrismaService,
  email: string,
): Promise<any | null> {
  const client = await prisma.cliente.findUnique({
    where: {
      clienteEmail: email,
    },
    include: {
      chavesRecuperaSenha: true,
      agendamento: true,
    },
  });
  if (!client) {
    throw new NotFoundException('Usuário não cadastrado');
  }
  return client;
}
