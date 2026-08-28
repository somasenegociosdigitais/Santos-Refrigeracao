// Config sem imports de pacote: o Astro aceita um objeto simples como export
// default. Evita depender de defineConfig e do integration de sitemap, que
// agora é um arquivo estático em public/sitemap.xml.
export default {
  site: 'https://www.santosrefricomercial.com.br',
  // As 19 URLs do site estao indexadas com .html. 'file' faz o Astro gerar
  // conserto-de-geladeira.html em vez de conserto-de-geladeira/index.html.
  // NAO MUDAR: trocar o formato de URL de um site com historico no Google
  // custa semanas de posicao, mesmo com redirecionamento correto.
  build: { format: 'file', inlineStylesheets: 'always' },
  trailingSlash: 'never',
};
