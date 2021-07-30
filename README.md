# Trabalhando com o Hasura

## Instalar o Hasura CLI

Para instalar o CLI do Hasura basta executar o comando:

```
npm install -g hasura
```

Lembrando que os comandos do Hasura CLI devem ser executados dentro da pasta hasura-server

# Migration

Caso seja interessante usar o console do Hasura e ter todas as modificações sempre atualizadas nas migrations, basta acessar usando o comando:

```
hasura console
```

## Como criar uma migration

Execute o comando:

```
hasura migrate create <nome_da_migration> --from-server
```

## Como aplicar uma migration

Execute o comando:

```
hasura migrate apply
```

## Como validar o status da migration

Execute o comando:

```
hasura migrate status
```

## Como navegar até uma migration

Execute o comando:

```
hasura migrate apply --goto <id_da_migration>
```

## Como mesclar migrations existes

Para mesclar migrations a partir de uma em específico até a mais recente, execute o comando:

```
hasura migrate squash --from <id_da_primeira_migration_da_mescla>
```

# Metadata

Caso seja interessante usar o console do Hasura e ter todas as modificações sempre atualizadas no metadata, basta acessar usando o comando:

```
hasura console
```

## Como exportar metadata

Execute o comando:

```
hasura metadata export
```

## Como aplicar metadata

Execute o comando:

```
hasura metadata apply
```
