# Atlas Luxury

Identidade visual e landing page de uma concessionária de alto padrão.

> **Projeto conceitual.** A Atlas Luxury não existe. Marca, endereço, telefone, CNPJ, preços, números e o depoimento são fictícios e servem só para demonstrar o trabalho — não descrevem nenhuma empresa real nem resultado real.

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `Main.dc.html` | A landing page. Fluida de 320px a 4K, é ela que responde por desktop, tablet e celular. |
| `Mobile.dc.html` | Comp da versão mobile, travada em 390px — peça de apresentação, não o site. |
| `Identity.dc.html` | Prancha de identidade: assinaturas, paleta, tipografia e elementos de interface. |
| `canvas.json` | Posiciona as três pranchas no canvas e define anotações e ponto de abertura. |
| `atlas-luxury-landing.html` | As três pranchas empacotadas num arquivo só. Abre em qualquer navegador, sem build. |
| `PRODUCT.md` | Verdade de produto: usuários, posicionamento, o que é real e o que é ficção. |
| `DESIGN.md` | O sistema de design — tokens, regras nomeadas, componentes e gramática de movimento. |
| `.impeccable/design.json` | Sidecar do DESIGN.md: rampas tonais, tokens de movimento e componentes como HTML/CSS. |
| `build-site.mjs` | Gera `dist/` a partir do `Main.dc.html`. |
| `dist/` | O site publicável. É ele que vai pro ar. |

## Rodando

Os `.dc.html` são artboards e esperam o runtime do canvas. Qualquer servidor
estático serve a pasta:

```bash
python -m http.server 5173
```

Depois abra `http://localhost:5173/Main.dc.html`. Vale rolar **devagar** a primeira tela: os três mostradores das estatísticas armam em sequência conforme você percorre o hero.

Abrir os arquivos com duplo clique (`file://`) também funciona, com dois avisos: o `support.js` dá 404 no console (é o runtime do canvas, não afeta a renderização) e as fontes do Google não carregam sem rede.

## O site

O `Main.dc.html` é a fonte da verdade; o site que vai pro ar é **gerado** a
partir dele. Editou o artboard, rode:

```bash
node build-site.mjs
```

O build desembrulha o artboard num HTML comum — `<helmet>` vira `<head>`, o
`support.js` sai —, acrescenta `<title>`, descrição e Open Graph, copia as
quatro fotos e põe no topo a faixa que avisa que a marca é fictícia. O rodapé
já dizia isso, mas rodapé é o último lugar que alguém lê.

A responsividade não é do build: ela já está no artboard, que é fluido de 320px
a 4K. Conferido em 1440, 1100, 768 e 375 — sem rolagem lateral em nenhuma.

## No ar

<https://atlas-luxury.vercel.app> — deploy a cada push na `main`.

## O sistema, em uma tela

- **Obsidiana `#0A0A0B`** como base, ocupando ~70% de qualquer tela
- **Ouro Atlas `#C8A24C`** como único acento — ação, preço, micro-rótulo, numeral
- **Bodoni Moda** diz os substantivos, **Jost** diz as instruções
- Raio zero, sombra zero: profundidade por quatro degraus de quase-preto e fio de 1px
- Figuras tabulares em todo contexto de dado — os três preços têm largura idêntica e alinham de card para card

O resto está no [DESIGN.md](DESIGN.md), incluindo as regras nomeadas que um agente deve seguir para desenhar telas novas sem sair do mundo.

## Movimento

Uma curva só no sistema inteiro (`cubic-bezier(0.22, 0.8, 0.28, 1)`), entrada de 160ms e saída de 90ms. O hero tem um momento autoral: a luz do showroom acende sobre o carro no load, e os mostradores das estatísticas leem o **progresso do leitor** via `animation-timeline: scroll()` — sem JS, sem listener, conduzido pelo compositor. Medido em 99 frames de scroll contínuo: mediana 16,7ms, p95 17,1ms, nenhum frame perdido.

`prefers-reduced-motion` remove deslocamento e entrada e para a faixa em loop, mas mantém as transições de cor — feedback que confirma ação precisa continuar legível.

## Fotografia

Quatro imagens do [Unsplash](https://unsplash.com), licença livre inclusive para uso comercial. Os nomes e as fichas dos cards seguem os carros que aparecem nas fotos: Bentley Flying Spur no hero, Aston Martin DBS, Rolls-Royce Phantom e Porsche 911.

## Estado

A landing está pronta. O case previsto tem mais quatro telas — inventário com filtros, ficha do veículo, sobre e contato — ainda não construídas.
