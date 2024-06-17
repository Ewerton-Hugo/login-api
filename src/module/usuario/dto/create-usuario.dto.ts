export class CreateUsuarioDto {
  id?: string;
  usuarioNome: string;
  usuarioEmail: string;
  usuarioSenha: string;
  usuarioCpf?: string | null;
  cargo?: string | null;
  secret2FA: string;
  permicaoEmail2FA?: boolean;
  permicaoAppExterno2FA?: boolean;
}
