import { PrismaService } from '../../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';

export async function getUserByIdService(
  prisma: PrismaService,
  userId: string,
): Promise<any | null> {
  const user = await prisma.usuario.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new NotFoundException('Usuário não cadastrado');
  }
  return user;
}
