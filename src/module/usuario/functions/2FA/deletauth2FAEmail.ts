import { PrismaService } from '../../../../database/prisma.service';
export async function deletauth2FAEmail(
  prisma: PrismaService,
  usuarioId: string,
): Promise<string> {
  //   const token = usuarioLogin.secret2FA;
  const emailfFA = await prisma.autenticacao2FAEmail.deleteMany({
    where: { usuarioId },
  });
  if (emailfFA) {
    return 'Validação 2FGA feita comsucesso por email';
  } else {
    return 'token invalido';
  }
}
