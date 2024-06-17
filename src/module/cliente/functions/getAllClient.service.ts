// user/services/get-all-users.service.ts
import { PrismaService } from '../../../database/prisma.service';

export async function getAllClientsService(
  prisma: PrismaService,
): Promise<any[]> {
  return await prisma.cliente.findMany({
    include: {
      chavesRecuperaSenha: true,
      agendamento: true,
    },
  });
}
