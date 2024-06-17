// // user/services/create-user.service.ts
import { PrismaService } from '../../../database/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { encript } from '../../../providers/encripter/encript';
import * as speakeasy from 'speakeasy';
import { createChavesRecuperaSenha } from './recuperarSenha/renovarHashRecuperaçãoSenha';
import { createauth2FAEmail } from './2FA/createauth2FAEmail';

export async function createUserService(
  prisma: PrismaService,
  data: CreateUsuarioDto,
): Promise<any> {
  const usuarioExists = await prisma.usuario.findFirst({
    where: {
      usuarioCpf: data.usuarioCpf,
    },
  });

  if (usuarioExists) {
    throw new Error('Usuário já cadastrado');
  }

  // Gerar uma chave secreta 2FA para o novo usuário
  const secret = speakeasy.generateSecret();
  const usuarioSenha = await encript(data.usuarioSenha);

  // Armazenar a chave secreta 2FA e senha encriptada no banco de dados
  const user = await prisma.usuario.create({
    data: {
      ...data,
      usuarioSenha,
      secret2FA: secret.base32, // Armazenar a chave secreta 2FA no usuário
    },
  });

  createChavesRecuperaSenha(user.id);
  createauth2FAEmail(prisma, user.id);
  return user;
}
