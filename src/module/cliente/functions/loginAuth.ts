import { PrismaService } from '../../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { encript } from '../../../providers/encripter/encript';
import { sendEmail } from './2FA/sendEmail2FA';
import { authAppExterior } from './index';
import { getClientByIdService } from './getClientById.service';

export async function auth(prisma: PrismaService, clienteLogin): Promise<any> {
  const token = clienteLogin.secret2FA;
  const client = await prisma.cliente.findUnique({
    where: {
      clienteEmail: clienteLogin.clienteEmail,
    },
    include: {
      chavesRecuperaSenha: true,
      agendamento: true,
    },
  });

  if (!client) {
    throw new NotFoundException('Usuário não encontrado');
  } else {
    // Verificar a senha
    const encriptedPassword = encript(clienteLogin.clienteSenha);
    if (client.clienteSenha === encriptedPassword) {
      if (client.permicaoAppExterno2FA === true) {
        const auth2FA = authAppExterior(client.secret2FA, token);
      }

      if (client.permicaoEmail2FA === true) {
        sendEmail(client);
      }

      return client;
    } else {
      return 'Usuário autenticado: Usuario ou Senha invalidos';
    }
  }
}
