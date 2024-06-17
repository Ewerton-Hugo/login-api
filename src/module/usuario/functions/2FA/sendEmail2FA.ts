import * as nodemailer from 'nodemailer';
import { generateCodeWithHash } from '../../../../providers/hashRecuperacaoSenha';
import { updateChave } from '../../../ChavesRecuperaSenha/updateChaveRecuperaSenha';
import { CreateUsuarioDto } from '../../dto/create-usuario.dto';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',

  port: 587, //
  secure: false, //
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail(usuario: CreateUsuarioDto) {
  const chave = await generateCodeWithHash();
  if (chave) {
    console.log('################################################\n', chave);
    const mailOptions: MailOptions = {
      from: process.env.EMAIL,
      to: usuario.usuarioEmail,
      subject: 'Codigo de Verificação de 2 Fatores',
      text: `Seu código de verificação é: ${chave}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Erro ao enviar o e-mail:', error);
      } else {
        console.log('E-mail enviado com sucesso:', info.response);
        return chave;
      }
    });
  }
}
