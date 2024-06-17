import { Module } from '@nestjs/common';
import { ClienteModule } from './module/cliente/cliente.module';
import { UsuarioModule } from './module/usuario/usuario.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { AgendamentoModule } from './module/agendamento/agendamento.module';

@Module({
  imports: [ClienteModule, UsuarioModule, AgendamentoModule, SchedulingModule],
})
export class AppModule {}
