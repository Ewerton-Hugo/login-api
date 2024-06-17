import * as nodemailer from 'nodemailer';
import { getChaveRecuperacaoSenha } from './getChaveRecuperacaoSenha';
import { updateChave } from '../../../ChavesRecuperaSenha/updateChaveRecuperaSenha';

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

export async function sendEmail(destinatario: string) {
  const chave = await getChaveRecuperacaoSenha(destinatario);
  console.log('##################################\n', chave);
  if (chave) {
    console.log(
      '################################################\n',
      chave.chave,
    );
    const mailOptions: MailOptions = {
      from: process.env.EMAIL,
      to: destinatario,
      subject: 'Codigo de Verificação',
      text: `Seu código de verificação é: ${chave.chave}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Erro ao enviar o e-mail:', error);
      } else {
        console.log('E-mail enviado com sucesso:', info.response);
        const data = {
          status: 'inativo',
        };
        updateChave(chave);
        return chave;
      }
    });
  } else {
    return [
      {
        menssage:
          'As chaves de recuperação de senha foram usadas 10 vezes. Faça a autenticação de dois fatores para liberar mais chaves.',
      },
    ];
  }
}
