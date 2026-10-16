/** Feed RSS do blog, gerado no build a partir de src/data/blog.json (sem dependência extra). */
import blog from '../data/blog.json';
import { NEGOCIO } from '../data/site.js';

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const data = (iso) => new Date(iso + 'T12:00:00-03:00').toUTCString();

export function GET() {
  const posts = Object.values(blog).sort((a, b) => b.published.localeCompare(a.published));
  const itens = posts.map((p) => {
    const url = NEGOCIO.site + '/blog/' + p.slug + '.html';
    return '<item><title>' + esc(p.title) + '</title><link>' + url + '</link><guid isPermaLink="true">' + url + '</guid><pubDate>' + data(p.published) + '</pubDate><category>' + esc(p.category) + '</category><description>' + esc(p.excerpt || p.metaDescription) + '</description></item>';
  }).join('');
  const xml = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Blog — ' + esc(NEGOCIO.nome) + '</title><link>' + NEGOCIO.site + '/blog.html</link><atom:link href="' + NEGOCIO.site + '/rss.xml" rel="self" type="application/rss+xml"/><description>Guias para identificar o problema do equipamento de refrigeração comercial e saber quando chamar o técnico.</description><language>pt-BR</language>' + (posts[0] ? '<lastBuildDate>' + data(posts[0].updated || posts[0].published) + '</lastBuildDate>' : '') + itens + '</channel></rss>';
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
