# Trabalhando com o Hasura

## Instalar o Hasura CLI

Para instalar o CLI do Hasura basta executar o comando:

```
npm install -g hasura
```

Lembrando que os comandos do Hasura CLI devem ser executados dentro da pasta hasura-server

## Como criar uma migration

1 - Acesse a pasta hasura-server pelo terminal

2 - Execute o comando:

```
hasura migrate create <nome_da_migration> --from-server
```

## Como aplicar uma migration

1 - Acesse a pasta hasura-server pelo terminal

2 - Execute o comando:

```
hasura migrate apply
```

## Como exportar metadata


1 - Acesse a pasta hasura-server pelo terminal

2 - Execute o comando:

```
hasura metadata export
```
