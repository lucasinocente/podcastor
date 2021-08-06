# Podcastor Client

## Instruções

```
npm install
npm run dev
```

## Prod

```
npm run build
npm run start
```

## Modo Standalone

Este modo é uma espécie de gambiarra que teremos até sabermos como configurar domínios para paths de nossa aplicação para podermos ter a feature de dominio-do-cliente.com apontar para podcastor.me/slug-do-cliente.

Para ativá-lo configure as variáveis de ambiente abaixo:

```
STANDALONE_MODE=true
STANDALONE_SLUG=slug-do-cliente-no-banco

ex:
STANDALONE_MODE=true
STANDALONE_SLUG=sabedenada
```

Isso irá fazer a home da aplicação agir como se fosse a página de um podcast.

## Variáveis de ambiente

Para sobrescrever as variáveis do arquivo `.env.development` crie um arquivo `.env.local`.

Para saber mais sobre variáveis de ambiente acesse: https://nextjs.org/docs/basic-features/environment-variables
