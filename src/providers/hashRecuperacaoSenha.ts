const crypto = require('crypto');

export function generateCodeWithHash() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Função para gerar um código aleatório de 27 caracteres
  function generateRandomCode(): string {
    console.log('Gerando código aleatório...');
    let code = '';
    for (let i = 0; i < 27; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  // Função para separar o código em conjuntos de 9 caracteres com "."
  function formatCode(code: string): string {
    console.log('Formatando código...');
    const chunks = code.match(/.{1,9}/g);
    if (chunks) {
      return chunks.join('.');
    } else {
      return code;
    }
  } 

  const code = generateRandomCode();
  console.log('Código gerado:', code);

  const formattedCode = formatCode(code);
  console.log('Código formatado:', formattedCode);

  return formattedCode;
}
