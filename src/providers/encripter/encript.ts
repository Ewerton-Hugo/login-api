require('dotenv').config();
const crypto = require('crypto');

export function encript(password) {
  console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\n');
  let cipher = crypto.createCipheriv(
    'aes-256-cbc',
    process.env.ENC_KEY,
    process.env.IV,
  );
  let encrypted = cipher.update(password, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}
