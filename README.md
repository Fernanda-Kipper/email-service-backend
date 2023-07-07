# Serviço de disparo de Emails

Esse projeto foi desenvolvido durante a cadeira de Banco de dados Avançado realizada no curso de Ciência da Computação na [Universidade Federal de Pelotas](https://portal.ufpel.edu.br/). Buscamos realizar um estudo de caso com o banco NoSQL Redis, utilizando o mesmo como message broker em um sistema de disparo de e-mails em lote.

> Esse projeto é um clone [deste repositório](https://github.com/guivahl/redis-dba) com algumas adições de funcionalidades.


## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
    - [Bull](https://github.com/OptimalBits/bull)
    - [AWS.SES](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property)

## Como executar

1. Clone o repositório e entre na pasta
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Rode o projeto com o comando `npm start`

### Frontend

Você pode executar o Frontend para se comunicar com essa aplicação através de requisiçõs HTTP:

1. Clone esse [repositório](https://github.com/Fernanda-Kipper/membership-frontend) e siga o passo a passo.

## Vídeos

Esse projeto serviu como base para uma série de vídeos no meu canal do Youtube, afim de demostrar a construção de alguns componentes do projeto e compartilhar meu conhecimento com a comunidade :)

- [Video construção da API Rest](https://www.youtube.com/live/GVF--Rl3bP4?feature=share)
- [Video desenvolvendo testes unitários](https://www.youtube.com/live/GVF--Rl3bP4?feature=share)