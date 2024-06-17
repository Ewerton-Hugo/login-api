import { createClientService } from './createClient.service';
import { deleteClientService } from './deleteClient.service';
import { getAllClientsService } from './getAllClient.service';
import { updateClientService } from './updateClient.service';
import { getClientByIdService } from './getClientById.service';
import { auth } from './loginAuth';
import { sendEmail } from './recuperarSenha/enviarEmailRecuperaSenha';
import { createChavesRecuperaSenha } from './recuperarSenha/renovarHashRecuperaçãoSenha';
import { validateEmail2FA } from './2FA/validateEmail2FA';
import { authAppExterior } from './2FA/authAppExterno';
import { deletauth2FAEmail } from './2FA/deletauth2FAEmail';

// import { getChaveRecuperacaoSenha } from './recuperarSenha/criarConta';

export {
  createClientService,
  deleteClientService,
  getAllClientsService,
  updateClientService,
  getClientByIdService,
  auth,
  sendEmail,
  createChavesRecuperaSenha,
  validateEmail2FA,
  authAppExterior,
  deletauth2FAEmail,
  // getChaveRecuperacaoSenha,
};
