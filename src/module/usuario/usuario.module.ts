import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from '../../database/prisma.service';
@Module({
  controllers: [UsuarioController],
  providers: [PrismaService, UsuarioService],
})
export class UsuarioModule {}