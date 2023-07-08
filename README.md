# Serviço de Disparo de Emails

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


Este projeto foi desenvolvido como parte da disciplina de Banco de Dados Avançado do curso de Ciência da Computação da [Universidade Federal de Pelotas](https://portal.ufpel.edu.br/). O objetivo principal é demonstrar o uso do banco de dados NoSQL Redis como message broker em um sistema de disparo de e-mails em lote.

Este projeto é um clone do repositório [redis-dba](https://github.com/guivahl/redis-dba), com algumas adições de funcionalidades.

## Tecnologias Utilizadas

- [Redis](https://redis.io/) - Banco de dados NoSQL para armazenar as mensagens em filas
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript do lado do servidor
  - [Bull](https://github.com/OptimalBits/bull) - Biblioteca para manipulação de filas de mensagens utilizando Redis
  - [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property) - SDK da AWS para envio de e-mails utilizando o serviço Simple Email Service (SES)

## Como Executar

1. Clone o repositório e acesse a pasta do projeto
   ```shell
   git clone https://github.com/Fernanda-Kipper/email-service-backend.git
   cd nome-do-repositorio
    ```
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Execute o projeto com o comando `npm start`

### Frontend

Você pode executar o frontend para se comunicar com esta aplicação através de requisições HTTP. Para isso, siga as instruções abaixo:

1. Clone esse [repositório](https://github.com/Fernanda-Kipper/membership-frontend)
```
git clone https://github.com/Fernanda-Kipper/membership-frontend
```

2. Siga as instruções fornecidas no repositório do frontend para configurar e executar o projeto.

## Vídeos

Este projeto serviu como base para uma série de vídeos no meu canal do YouTube, onde compartilho conhecimentos e demonstro a construção de alguns componentes do projeto. 

- [Vídeo: Construção da API Rest](https://www.youtube.com/live/GVF--Rl3bP4?feature=share)
- [Vídeo: Desenvolvimento de Testes Unitários](https://www.youtube.com/live/GVF--Rl3bP4?feature=share)
