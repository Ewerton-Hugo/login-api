import { NotFoundException } from '@nestjs/common';
import { CreateChaveDto } from './dto/create-ChavesRecuperaSenha.dto';
import { PrismaService } from '../../database/prisma.service';
const prisma = new PrismaService();
export async function updateChave(data: CreateChaveDto) {
  const chave = await prisma.chavesRecuperaSenha.findMany({
    where: { usuarioId: data.id },
  });
  if (!chave) {
    throw new NotFoundException('Usuário não cadastrado');
  }
  data.status = 'iativo';
  return prisma.chavesRecuperaSenha.update({
    data,
    where: {
      id: data.id,
    },
  });
}
