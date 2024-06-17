import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from '../../database/prisma.service';
import {
  createClientService,
  deleteClientService,
  getAllClientsService,
  updateClientService,
  getClientByIdService,
  auth,
  sendEmail,
  createChavesRecuperaSenha,
  validateEmail2FA,
  // getChaveRecuperacaoSenha,
} from './functions/index';
@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(createClienteDto: CreateClienteDto) {
    try {
      return createClientService(this.prisma, createClienteDto);
    } catch (error) {
      // Aqui você pode lidar com o erro como desejar.
      // Pode ser lançar uma exceção, registrar em um log, etc.
      console.error('Ocorreu um erro durante a criação do usuário:', error);
      throw new Error('Ocorreu um erro durante a criação do usuário.');
    }
  }

  findAll() {
    return getAllClientsService(this.prisma);
  }

  findOne(id: string) {
    return getClientByIdService(this.prisma, id);
  }

  update(id: string, createClienteDto: CreateClienteDto) {
    return updateClientService(id, createClienteDto);
  }
  auth(usrarioLogin) {
    console.log('###############################');

    return auth(this.prisma, usrarioLogin);
  }

  remove(id: string) {
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');

    return deleteClientService(this.prisma, id);
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
