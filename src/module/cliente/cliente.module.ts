import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from '../../database/prisma.service';
@Module({
  controllers: [ClienteController],
  providers: [PrismaService, ClienteService],
})
export class ClienteModule {}
