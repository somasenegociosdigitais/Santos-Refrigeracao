# Santos Refrigeração — site em Astro

Site estático. Sem React no cliente, sem bundle de runtime. O HTML sai pronto do
build: title, description, canonical e JSON-LD são renderizados na geração, não
injetados por script.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera dist/

## Antes do primeiro build: as fontes

`public/fonts/` precisa dos 8 arquivos abaixo. **Não** voltar para o Google Fonts
por `<link>`: domínio externo no caminho crítico é DNS + TLS + CSS antes do
primeiro pixel.

Baixe em <https://gwfh.mranftl.com> (charset **latin**, formato **woff2**) e
renomeie:

| Fonte   | Pesos         | Nome do arquivo                        |
|---------|---------------|----------------------------------------|
| Poppins | 500,600,700,800 | `poppins-500.woff2` … `poppins-800.woff2` |
| Mulish  | 400,500,600,700 | `mulish-400.woff2` … `mulish-700.woff2`   |

Sem eles o build funciona, mas o site renderiza com a fonte de sistema.

## Estrutura

    src/data/site.js        NAP, menu, áreas, grade da home
    src/data/conteudo.json  copy das 17 páginas de serviço (era services-data.js)
    src/layouts/Base.astro  head, SEO, JSON-LD, header, rodapé
    src/layouts/Servico.astro  template da página de serviço (era ServicePage.jsx)
    src/pages/              um arquivo por URL
    public/                 assets, fontes, robots.txt, CNAME, .nojekyll

## Regras que não se mudam

- **URLs terminam em `.html`.** `build.format: 'file'` no `astro.config.mjs`.
  As 19 URLs estão indexadas nesse formato; trocar para `/pagina/` custa
  semanas de posição mesmo com redirecionamento.
- **`public/.nojekyll` fica onde está.** O Jekyll do GitHub Pages ignora tudo
  que começa com `_` e o Astro gera `_astro/`. Sem o arquivo o site sobe sem CSS.
- **`public/CNAME` fica onde está.** É o domínio custom do Pages.
- **A grade da home não vem do `conteudo.json`.** É a lista `GRADE_HOME` em
  `src/data/site.js`. Página nova aparece no rodapé sozinha, na home não.
- **Nada de framework client-side.** O único JavaScript é o envio do formulário
  de contato. FAQ é `<details>`, menu mobile é checkbox, lightbox é `:target`.

## Adicionar uma página de serviço

1. Um objeto novo em `src/data/conteudo.json`.
2. Um arquivo de 4 linhas em `src/pages/<slug>.astro`, cópia de qualquer outro.
3. Se for para aparecer na home, um item em `GRADE_HOME`.

Rodapé e sitemap se montam sozinhos.

## Deploy

Push na `main` → GitHub Actions faz `npm run build` e publica em GitHub Pages.
No repositório: **Settings → Pages → Source: GitHub Actions**.

Cloudflare na frente. Como o Astro põe hash no nome dos assets (`_astro/*.hash.css`),
a Cache Rule de 1 ano é segura e o **Purge Everything deixa de ser obrigatório**
a cada deploy — nome novo a cada build invalida o cache sozinho.
