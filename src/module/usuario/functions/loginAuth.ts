import { PrismaService } from '../../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { encript } from '../../../providers/encripter/encript';
import { sendEmail } from './2FA/sendEmail2FA';
import { authAppExterior } from './index';

export async function auth(
  prisma: PrismaService,
  usuarioLogin,
): Promise<string> {
  const token = usuarioLogin.secret2FA;
  const user = await prisma.usuario.findUnique({
    where: {
      usuarioEmail: usuarioLogin.usuarioEmail,
    },
  });

  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  } else {
    // Verificar a senha
    const encriptedPassword = encript(usuarioLogin.usuarioSenha);
    if (user.usuarioSenha === encriptedPassword) {
      if (user.permicaoAppExterno2FA === true) {
        const auth2FA = authAppExterior(user.secret2FA, token);
      }

      if (user.permicaoEmail2FA === true) {
        sendEmail(user);
      }
      return 'Usuario autenticado';
    } else {
      return 'Usuário autenticado: Usuario ou Senha invalidos';
    }
  }
}
