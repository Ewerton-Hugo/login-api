// user/services/update-user.service.ts
import { PrismaService } from '../../../database/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { NotFoundException } from '@nestjs/common';
const prisma = new PrismaService();
export async function updateUserService(
  id: string,
  data: CreateUsuarioDto,
): Promise<any> {
  const userExists = await prisma.usuario.findFirst({
    where: {
      id,
    },
  });

  if (!userExists) {
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
