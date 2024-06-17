// import { Test, TestingModule } from '@nestjs/testing';
// import { UsuarioService } from './usuario.service';
// import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { PrismaService } from '../../database/prisma.service';
// import { NotFoundException } from '@nestjs/common';
// import { error } from 'console';

// const usuariosMockados = [
//   {
//     id: '0',
//     usuarioNome: 'João Silva',
//     usuarioEmail: 'joao.silva2@email.com',
//     usuarioSenha: 'senhaAleatoria1234',
//     usuarioCpf: '123.456.785-11',
//     cargo: 'Analista de SISTEMA2',
//   },
//   {
//     id: '1',
//     usuarioNome: 'Maria Santos',
//     usuarioEmail: 'maria.santos@email.com',
//     usuarioSenha: 'senha123',
//     usuarioCpf: '987.654.321-00',
//     cargo: 'Desenvolvedora Frontend',
//   },
//   {
//     id: '2',
//     usuarioNome: 'Pedro Oliveira',
//     usuarioEmail: 'pedro.oliveira@email.com',
//     usuarioSenha: 'minhasenha',
//     usuarioCpf: '456.789.123-45',
//     cargo: 'Gerente de Projetos',
//   },
// ];

// describe('UsuarioService', () => {
//   let service: UsuarioService;
//   let prismaService: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsuarioService,
//         {
//           provide: PrismaService,
//           useValue: {
//             usuario: {
//               create: jest.fn((dto) =>
//                 Promise.resolve({ ...dto, id: 'mockId' }),
//               ),
//               findMany: jest.fn(() => Promise.resolve(usuariosMockados)),
//               findUnique: jest.fn((id) =>
//                 Promise.resolve(
//                   usuariosMockados.find((user) => user.id === id),
//                 ),
//               ),
//               update: jest.fn(() => Promise.resolve({})),
//               delete: jest.fn(() => Promise.resolve({})),
//               findFirst: jest.fn(() => Promise.resolve(usuariosMockados[0])), // Adicionando findFirst
//             },
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<UsuarioService>(UsuarioService);
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('create', () => {
//     it('should create a new user entity item successfully', async () => {
//       const createUsuarioDto: CreateUsuarioDto = {
//         id: '123e4567-e89b-12d3-a456-426614174000', // Sample UUID
//         usuarioNome: 'John Doe',
//         usuarioEmail: 'john.doe@example.com',
//         usuarioSenha: 'password123', // Please use strong passwords in production!
//         usuarioCpf: '123.456.789-00',
//         cargo: 'Software Engineer',
//         secret2FA: 'gibberish-2fa-secret', // Replace with actual 2FA secret
//         permicaoEmail2FA: true,
//         permicaoAppExterno2FA: false,
//       };

//       const expected = createUsuarioDto;

//       jest.spyOn(service, 'create').mockResolvedValue(expected);

//       expect(await service.create(createUsuarioDto)).toBe(expected);
//     });

//     it('should throw an exception', () => {
//       const createUsuarioDto: CreateUsuarioDto = {
//         id: '123e4567-e89b-12d3-a456-426614174000', // Sample UUID
//         usuarioNome: 'John Doe',
//         usuarioEmail: 'john.doe@example.com',
//         usuarioSenha: 'password123', // Please use strong passwords in production!
//         usuarioCpf: '123.456.789-00',
//         cargo: 'Software Engineer',
//         secret2FA: 'gibberish-2fa-secret', // Replace with actual 2FA secret
//         permicaoEmail2FA: true,
//         permicaoAppExterno2FA: false,
//       };

//       jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());
//       expect(service.create(createUsuarioDto)).rejects.toThrowError();
//     });
//   });

//   describe('findAll', () => {
//     it('should return a user entity list successfully', async () => {
//       // Act
//       const result = await service.findAll();

//       // Assert
//       expect(result).toEqual(usuariosMockados);
//       expect(prismaService.usuario.findMany).toHaveBeenCalledTimes(1);
//     });

//     it('should throw an exception', async () => {
//       // Arrange
//       jest
//         .spyOn(prismaService.usuario, 'findMany')
//         .mockRejectedValueOnce(new Error());

//       // Assert
//       await expect(service.findAll()).rejects.toThrowError();
//     });
//   });

//   describe('findOne', () => {
//     it('Should return user by id', async () => {
//       const userID = '0';
//       const user = usuariosMockados[0];
//       jest.spyOn(service, 'findOne').mockResolvedValue(user);

//       expect(await service.findOne(userID)).toBe(user);
//     });

//     it('Should return an exeception', async () => {
//       jest
//         .spyOn(service, 'findOne')
//         .mockRejectedValueOnce(new NotFoundException());

//       await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
//     });
//   });

//   describe('update', () => {
//     it('should update a user by id', async () => {
//       const userId = '0'; // Id de exemplo
//       const updateUsuarioDto = {
//         id: '123e4567-e89b-12d3-a456-426614174000', // Sample UUID
//         usuarioNome: 'John Doe',
//         usuarioEmail: 'john.doe@example.com',
//         usuarioSenha: 'password123', // Please use strong passwords in production!
//         usuarioCpf: '123.456.789-00',
//         cargo: 'Software Engineer',
//         secret2FA: 'gibberish-2fa-secret', // Replace with actual 2FA secret
//         permicaoEmail2FA: true,
//         permicaoAppExterno2FA: false,
//       };
//       const expected = updateUsuarioDto;

//       jest.spyOn(service, 'update').mockResolvedValue(expected);

//       expect(await service.update(userId, updateUsuarioDto)).toBe(expected);
//     });

//     it('should throw an exception ', () => {
//       jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

//       const updateUsuarioDto = {
//         id: '123e4567-e89b-12d3-a456-426614174000', // Sample UUID
//         usuarioNome: 'John Doe',
//         usuarioEmail: 'john.doe@example.com',
//         usuarioSenha: 'password123', // Please use strong passwords in production!
//         usuarioCpf: '123.456.789-00',
//         cargo: 'Software Engineer',
//         secret2FA: 'gibberish-2fa-secret', // Replace with actual 2FA secret
//         permicaoEmail2FA: true,
//         permicaoAppExterno2FA: false,
//       };

//       expect(service.update('0', updateUsuarioDto)).rejects.toThrowError();
//     });
//   });

//   describe('delete', () => {
//     it('should delete user successfully', async () => {
//       // Remove o usuário
//       await service.remove('1');

//       // Verifica se o usuário foi removido corretamente
//       await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
//     });

//     it('should throw an exception', async () => {
//       jest
//         .spyOn(service, 'remove')
//         .mockRejectedValueOnce(new NotFoundException());

//       await expect(service.remove('10')).rejects.toThrow(NotFoundException);
//     });
//   });
// });
