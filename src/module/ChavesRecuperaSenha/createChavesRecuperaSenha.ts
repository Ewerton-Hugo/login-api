// import { PrismaService } from '../../database/prisma.service';
// import { generateCodeWithHash } from '../../providers/hashRecuperacaoSenha';
// const prisma = new PrismaService();

// export async function createChaves(prisma: PrismaService): Promise<any[]> {
//   for (let i = 0; i < 10; i++) {
//     const code = generateCodeWithHash();
//     await prisma.chaves.create({
//       data: {
//         chave: code,
//         status: 'ativo',
//         usuarioId: '6430f1f5-dc58-44f9-a08c-e27e0455605f', // Substitua pelo ID do usuário real
//       },
//     });
//     console.log('-----------------------------------------');
//   }
//   return [];
// }
