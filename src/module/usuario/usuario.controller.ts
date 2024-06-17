import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      console.log('###############################\n', createUsuarioDto);
      return await this.usuarioService.create(createUsuarioDto);
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao criar o usuário.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.usuarioService.findAll();
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao buscar usuários.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.usuarioService.findOne(id);
    } catch (error) {
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);
    }
  }

  // @Patch('recuperaSenhaHash/:id')
  // recuperaSenhaHash(@Param('id') id: string) {
  //   return this.usuarioService.recuperaSenhaHash(id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() createUsuarioDto: CreateUsuarioDto,
  ) {
    try {
      return await this.usuarioService.update(id, createUsuarioDto);
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao atualizar o usuário.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/auth')
  async auth(@Body() UsuarioLogin: CreateUsuarioDto) {
    try {
      return this.usuarioService.auth(UsuarioLogin);
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao excluir o usuário.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Post('/authEmail')
  // async enviarEmail(@Body() data) {
  //   try {
  //     return this.usuarioService.sendEmail(data.email);
  //   } catch (error) {
  //     throw new HttpException(
  //       'Ocorreu um erro ao excluir o usuário.',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.usuarioService.remove(id);
    } catch (error) {
      throw new HttpException(
        'Ocorreu um erro ao excluir o usuário.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Post('/recuperaSenhaHash')
  async createChavesRecuperaSenha(@Body() data) {
    try {
      return await this.usuarioService.createChavesRecuperaSenha(data.id);
    } catch (error) {
      console.error('Erro ao criar chaves:', error.message || error);
      throw error; // Retorna o erro original
    }
  }

  @Post('/validarEmail2FA')
  async validarEmail2FA(@Body() data) {
    try {
      return await this.usuarioService.validateEmail2FA(data.chave);
    } catch (error) {
      console.error('Erro ao criar chaves:', error.message || error);
      throw error; // Retorna o erro original
    }
  }
}
