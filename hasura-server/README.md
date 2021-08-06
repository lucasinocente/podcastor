# Trabalhando com o Hasura

## Instalar o Hasura CLI

Para instalar o CLI do Hasura basta executar o comando:

```
npm install -g hasura-cli
```

**Lembrando que os comandos do Hasura CLI devem ser executados dentro da pasta hasura-server.**

OBS: se estiver rodando o console do hasura a partir da CLI pelo comando `hasura console`, é importante lembrar de desabilitar a variável
`HASURA_GRAPHQL_ENABLE_CONSOLE`. Para isso basta colocar o valor como `false` no arquivo `docker-compose.yml` na raiz do projeto.

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

# Seed

## Como criar um seed de uma tabela

Para apenas uma tabela, execute o comando:

```
hasura seed create <nome_do_seed> --from-table <nome_da_tabela_1>
```

Para várias tabelas:

```
hasura seed create <nome_do_seed> --from-table <nome_da_tabela_1> --from-table <nome_da_tabela_2>
```

## Como aplicar um seed

Para aplicar todos os seed na base de dados, execute o comando:

```
hasura seed apply
```

Para aplicar apenas um específico, execute o comando:

```
hasura seed apply --file seeds/<nome_do_arquivo_sql_do_seed>.sql
```
