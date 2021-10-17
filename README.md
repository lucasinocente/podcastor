# Podcastor 🦥

O Podcastor 🦥 é um bootstrap para o site do seu podcast. Você só precisa ter uma conta no Anchor.fm e configurar com o link do seu RSS.

O projeto ainda não foi testado com outras plataformas. Se você precisar usar um outra plataforma diferente do Anchor.fm, por favor abra uma issue no projeto e nos deixe saber se funcionou.

## Configuração

Crie um arquivo .env.local e sobrescreva as configurações com as suas informações:

```
VUE_APP_RSS_LINK=https://anchor.fm/s/70082bd4/podcast/rss
VUE_APP_PODCAST_TITLE=Podcastor
```

A variável `VUE_APP_RSS_LINK` será utilizada para gerar o site com as informações que estão publicadas no seu Anchor.fm. Já a variável `VUE_APP_PODCAST_TITLE` será utilizada para gerar a tag HTML de título do site.

## Instalação

```
npm install
```

### Desenvolvimento
```
npm run serve
```

### Produção

```
npm run build
```

Este projeto foi gerado inicialmente via [Vue CLI](https://cli.vuejs.org).