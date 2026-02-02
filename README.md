# Astro Launchpad

Um starter Astro adaptado para agências e estúdios: blog MDX, busca global, RSS, sitemap, temas claro/escuro/azul, e componentes prontos para vender serviços ou publicar conteúdo.

![](./public/SS-1.png)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/static-site?referralCode=welcome)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/roicort/launchpad)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Froicort%2Flaunchpad)

## Funcionalidades
- Blog com Markdown/MDX, post em destaque e listagens de tags
- Coleções tipadas para posts, autores e sociais em [src/content.config.ts](src/content.config.ts)
- Busca em todo o site via Pagefind com modal acessível
- Pronto para SEO: OpenGraph/Twitter, links canônicos e fontes pré-carregadas em [src/components/BaseHead.astro](src/components/BaseHead.astro)
- Temas `claro/escuro/azul` com alternância persistente; alternância de debug para bordas de layout
- RSS (`/rss.xml`) e sitemap (`/sitemap-index.xml`) gerados automaticamente


<div style="display: flex; align-items: center; gap: 10px; width: 100%; margin-top: 20px;">
    <img src="./public/SS-2.png" style="width: 180px; vertical-align: middle;" />
    <img src="./public/SS-3.png" style="width: 180px; vertical-align: middle;" />
    <img src="./public/SS-4.png" style="width: 180px; vertical-align: middle;" />
</div>


## Requisitos
- Bun
- Astro @latest
- Tailwind CSS

## Instalar e executar

```sh
# instalar dependências
bun install

# iniciar servidor de desenvolvimento
bun run dev

# build de produção
bun run build

# visualizar o build
bun run preview
```

## Conteúdo
- Posts: adicione `.md` ou `.mdx` em `src/content/blog`. O schema valida `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `tags[]`.
- Autores: `src/content/authors.yml`.
- Sociais: `src/content/socials.yml`.

Exemplo de frontmatter:
```md
---
title: "Como lançamos em 6 semanas"
description: "Processo de ponta a ponta para equipes pequenas."
pubDate: 2024-12-12
updatedDate: 2025-01-03
tags: [entrega, processo]
heroImage: ../../assets/blog/ship.jpg
---
```

## Personalização rápida
- Nome e descrição do site em [src/consts.ts](src/consts.ts).
- Navegação e ações do herói em [src/pages/index.astro](src/pages/index.astro).
- Cores, tipo e utilitários em `src/styles/global.css`.
- Componentes principais: cabeçalho com busca e alternâncias ([src/components/Header.astro](src/components/Header.astro)), layout base ([src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)).

## Scripts disponíveis
- `npm run dev`: servidor em `localhost:4321` (padrão Astro).
- `npm run build`: gera `dist/` pronto para deploy.
- `npm run preview`: serve o site construído localmente.

## Deploy
A saída é HTML estático. Faça upload de `dist/` para sua plataforma de escolha (Netlify, Vercel, Cloudflare Pages, S3+CDN). Defina `BASE_URL` se publicar em um subpath.
