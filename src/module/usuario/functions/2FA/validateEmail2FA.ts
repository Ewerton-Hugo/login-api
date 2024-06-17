import { PrismaService } from '../../../../database/prisma.service';
export async function validateEmail2FA(
  prisma: PrismaService,
  chave: string,
): Promise<string> {
  //   const token = usuarioLogin.secret2FA;
  const emailfFA = await prisma.autenticacao2FAEmail.findUnique({
    where: {
      chave: chave,
    },
  });
  if (emailfFA) {
    return 'Validação 2FGA feita comsucesso por email';
  } else {
    return 'token invalido';
  }
}
