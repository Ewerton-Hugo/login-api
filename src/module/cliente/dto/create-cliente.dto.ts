export class CreateClienteDto {
  id?: string;
  clienteNome: string;
  clienteEndereco: string;
  clienteEmail: string;
  clienteSenha: string;
  clienteCpf: string;
  secret2FA: string;
  permicaoEmail2FA?: boolean;
  permicaoAppExterno2FA?: boolean;
}

