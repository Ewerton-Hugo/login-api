import { PrismaService } from '../../../../database/prisma.service';
import { Autenticacao2FAEmailDTO } from './dto/create-Autenticacao2FAEmailDTO.dto';
import { generateCodeWithHash } from '../../../../providers/hashRecuperacaoSenha';

export async function createauth2FAEmail(
  prisma: PrismaService,
  userId: string,
): Promise<Autenticacao2FAEmailDTO> {
  const chave = generateCodeWithHash();
  const data = {
    chave: chave,
    status: 'valido',
    usuarioId: userId,
  };

  const email2FA = await prisma.autenticacao2FAEmail.create({ data });
  return email2FA;
}
