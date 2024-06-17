import { PrismaService } from '../../../../database/prisma.service';
import { generateCodeWithHash } from '../../../../providers/hashRecuperacaoSenha';
import { clienteIddeleteClienteService } from '../../../ChavesRecuperaSenha/deleteChavesRecuperaSenha';
const prisma = new PrismaService();

export async function createChavesRecuperaSenha(
  usuarioId: string,
): Promise<any> {
  console.log(
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
    usuarioId,
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
  );
  clienteIddeleteClienteService(prisma, usuarioId);
  for (let i = 0; i < 10; i++) {
    const code = generateCodeWithHash();
    const chaves = await prisma.chavesRecuperaSenha.create({
      data: {
        chave: code,
        status: 'ativo',
        usuarioId: usuarioId, // Substitua pelo ID do usuário real
      },
    });
  }
  return {
    mensage: 'Chavbes geradas',
  };
}
