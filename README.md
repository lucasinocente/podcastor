# 🦫 Podcastor

Este repositório é um monorepositório das aplicações necessárias para o nosso querido 🦫 Podcastor :)

Dentro de cada aplicação estão as suas respectivas documentações e instruções de uso.

## Aplicações

- Client /client
- Hasura /hasura-server

## Configurações

Para rodar corretamente o projeto localmente, você irá precisar apontar o serviço do Hasura criado pelo Docker para o seu localhost.

Abra o arquivo `/etc/hosts` em modo sudo:

```
nano /etc/hosts
```

No arquivo, adicione a linha:

```
graphql-engine  localhost
```

## Docker Compose

Para desenvolvimento, utilize o docker-compose

```
docker-compose up
```