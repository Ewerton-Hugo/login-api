import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            auth: jest.fn(),
            sendEmail: jest.fn(),
            remove: jest.fn(),
            createChavesRecuperaSenha: jest.fn(),
            validateEmail2FA: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  const createUsuarioDto: CreateUsuarioDto = {
    id: '1',
    usuarioNome: 'John Doe',
    usuarioEmail: 'johndoe@example.com',
    usuarioSenha: 'password123',
    usuarioCpf: '123.456.789-00',
    cargo: 'Admin',
    secret2FA: 'secret',
    permicaoEmail2FA: true,
    permicaoAppExterno2FA: false,
  };

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create and return the result', async () => {
      const result = { ...createUsuarioDto, id: '1' };

      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createUsuarioDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createUsuarioDto);
    });

    it('should throw an error if service.create throws', async () => {
      jest.spyOn(service, 'create').mockRejectedValue(new Error());

      await expect(controller.create(createUsuarioDto)).rejects.toThrowError(
        'Ocorreu um erro ao criar o usuário.',
      );
    });
  });

  describe('findAll', () => {
    it('should call service.findAll and return the result', async () => {
      const result = [createUsuarioDto];

      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw an error if service.findAll throws', async () => {
      jest.spyOn(service, 'findAll').mockRejectedValue(new Error());

      await expect(controller.findAll()).rejects.toThrowError(
        'Ocorreu um erro ao buscar usuários.',
      );
    });
  });

  describe('findOne', () => {
    it('should call service.findOne and return the result', async () => {
      const id = '1';
      const result = createUsuarioDto;

      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });

    it('should throw an error if service.findOne throws', async () => {
      const id = '1';

      jest.spyOn(service, 'findOne').mockRejectedValue(new Error());

      await expect(controller.findOne(id)).rejects.toThrowError(
        'Usuário não encontrado.',
      );
    });
  });

  describe('update', () => {
    it('should call service.update and return the result', async () => {
      const id = '1';
      const result = { ...createUsuarioDto, usuarioNome: 'Updated Name' };

      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update(id, createUsuarioDto)).toBe(result);
      expect(service.update).toHaveBeenCalledWith(id, createUsuarioDto);
    });

    it('should throw an error if service.update throws', async () => {
      const id = '1';

      jest.spyOn(service, 'update').mockRejectedValue(new Error());

      await expect(
        controller.update(id, createUsuarioDto),
      ).rejects.toThrowError('Ocorreu um erro ao atualizar o usuário.');
    });
  });

  describe('auth', () => {
    it('should call service.auth and return the result', async () => {
      const result = 'Usuario autenticado';

      jest.spyOn(service, 'auth').mockResolvedValue(result);

      expect(await controller.auth(createUsuarioDto)).toBe(result);
      expect(service.auth).toHaveBeenCalledWith(createUsuarioDto);
    });

    it('should throw an error if service.auth throws', async () => {
      jest
        .spyOn(service, 'auth')
        .mockRejectedValue(
          new Error('Usuário autenticado: Usuário ou senha inválidos'),
        );

      await expect(controller.auth(createUsuarioDto)).rejects.toThrowError(
        'Usuário autenticado: Usuário ou senha inválidos',
      );
    });
  });

  // describe('enviarEmail', () => {
  //   it('should call service.sendEmail and return the result', async () => {
  //     const data = { email: 'test@example.com' };
  //     const result = { message: 'Email sent' };

  //     jest.spyOn(service, 'sendEmail').mockResolvedValue(result);

  //     expect(await controller.enviarEmail(data)).toBe(result);
  //     expect(service.sendEmail).toHaveBeenCalledWith(data.email);
  //   });

  //   it('should throw an error if service.sendEmail throws', async () => {
  //     const data = { email: 'test@example.com' };

  //     jest.spyOn(service, 'sendEmail').mockRejectedValue(new Error());

  //     await expect(controller.enviarEmail(data)).rejects.toThrowError('Ocorreu um erro ao excluir o usuário.');
  //   });
  // });

  describe('remove', () => {
    it('should call service.remove and return the result', async () => {
      const id = '1';
      const result = { message: 'User deleted' };

      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove(id)).toBe(result);
      expect(service.remove).toHaveBeenCalledWith(id);
    });

    it('should throw an error if service.remove throws', async () => {
      const id = '1';

      jest.spyOn(service, 'remove').mockRejectedValue(new Error());

      await expect(controller.remove(id)).rejects.toThrowError(
        'Ocorreu um erro ao excluir o usuário.',
      );
    });
  });

  describe('createChavesRecuperaSenha', () => {
    it('should call service.createChavesRecuperaSenha and return the result', async () => {
      const data = { id: '1' };
      const result = { message: 'Chave criada' };

      jest
        .spyOn(service, 'createChavesRecuperaSenha')
        .mockResolvedValue(result);

      expect(await controller.createChavesRecuperaSenha(data)).toBe(result);
      expect(service.createChavesRecuperaSenha).toHaveBeenCalledWith(data.id);
    });

    it('should log and throw an error if service.createChavesRecuperaSenha throws', async () => {
      const data = { id: '1' };
      const error = new Error('Some error');

      jest.spyOn(service, 'createChavesRecuperaSenha').mockRejectedValue(error);
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      await expect(controller.createChavesRecuperaSenha(data)).rejects.toThrow(
        error,
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Erro ao criar chaves:',
        error.message || error,
      );
    });
  });

  // describe('validarEmail2FA', () => {
  //   it('should call service.validateEmail2FA and return the result', async () => {
  //     const data = { chave: 'some-key' };
  //     const result = { message: '2FA validated' };

  //     jest.spyOn(service, 'validateEmail2FA').mockResolvedValue(result);

  //     expect(await controller.validarEmail2FA(data)).toBe(result);
  //     expect(service.validateEmail2FA).toHaveBeenCalledWith(data.chave);
  //   });

  //   it('should log and throw an error if service.validateEmail2FA throws', async () => {
  //     const data = { chave: 'some-key' };
  //     const error = new Error('Some error');

  //     jest.spyOn(service, 'validateEmail2FA').mockRejectedValue(error);
  //     const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

  //     await expect(controller.validarEmail2FA(data)).rejects.toThrow(error);
  //     expect(consoleSpy).toHaveBeenCalledWith('Erro ao criar chaves:', error.message || error);
  //   });
  // });
});
