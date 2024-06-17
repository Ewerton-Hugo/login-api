import { PrismaService } from '../../../../database/prisma.service';
import { CreateChaveDto } from '../../../ChavesRecuperaSenha/dto/create-ChavesRecuperaSenha.dto';
const prismaService = new PrismaService();
// const Chave = new CreateChaveDto();
// interface Chave {
//   chave: string;
//   id: string;
//   status: string;
//   message: string;
// }

export async function getChaveRecuperacaoSenha(email): Promise<CreateChaveDto> {
  let usuario = [];
  usuario = await prismaService.usuario.findMany({
    include: {
      chavesRecuperaSenha: true,
    },
    where: { usuarioEmail: email },
  });
  const chaves = usuario[0].chaves;
  if (chaves.length > 0) {
    for (var i = 0; i < chaves.length; i++) {
      if (chaves[i].status === 'ativo') {
        return chaves[i];
      } else {
        var errorMensage = true;
      }
    }
  }
  if (errorMensage === true) {
    return;
    {
      chave: '';
      id: '';
      message: 'As chaves de recuperação de senha foram usadas 10 vezes. Faça a autenticação de dois fatores para liberar mais chaves.';
    }
  }
  // for (let i = 0; i < 10; i++) {
  //   const code = generateRandomCode();
  //   console.log('Código gerado:', code);
  //   const formattedCode = formatCode(code);
  //   console.log('Código formatado:', formattedCode);
  //   await prisma.chaves.create({
  //     data: {
  //       chave: formattedCode,
  //       status: 'ativo',
  //       usuarioId: '6430f1f5-dc58-44f9-a08c-e27e0455605f', // Substitua pelo ID do usuário real
  //     },
  //   });
  //   console.log('-----------------------------------------');
  // }
}
