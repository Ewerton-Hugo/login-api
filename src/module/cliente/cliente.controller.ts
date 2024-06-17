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
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    try {
      console.log('###############################\n', createClienteDto);
      return await this.clienteService.create(createClienteDto);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.clienteService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.clienteService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  // @Patch('recuperaSenhaHash/:id')
  // recuperaSenhaHash(@Param('id') id: string) {
  //   return this.usuarioService.recuperaSenhaHash(id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() createClienteDto: CreateClienteDto,
  ) {
    try {
      return await this.clienteService.update(id, createClienteDto);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/auth')
  async auth(@Body() ClienteLogin: CreateClienteDto) {
    try {
      return this.clienteService.auth(ClienteLogin);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
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
      return await this.clienteService.remove(id);
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o usuário.',
          error: error.message || error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Post('/recuperaSenhaHash')
  async createChavesRecuperaSenha(@Body() data) {
    try {
      return await this.clienteService.createChavesRecuperaSenha(data.id);
    } catch (error) {
      console.error(
        {
          message: 'Ocorreu um erro ao criar a chave.',
          error: error.message || error,
        },
        error.message || error,
      );
      throw error; // Retorna o erro original
    }
  }

  @Post('/validarEmail2FA')
  async validarEmail2FA(@Body() data) {
    try {
      return await this.clienteService.validateEmail2FA(data.chave);
    } catch (error) {
      console.error(
        {
          message: 'Ocorreu um erro ao criar a chave.',
          error: error.message || error,
        },
        error.message || error,
      );
      throw error; // Retorna o erro original
    }
  }
}
