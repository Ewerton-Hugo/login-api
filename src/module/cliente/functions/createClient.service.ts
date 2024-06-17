import { PrismaService } from '../../../database/prisma.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { encript } from '../../../providers/encripter/encript';
import * as speakeasy from 'speakeasy';
import { createChavesRecuperaSenha } from './recuperarSenha/renovarHashRecuperaçãoSenha';
import { createauth2FAEmail } from './2FA/createauth2FAEmail';

export async function createClientService(
  prisma: PrismaService,
  data: CreateClienteDto,
): Promise<any> {
  const clienteExists = await prisma.cliente.findFirst({
    where: {
      clienteCpf: data.clienteCpf,
    },
  });

  if (clienteExists) {
    throw new Error('Cliente já cadastrado');
  }

  // Gerar uma chave secreta 2FA para o novo usuário
  const secret = speakeasy.generateSecret();
  const clienteSenha = await encript(data.clienteSenha);

  // Armazenar a chave secreta 2FA e senha encriptada no banco de dados
  const client = await prisma.cliente.create({
    data: {
      ...data,
      clienteSenha,
      secret2FA: secret.base32, // Armazenar a chave secreta 2FA no usuário
    },
  });

  createChavesRecuperaSenha(client.id);
  createauth2FAEmail(prisma, client.id);
  return client;
}
