import * as speakeasy from 'speakeasy';

//secret2FA - Hash presente no banco (usado para cadastrar no app externo)
//token -  numero gerado pelo app externo
export function authAppExterior(secret2FA, token) {
  //   Verificar se o usuário tem a chave secreta 2FA
  if (secret2FA) {
    // Verificar o token 2FA
    const verified = speakeasy.totp.verify({
      secret: secret2FA,
      encoding: 'base32',
      token,
    });
    if (verified) {
      return 'Usuário autenticado com 2FA';
    } else {
      throw new Error('Token 2FA inválido');
    }
  } else {
    // Se não houver chave 2FA, autenticar apenas com senha
    return 'Usuário autenticado';
  }
}
