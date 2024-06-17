import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../database/prisma.service';
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  updateUserService,
  getUserByIdService,
  auth,
  sendEmail,
  createChavesRecuperaSenha,
  validateEmail2FA,
  // getChaveRecuperacaoSenha,
} from './functions/index';
@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    try {
      return createUserService(this.prisma, createUsuarioDto);
    } catch (error) {
      // Aqui você pode lidar com o erro como desejar.
      // Pode ser lançar uma exceção, registrar em um log, etc.
      console.error('Ocorreu um erro durante a criação do usuário:', error);
      throw new Error('Ocorreu um erro durante a criação do usuário.');
    }
  }

  findAll() {
    return getAllUsersService(this.prisma);
  }

  findOne(id: string) {
    return getUserByIdService(this.prisma, id);
  }

  update(id: string, createUsuarioDto: CreateUsuarioDto) {
    return updateUserService(id, createUsuarioDto);
  }
  auth(usrarioLogin) {
    console.log('###############################');

    return auth(this.prisma, usrarioLogin);
  }

  remove(id: string) {
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');

    return deleteUserService(this.prisma, id);
  }

  sendEmail(email) {
    return sendEmail(email);
  }
  createChavesRecuperaSenha(id: string) {
    return createChavesRecuperaSenha(id);
  }
  validateEmail2FA(chavve) {
    return validateEmail2FA(this.prisma, chavve);
  }

  // recuperaSenhaHash(email: string) {
  //   return getChaveRecuperacaoSenha(email);
  // }
}
