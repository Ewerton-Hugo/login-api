// user/services/update-user.service.ts
import { PrismaService } from '../../../database/prisma.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { NotFoundException } from '@nestjs/common';
const prisma = new PrismaService();
export async function updateClientService(
  id: string,
  data: CreateClienteDto,
): Promise<any> {
  const clientExists = await prisma.cliente.findFirst({
    where: {
      id,
    },
  });

  if (!clientExists) {
    throw new NotFoundException('Usuário não cadastrado');
  }
  //REFAZER
  // return prisma.usuario.update({
  //   data,
  //   where: {
  //     id,
  //   },
  // });
}
