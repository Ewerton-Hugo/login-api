export class Autenticacao2FAEmailDTO {
  id?: string;
  chave: string;
  status: string;
  usuarioId?: string | null;
}
