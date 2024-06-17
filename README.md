

Requisitos
Antes de executar o projeto, certifique-se de ter o Docker e o Node.js instalados em sua máquina.

Docker: link para download
Node.js: link para download
Configuração Inicial
Certifique-se de estar na raiz do projeto antes de prosseguir.

1. Docker Compose
Execute o seguinte comando para iniciar os contêineres necessários usando o Docker Compose:

bash
Copy code
docker-compose up -d
Este comando iniciará os serviços essenciais para o funcionamento do projeto.

2. Prisma Migration
Execute a migração do Prisma para criar e/ou atualizar o banco de dados:

bash
Copy code
<p> npx prisma migrate dev </p>
Este comando aplicará as migrações pendentes e garantirá que o banco de dados esteja pronto para uso.

3. Inicialização do Projeto
Finalmente, inicie o projeto com o seguinte comando:

bash
npm run start:dev
Isso iniciará o projeto no modo de desenvolvimento.