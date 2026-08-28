export const NEGOCIO = {
  nome: 'Santos Refrigeração',
  marca: 'Santos Refrigeração',
  site: 'https://www.santosrefricomercial.com.br',
  telefone: '(21) 96782-6279',
  telefoneE164: '+5521967826279',
  whatsapp: '5521967826279',
  cnpj: '62.899.580/0001-58',
  anos: 12,
  endereco: {
    rua: 'Av. Dom Hélder Câmara, 10229 - Cascadura',
    cidade: 'Rio de Janeiro', estado: 'RJ', cep: '21380-002', pais: 'BR',
  },
  geo: { lat: -22.8869, lng: -43.3349 },
  horario: 'Seg–Sáb · 8h às 18h',
  google: {
    perfil: 'https://g.page/r/CeLzyrBgWaOwEBM',
    review: 'https://g.page/r/CeLzyrBgWaOwEBM/review',
    maps: 'https://maps.google.com/maps?cid=12728115243696976866',
  },
};

export const MENU = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Quem somos', href: '/#sobre' },
  { label: 'Área de atendimento', href: '/#area' },
  { label: 'Cascadura', href: '/refrigeracao-cascadura.html' },
  { label: 'Contato', href: '/contato.html' },
];

export const AREAS = ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'São João de Meriti', 'Nilópolis'];

// Grade da home: um card por equipamento. Subserviços como links reais dentro
// do card — é o que mantém as páginas filhas a um clique da home.
// ATENÇÃO: esta grade NÃO sai do conteudo.json. Página nova não aparece aqui
// sozinha; o rodapé sim, esse lê os dados.
export const GRADE_HOME = [
  ['/assets/icon-p-camara.webp', 'Câmara fria', 'Instalação e manutenção de câmara fria e frigorífico comercial.', '/camara-fria.html'],
  ['/assets/icon-p-chopeira.webp', 'Chopeiras', 'Manutenção e instalação de chopeira, com higienização do sistema de tiragem.', '/chopeiras.html'],
  ['/assets/icon-p-gela-caneca.webp', 'Gela Caneca', 'Manutenção e conserto de gela caneca para o seu bar.', '/gela-caneca.html'],
  ['/assets/icon-p-ar.webp', 'Ar condicionado', 'Ar condicionado comercial e residencial: instalação, manutenção e higienização.', '/ar-condicionado.html', [
    ['Instalação', '/instalacao-ar-condicionado.html'],
    ['Manutenção', '/manutencao-ar-condicionado.html'],
    ['Higienização', '/higienizacao-ar-condicionado.html'],
    ['Tubulação', '/tubulacao-ar-condicionado.html'],
  ]],
  ['/assets/icon-p-geladeira.webp', 'Geladeira', 'Conserto e manutenção de geladeira e refrigerador comercial e industrial.', '/geladeira-comercial.html', [
    ['Geladeira comercial', '/geladeira-comercial.html'],
    ['Conserto de geladeira', '/conserto-de-geladeira.html'],
  ]],
  ['/assets/icon-balcao-foto.webp', 'Balcão refrigerado', 'Conserto e manutenção de balcão refrigerado e expositor.', '/balcao-refrigerado.html'],
  ['/assets/icon-p-ilha.webp', 'Ilha de congelados', 'Conserto e manutenção de ilha de congelados e expositor.', '/ilha-de-congelados.html'],
  ['/assets/icon-p-ultra-freezer.webp', 'Ultra freezer', 'Conserto e manutenção de ultra freezer e equipamento de baixa temperatura.', '/ultra-freezer.html'],
  ['/assets/icon-p-refresqueira.webp', 'Refresqueira', 'Conserto e manutenção de refresqueira para lanchonete, comércio e evento.', '/refresqueira.html'],
  ['/assets/icon-p-maquina-gelo.webp', 'Máquina de gelo', 'Conserto e manutenção de máquina de gelo.', '/maquina-de-gelo.html'],
  ['/assets/icon-p-adega.webp', 'Adega climatizada de vinhos', 'Manutenção e instalação de adega climatizada de vinhos.', '/adega-vinhos.html'],
];

export const wa = (msg) =>
  'https://wa.me/' + NEGOCIO.whatsapp + '?text=' + encodeURIComponent(msg);
