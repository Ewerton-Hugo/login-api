// user/services/delete-user.service.ts
import { PrismaService } from '../../../database/prisma.service';
import { deletauth2FAEmail } from './2FA/deletauth2FAEmail';
import { clienteIddeleteClienteService } from '../../ChavesRecuperaSenha/deleteChavesRecuperaSenha';

export async function deleteUserService(
  prisma: PrismaService,
  id: string,
): Promise<any> {
  console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');
  const userExists = await prisma.usuario.findFirst({
    where: {
      id,
    },
  });
  deletauth2FAEmail(prisma, id);
  clienteIddeleteClienteService(prisma, id);
  return prisma.usuario.delete({
    where: {
      id,
    },
  });
}
