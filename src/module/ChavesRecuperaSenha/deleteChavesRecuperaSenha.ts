// user/services/delete-user.service.ts
import { PrismaService } from '../../database/prisma.service';

export async function clienteIddeleteClienteService(
  prisma: PrismaService,
  clienteId: string,
): Promise<any> {
  const chaves = await prisma.chavesRecuperaSenha.findMany({
    where: { clienteId: clienteId },
  });

  for (var i = 0; i < chaves.length; i++) {
    console.log(
      '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
      chaves[i].id,
    );
    await prisma.chavesRecuperaSenha.delete({
      where: {
        id: chaves[i].id, // Supondo que chaves[i].id é o ID da chave
        // usuarioId: chaves[i].usuarioId,
      },
    });
  }
  return chaves;
}
