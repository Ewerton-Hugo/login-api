import { PrismaService } from '../../../../database/prisma.service';
import { generateCodeWithHash } from '../../../../providers/hashRecuperacaoSenha';
import { clienteIddeleteClienteService } from '../../../ChavesRecuperaSenha/deleteChavesRecuperaSenha';
const prisma = new PrismaService();

export async function createChavesRecuperaSenha(
  clienteId: string,
): Promise<any> {
  console.log(
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
    clienteId,
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n',
  );
  clienteIddeleteClienteService(prisma, clienteId);
  for (let i = 0; i < 10; i++) {
    const code = generateCodeWithHash();
    const chaves = await prisma.chavesRecuperaSenha.create({
      data: {
        chave: code,
        status: 'ativo',
        clienteId: clienteId, // Substitua pelo ID do usuário real
      },
    });
  }
  return {
    mensage: 'Chavbes geradas',
  };
}
