const crypto = require('crypto');

// Gerando um IV aleatório
const IV = crypto.randomBytes(16).toString('hex'); // IV geralmente tem 16 bytes (128 bits) para AES

// Gerando uma chave de criptografia aleatória (ENC_KEY)
const ENC_KEY = crypto.randomBytes(32).toString('hex'); // Chave de 256 bits (32 bytes) para AES-256

console.log('IV:', IV);
console.log('ENC_KEY:', ENC_KEY);
