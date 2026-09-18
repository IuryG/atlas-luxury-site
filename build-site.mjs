// Gera o site publicável a partir do artboard do canvas.
// O Main.dc.html continua sendo a fonte da verdade; isto aqui é só a saída
// para o navegador — e para a Vercel.
// Rodar:  node build-site.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';

const SRC = new URL('./', import.meta.url);
const OUT = new URL('./dist/', import.meta.url);
mkdirSync(OUT, { recursive: true });

/* O artboard é um quadro de canvas: o runtime do editor injeta o <helmet> no
   <head> e o support.js. Fora do canvas isso não existe, então o desembrulho
   monta uma página HTML comum com as mesmas partes. */
function unwrap(file) {
  const raw = readFileSync(new URL(file, SRC), 'utf8');
  const helmet = raw.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
  const body = raw.split('</helmet>')[1].split('</x-dc>')[0];
  return { helmet: helmet.trim(), body: body.trim() };
}

const IMAGENS = ['hero-bentley.jpg', 'car-dbs.jpg', 'car-phantom.jpg', 'car-911.jpg'];

const TITULO = 'Atlas Luxury Motors — Concessionária de alto padrão';
const DESCRICAO =
  'Landing page e identidade visual de uma concessionária de alto padrão. ' +
  'Projeto conceitual de portfólio — a Atlas Luxury não existe.';

/* A marca é fictícia e a página diz isso no rodapé, mas rodapé é o último
   lugar que alguém lê. A faixa do topo põe o aviso antes da primeira dobra. */
const AVISO_CSS = `
  .demo-flag { position: relative; z-index: 80; display: flex; align-items: center;
    justify-content: center; gap: 10px; flex-wrap: wrap; padding: 9px 20px;
    background: #141416; border-bottom: 1px solid rgba(200,162,76,0.26);
    font-family: 'Jost', 'Futura', 'Century Gothic', system-ui, sans-serif;
    font-size: 12px; line-height: 1.5; letter-spacing: 0.06em; color: #8A847A;
    text-align: center; }
  .demo-flag strong { color: #C8A24C; font-weight: 500; letter-spacing: 0.14em;
    text-transform: uppercase; font-size: 10.5px; }
`;

const AVISO_HTML = `<div class="demo-flag" role="note">
  <strong>Projeto conceitual</strong>
  <span>A Atlas Luxury n&atilde;o existe. Marca, ve&iacute;culos, pre&ccedil;os e depoimento s&atilde;o fict&iacute;cios &mdash; esta &eacute; uma pe&ccedil;a de portf&oacute;lio.</span>
</div>`;

const { helmet, body } = unwrap('Main.dc.html');

const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${TITULO}</title>
<meta name="description" content="${DESCRICAO}">
<meta property="og:title" content="${TITULO}">
<meta property="og:description" content="${DESCRICAO}">
<meta property="og:type" content="website">
${helmet}
<style>${AVISO_CSS}</style>
</head>
<body>
${AVISO_HTML}
${body}
</body>
</html>
`;

writeFileSync(new URL('index.html', OUT), html);
for (const img of IMAGENS) copyFileSync(new URL(img, SRC), new URL(img, OUT));

console.log(`dist/ gerado: index.html + ${IMAGENS.length} imagens`);
