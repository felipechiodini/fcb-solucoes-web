// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fcbsolucoesweb.com.br",
  base: "/",
  integrations: [mdx(), sitemap(), pagefind(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-main",
    }]
  },
  redirects: {
    "como-evitar-falhas-em-sistemas-com-qualidade-de-software": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "por-que-seu-software-da-problema-e-como-resolver": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "como-ter-um-sistema-estavel-e-confiavel-para-sua-empresa": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "chega-de-bugs-como-garantir-qualidade-em-software": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "como-reduzir-erros-e-instabilidade-em-sistemas-empresariais": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "qualidade-de-software-para-projetos-profissionais": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "boas-praticas-de-qualidade-em-software-para-empresas": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "como-empresas-constroem-software-de-alta-qualidade": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "padroes-de-qualidade-em-software-para-negocios-digitais": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "processo-profissional-de-desenvolvimento-de-software": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "qualidade-em-software-para-empresas-que-querem-crescer": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "software-de-qualidade-como-evitar-prejuizo-e-retrabalho": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "como-garantir-qualidade-em-software-e-reduzir-custos": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "por-que-investir-em-qualidade-de-software-da-resultado": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "software-profissional-qualidade-que-gera-resultados": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "qualidade-em-software-como-economizar-tempo-e-dinheiro": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "como-software-de-qualidade-aumenta-lucro-da-empresa": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "investir-em-qualidade-de-software-vale-a-pena": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "qualidade-de-software-como-escalar-seu-negocio": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
    "software-confiavel-como-base-para-crescimento-da-empresa": "qualidade-em-software-o-que-realmente-faz-um-projeto-dar-certo",
  }
});