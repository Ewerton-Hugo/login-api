// user/services/get-all-users.service.ts
import { PrismaService } from '../../../database/prisma.service';

export async function getAllUsersService(
  prisma: PrismaService,
): Promise<any[]> {
  return await prisma.usuario.findMany({
    include: {
      chavesRecuperaSenha: true,
    },
  });
}
