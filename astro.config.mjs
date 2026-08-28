import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.santosrefricomercial.com.br',
  // As 19 URLs do site estão indexadas com .html. 'file' faz o Astro gerar
  // conserto-de-geladeira.html em vez de conserto-de-geladeira/index.html.
  // NÃO MUDAR: trocar o formato de URL de um site com histórico no Google
  // custa semanas de posição, mesmo com redirecionamento correto.
  build: { format: 'file', inlineStylesheets: 'always' },
  trailingSlash: 'never',
  integrations: [sitemap({ changefreq: 'monthly', lastmod: new Date() })],
});
