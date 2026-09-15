---
name: Atlas Luxury
description: Showroom à meia-luz — campo obsidiana, uma única voz dourada, forma reta e sem sombra.
colors:
  obsidiana: "#0A0A0B"
  breu: "#0D0E11"
  grafite: "#121317"
  carbono: "#1A1C21"
  poco: "#08080A"
  ouro-atlas: "#C8A24C"
  champagne: "#E6D2A8"
  marfim: "#F4F1EA"
  cinza-nav: "#B9B5AC"
  nevoa: "#9A968D"
  nevoa-funda: "#8C887F"
  ficha: "#7E7A72"
  rotulo: "#6E6A62"
  marquise: "#5E5A52"
  legal: "#57534B"
  filete: "#3A3833"
typography:
  display:
    fontFamily: "'Bodoni Moda', Didot, Georgia, serif"
    fontSize: "clamp(40px, 5.8vw, 84px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "'Bodoni Moda', Didot, Georgia, serif"
    fontSize: "clamp(30px, 3.6vw, 52px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "'Bodoni Moda', Didot, Georgia, serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "'Jost', 'Futura', 'Century Gothic', system-ui, sans-serif"
    fontSize: "clamp(15px, 1.2vw, 16.5px)"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Jost', 'Futura', 'Century Gothic', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.30em"
rounded:
  none: "0"
spacing:
  hairline: "1px"
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  gutter: "clamp(20px, 4.4vw, 64px)"
  section: "clamp(64px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.ouro-atlas}"
    textColor: "{colors.obsidiana}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.obsidiana}"
  button-ghost:
    textColor: "{colors.marfim}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-ghost-hover:
    textColor: "{colors.champagne}"
  nav-link:
    textColor: "{colors.cinza-nav}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.champagne}"
  card-vehicle:
    backgroundColor: "{colors.grafite}"
    textColor: "{colors.marfim}"
    rounded: "{rounded.none}"
    padding: "26px"
  badge-reserved:
    textColor: "{colors.ouro-atlas}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
---

# Design System: Atlas Luxury

## Overview

**Creative North Star: "Showroom à meia-luz"**

O sistema se comporta como um showroom depois do expediente. O salão está escuro; uma luz dirigida por vez acende sobre o que importa, e tudo o mais permanece em sombra. É por isso que o fundo é obsidiana quase absoluta, que o dourado aparece poucas vezes por tela, e que as fotografias não entram como retângulo recortado: elas se dissolvem no escuro pelas bordas, como carroceria saindo do cone de luz.

A densidade é baixa e deliberada. Respiro largo entre seções (até 112px verticais), medida de texto curta (470–620px) e hierarquia construída por contraste de peso, não por quantidade de elementos. A superfície não tem relevo: nenhum canto arredondado, nenhuma sombra em todo o projeto. A profundidade é feita de quatro valores de quase-preto empilhados e de um fio de 1px — o mesmo recurso de uma vitrine bem feita, onde o que separa dois planos é a diferença de luz, não uma borda.

A personalidade vem do par tipográfico: uma didone de alto contraste dizendo os substantivos — nomes de carro, preços, títulos — e uma geométrica de traço fino dizendo as instruções. O sistema é institucional sem ser frio: o ouro é envelhecido, não metálico, e o branco é marfim, não branco de tela.

**Key Characteristics:**
- Campo obsidiana ocupando a maior parte de qualquer tela, com quatro degraus de quase-preto como única fonte de profundidade
- Um único acento — ouro envelhecido — reservado a ação, preço e micro-rótulo
- Forma totalmente reta em repouso: zero raio, zero sombra — o movimento vive nos estados, nunca na forma parada
- Didone para substantivo, geométrica para instrução; nunca o inverso
- Tracking invertido: quanto maior o texto, mais apertado; quanto menor, mais espaçado
- Fotografia mascarada em gradiente, nunca emoldurada
- Ícones sempre em traço, nunca preenchidos; nenhum emoji
- Figuras tabulares em todo contexto de dado: preço, ficha e estatística alinham dígito a dígito
- O hero lê o progresso do leitor como um painel de instrumentos, não como um relógio

## Colors

Uma paleta de quase-pretos mornos com um único acento dourado e uma escada longa de cinzas esverdeados para texto — o contraste é construído por luminosidade, quase nunca por matiz.

### Primary
- **Ouro Atlas** (`#C8A24C`): o único acento do sistema, e de longe o valor mais frequente depois dos neutros. Vive em: botão primário (fundo), preço, micro-rótulo de seção em caixa-alta, numerais de etapa (01–04), fio de 1px sob títulos, ícones em traço, aspas da citação e a segunda linha do título do hero. É ouro envelhecido, não metálico — nunca acompanha gradiente dourado nem brilho.
- **Champagne** (`#E6D2A8`): a resposta ao toque. Aparece exclusivamente em hover de link e de botão, e em uma palavra de destaque por seção. Nunca em repouso, nunca em área ampla.

### Neutral
- **Obsidiana** (`#0A0A0B`): a base. Fundo do hero, das seções de serviços, processo e CTA. Ocupa cerca de 70% de qualquer tela.
- **Breu** (`#0D0E11`): a seção alternada — coleção e citação. Um degrau acima da base, quase imperceptível isolado, decisivo em sequência.
- **Grafite** (`#121317`): superfície de card. Todo card de serviço e de veículo assenta neste valor. É a superfície normativa do sistema.
- **Carbono** (`#1A1C21`): a superfície de card **em hover**. Grafite é o repouso, Carbono é a resposta — um degrau tonal em vez de sombra. Resolve a divergência antiga: a prancha de identidade o listava como superfície e a landing não o usava; agora ele tem função própria.
- **Poço** (`#08080A`): o rodapé, e só ele. O degrau mais escuro da escada, abaixo da própria base — a página termina afundando, não clareando.
- **Marfim** (`#F4F1EA`): texto primário e títulos. Branco morno, dessaturado; nunca `#FFF`.
- **Cinza-nav** (`#B9B5AC`): links do menu em repouso.
- **Névoa** (`#9A968D`): corpo de texto e subtítulos — o cinza de leitura.
- **Névoa funda** (`#8C887F`): corpo dentro de card, um degrau abaixo do texto de seção.
- **Ficha** (`#7E7A72`): especificação técnica dos veículos e links de rodapé.
- **Rótulo** (`#6E6A62`): micro-rótulo neutro sob numeral e legenda de swatch.
- **Marquise** (`#5E5A52`): a faixa em loop. Escuro o bastante para ser textura, não leitura.
- **Legal** (`#57534B`): copyright e links jurídicos.
- **Filete** (`#3A3833`): o separador `|` entre especificações. Não é texto, é pontuação gráfica.

### Named Rules
**The One Voice Rule.** Existe um acento e apenas um. Ouro Atlas cobre no máximo 10% de qualquer tela; nenhuma tela futura introduz uma segunda cor de destaque — nem verde de "disponível", nem vermelho de "vendido". Estado se comunica por texto, fio ou opacidade.

**The Champagne-Only-On-Touch Rule.** `#E6D2A8` não existe em repouso. Se ele aparece numa tela estática, é erro.

**The Warm Black Rule.** Nenhum preto puro, nenhum branco puro. Todo neutro carrega matiz morno; `#000` e `#FFF` estão fora do sistema.

## Typography

**Display Font:** Bodoni Moda (fallback Didot, Georgia, serif)
**Body Font:** Jost (fallback Futura, Century Gothic, system-ui, sans-serif)

**Character:** uma didone de contraste extremo contra uma geométrica de traço uniforme. A didone traz a autoridade de catálogo impresso; a geométrica traz a neutralidade de painel de instrumento. O atrito entre as duas é o que dá idade à marca sem deixá-la antiquada. Pesos usados: 300, 400 e 500 — nada acima.

### Hierarchy
- **Display** (400, `clamp(40px, 5.8vw, 84px)`, 1.04, `-0.012em`): título do hero, em duas linhas — a primeira em Marfim, a segunda em itálico e Ouro Atlas. Um por página.
- **Headline** (400, `clamp(30px, 3.6vw, 52px)`, 1.1): título de seção. Sempre precedido por um micro-rótulo em caixa-alta.
- **Title** (400, 21–22px, 1.2): nome de veículo, título de card de serviço, item de etapa.
- **Body** (300, `clamp(15px, 1.2vw, 16.5px)`, 1.75): parágrafos. Entrelinha 1.75 em seção, 1.7 dentro de card. Medida entre 470px (subtítulo do hero) e 620px (texto de etapa); nunca a largura total do container.
- **Label** (400, 11px, `0.30em`, caixa-alta): micro-rótulo de seção, sempre em Ouro Atlas. A variante de interface — botão e menu — usa 11.5–12.5px com `0.18em`.
- **Numeral** (Bodoni 400, `clamp(32px, 3vw, 42px)`, entrelinha 1): estatísticas do hero e numerais de etapa. O sufixo (`+`, `%`) sempre em Ouro Atlas enquanto o número fica em Marfim — o dado é neutro, a unidade é da marca.

### Named Rules
**The Two Voices Rule.** Bodoni diz substantivo: nome, número, título, citação. Jost diz instrução: rótulo, corpo, botão, menu. Um botão em Bodoni ou um título de seção em Jost quebra o sistema, mesmo que fique bonito isolado.

**The Tracking Inversion Rule.** Quanto maior o texto, mais apertado o tracking (`-0.012em` no display); quanto menor, mais aberto (`0.30em` no rótulo de 11px). Texto pequeno sem tracking largo lê como erro de implementação neste sistema.

**The Italic-Is-A-Turn Rule.** O itálico da didone marca a virada de sentido — a segunda linha do hero, a citação — e nada mais. Não é ênfase de uso livre.

**The Instrument Figures Rule.** Todo contexto de dado — preço, ficha técnica, quilometragem, estatística, numeral de etapa — usa `font-variant-numeric: tabular-nums lining-nums`. Os três preços da coleção têm 7 dígitos e por isso medem exatamente a mesma largura, alinhando de card para card. Texto corrido fica com figuras proporcionais: tabular em prosa piora o ritmo.

## Layout

A landing é full-bleed: não existe container centralizado com largura máxima. Cada seção ocupa 100% da largura e respira por gutter fluido de `clamp(20px, 4.4vw, 112px)` — o teto alto evita que o conteúdo encoste na borda acima de 1454px; o texto é contido por medida de leitura, não por wrapper. A prancha de identidade é a exceção, com `max-width: 1240px` centralizado, porque é documento, não página.

Ritmo vertical por `clamp(64px, 8vw, 112px)` em cima e embaixo de cada seção, com o hero calculado por conteúdo em vez de altura fixa. Dentro das seções: grade de 4 colunas (gap 20px) para serviços, 3 colunas (gap 24px) para veículos, e uma grade assimétrica de `490px + 1fr` para o processo — coluna de argumento à esquerda, lista numerada à direita.

Três quebras, nesta ordem de eventos. Em **1180px** a fotografia do hero sai do posicionamento absoluto e entra no fluxo abaixo do texto, a grade de serviços cai de 4 para 2 colunas, o processo vira coluna única e o rodapé cai para 2. Em **1080px** o menu vira hambúrguer e a grade de veículos cai de 3 para 2. Em **620px** tudo vira coluna única, o CTA do topo some, os botões ocupam a largura total, o eyebrow encolhe para caber em uma linha e a faixa de estatísticas vira grade de 3 colunas com filete em `border-left`.

Alvo de toque: em `pointer: coarse` os links de rodapé e o CTA de card recebem `min-height: 44px`. É consulta de ponteiro, não de largura — quem usa mouse mantém a densidade.

**Impressão.** A página tem folha própria: fundo branco, tinta `#14140F`, ouro rebaixado para bronze `#7A5F25` (o Ouro Atlas não sobrevive em papel), navegação / faixa / botões ocultos, grades em 2 colunas e `break-inside: avoid` nos cards. Um carro de sete dígitos é impresso ou virado em PDF antes de ser decidido.

**The No-Container Rule.** Nada de `margin: 0 auto` com largura máxima na página de marketing. A largura é da tela; o conforto de leitura vem da medida do parágrafo.

**The Four-Width Rule.** Uma tela só está pronta depois de verificada em 1440, 1100, 768 e 390. Scroll horizontal em qualquer uma delas é defeito, não ajuste fino.

## Elevation & Depth

O sistema não tem sombra. Zero `box-shadow` em todo o projeto, e isso é invariante, não omissão. A profundidade é inteiramente tonal: quatro degraus de quase-preto (`#08080A` → `#0A0A0B` → `#0D0E11` → `#121317`) mais um fio de 1px, que aparece em três opacidades conforme a função — `rgba(244,241,234,0.07)` para divisor estrutural, `rgba(244,241,234,0.08)` para divisor interno de card, e `rgba(200,162,76,0.14–0.28)` quando a separação precisa pertencer à marca.

Acima disso há duas camadas atmosféricas que fazem o trabalho que a sombra faria: gradientes radiais de ouro a 10–22% de opacidade posicionados como fonte de luz (canto inferior direito no hero, base nas seções de citação e CTA), e uma camada de grão em `feTurbulence` a 5% com `mix-blend-mode: overlay`. É o grão que impede o campo escuro de virar chapado digital.

### Named Rules
**The Square Field Rule.** Repouso é plano e reto. Nenhum elemento nasce elevado.

**The Black-Shadow-Is-Invisible Rule.** Sobre obsidiana, sombra preta não faz nada — só suja. Quando um elemento precisar responder ao toque com elevação, ele responde com brilho quente (`0 0 0 1px` em Ouro Atlas, ou glow dourado de baixa opacidade) ou com o fio clareando, nunca com `box-shadow` neutro.

## Shapes

Raio zero em todo o sistema — botão, card, badge, campo, avatar de ícone. Não existe uma exceção sequer no código atual, e essa é a assinatura mais frágil do sistema: um único `border-radius: 8px` numa tela futura denuncia que a peça foi montada por outra mão.

A forma é construída por retângulo e por fio. O contorno de 1px substitui o preenchimento sempre que possível: botão secundário é retângulo vazado, badge "RESERVADO" é retângulo vazado, quadrado social é retângulo vazado de 44px. Ícones seguem a mesma lógica — grade de 24px, traço de 1.25px, nunca preenchidos.

O sistema admite exatamente duas geometrias não-retangulares, e as duas são instrumentos: o **escudo** do símbolo e o **bezel circular do mostrador** no hero. Nenhuma terceira. É por serem contadas que elas funcionam — um card arredondado no meio disso destruiria as duas.

**The No-Radius Rule.** `border-radius` é zero. Sem exceção, em qualquer tela, para qualquer componente.

**The Hairline-Over-Fill Rule.** Quando um elemento precisa de limite, ele ganha fio de 1px, não preenchimento. Preenchimento sólido é privilégio do botão primário.

## Components

O tato é **tátil e confiante**: o elemento responde com peso, por mudança de cor e deslocamento mínimo, dentro da forma reta. Os estados abaixo estão implementados.

**Gramática de movimento.** Uma única curva no sistema inteiro — `--ease-atlas: cubic-bezier(0.22, 0.8, 0.28, 1)`. Entrada 160ms, saída 90ms no `:active` (saída mais lenta que entrada lê como latência). Deslocamento de hover nunca passa de 1px no eixo Y. Só `transform`, `opacity` e cor entram em transição: nenhuma propriedade que dispare layout, nenhum blur, nenhum `box-shadow`.

**A luz do showroom é a única metáfora de movimento.** No load, o brilho dourado do hero sobe de 0 em 1400ms, o fio do eyebrow se desenha em `scaleX` e um facho em gradiente atravessa a foto uma vez, em diagonal de 104°, saindo do quadro. A mesma luz reaparece, em 900ms, quando o ponteiro entra num card de veículo. Nada mais no sistema tem direito a esse gesto.

**Entrada de conteúdo.** Reservada a conteúdo que chega como lista: os dois cabeçalhos de seção e os cards (4 serviços, 3 veículos), em `animation-timeline: view()` com stagger limitado. Processo, citação, CTA e rodapé não têm entrada — revelar toda seção por fade é dívida de animação. Tudo atrás de `@supports`: sem suporte, o conteúdo nasce visível.

**Movimento reduzido.** `prefers-reduced-motion` remove deslocamento, facho e entrada, e para a faixa em loop — mas mantém as transições de cor, porque feedback que confirma ação precisa continuar legível.

### Buttons
- **Shape:** retângulo puro (raio 0), altura 54px no corpo da página e 46px no CTA do menu.
- **Primary:** fundo Ouro Atlas, texto Obsidiana, peso 500, 12.5px, tracking `0.18em`, caixa-alta, padding lateral 30–32px, com seta de 16px em traço à direita.
- **Ghost:** fundo transparente, fio `rgba(244,241,234,0.22)`, texto Marfim, mesma altura e tipografia. O ícone dentro dele é Ouro Atlas mesmo com o texto em Marfim.
- **Hover / Focus:** primário clareia para Champagne, sobe 1px e a seta avança 4px; ghost leva o fio a ouro a 70% e o texto a Champagne. 160ms na entrada, 90ms no `:active`. Foco visível em fio Ouro Atlas com offset de 4px.
- **Largura:** abaixo de 620px todo botão ocupa 100% da largura e centraliza o conteúdo.

### Cards / Containers
- **Corner Style:** raio 0.
- **Background:** Grafite (`#121317`) sobre seção Obsidiana ou Breu.
- **Border:** 1px. Card de serviço usa fio dourado a 14% de opacidade; card de veículo usa fio neutro a 8% — a diferença é intencional: o serviço é argumento da marca, o veículo é produto.
- **Shadow Strategy:** nenhuma. Ver Elevation & Depth.
- **Internal Padding:** 26–36px, reduzindo por `clamp` em telas menores.
- **Card de veículo (componente de assinatura):** painel de imagem de altura `clamp(190px, 17vw, 236px)` com a foto em `object-fit: cover`, sobreposta por gradiente escuro de 10%→55% de cima para baixo e pela camada de grão. Abaixo: nome em Bodoni 21px e preço em Bodoni 19px Ouro Atlas na mesma linha de base; linha de especificação em 12px separada por `|` na cor Filete; fio divisor; e rodapé com "VER DETALHES →" em Ouro Atlas de um lado e ano/quilometragem em Rótulo do outro. O badge "RESERVADO" fica no canto superior esquerdo, vazado em Ouro Atlas sobre fundo `rgba(10,10,11,0.55)`.

### Navigation
- **Style:** barra de 92px com fio inferior a 7% de opacidade, sem fundo próprio — a nav flutua sobre a atmosfera do hero.
- **Typography:** 12px, tracking `0.18em`, caixa-alta, Cinza-nav.
- **Hover:** Champagne. O item ativo recebe fio de 1px em Ouro Atlas sob o texto, não mudança de peso.
- **Mobile:** abaixo de 1080px os links somem e entra um hambúrguer de duas linhas assimétricas — a de cima 26px em Marfim, a de baixo 18px em Ouro Atlas. A assimetria é proposital e é a assinatura do menu; não substituir por três linhas iguais.

### Imagery
- **Tratamento:** fotografia escura, noturna ou de meia-luz, sempre em carro escuro. Nenhuma imagem entra como retângulo nítido.
- **No hero:** máscara de gradiente em dois eixos (`mask-image` composto por `intersect`), dissolvendo a foto por esquerda, topo e base até transparente — a carroceria emerge do campo em vez de ser colada sobre ele.
- **Em card:** `object-fit: cover` sob gradiente escuro e grão, para que a legenda e o badge permaneçam legíveis sobre qualquer foto.

### Painel de instrumentos (componente de assinatura)

O momento autoral do hero. As três estatísticas ganham mostrador: um bezel de 12 ticks (círculo `r=17` com `stroke-dasharray` normalizado por `pathLength=100`) em ouro a 22%, e dentro dele um arco de 1,3px em Ouro Atlas com `pathLength=100`.

- **Repouso é marcha lenta, não zero:** `stroke-dashoffset: 88` — 12% preenchido, como um cluster com a chave na posição de contato. É isso que faz o fallback estático parecer intencional.
- **A escala é o leitor, não o relógio:** `animation-timeline: scroll(root block)` conduz os arcos de 88 a 0 ao longo da primeira tela, em sequência — `0 40vh`, `18vh 72vh`, `40vh 100vh`. Nenhum arco representa o valor da estatística; isso seria dado inventado.
- **A foto acompanha:** opacidade 0,78 → 1 e escala 1 → 1,035 na faixa `0 85vh`.
- **A régua do hero** mede a página inteira: trilho de 1px em ouro a 10% no rodapé do bloco, com preenchimento em `scaleX` na `animation-range: normal`.
- **Custo:** zero JS, zero listener; o compositor conduz. Medido em 99 frames de scroll contínuo: mediana 16,7ms, p95 17,1ms, máximo 17,6ms — nenhum frame perdido.
- **No mobile** o mostrador empilha acima do numeral (22px em vez de 26px). Abaixo de 620px a faixa mede 99px de altura.

### Superfícies do navegador

O que o navegador desenha também pertence ao sistema.

- **Barra de rolagem:** `color-scheme: dark`, trilho Obsidiana, polegar em ouro a 32% que sobe para 62% em hover.
- **Seleção de texto:** `::selection` em ouro a 28% com texto Marfim.
- **Foco de teclado:** `outline: 1px solid #C8A24C` com `outline-offset: 4px`. Nunca o anel padrão do navegador. Os botões são `div` de maquete e carregam `role="button"` e `tabindex="0"` para que o caminho de teclado exista.

### Faixa em loop (componente de assinatura)
Faixa de 66px com fio dourado a 16% em cima e embaixo, fundo Breu, texto em Bodoni 17px com tracking `0.30em` na cor Marquise, separado por bullets em Ouro Atlas, deslizando 50% em 34s em `linear` e loop infinito. É o único movimento contínuo do sistema; tudo mais é entrada única.

## Do's and Don'ts

### Do:
- **Do** manter Ouro Atlas em no máximo 10% da tela e usá-lo para ação, preço, micro-rótulo e numeral de etapa.
- **Do** abrir toda seção com micro-rótulo de 11px em caixa-alta com tracking `0.30em` antes do título.
- **Do** construir profundidade empilhando `#0A0A0B`, `#0D0E11` e `#121317` com fio de 1px entre planos.
- **Do** dissolver fotografia por máscara de gradiente ou cobri-la com gradiente escuro; ela tem que pertencer ao campo.
- **Do** desenhar ícone em traço de 1.25px sobre grade de 24px.
- **Do** limitar parágrafo a 470–620px de medida mesmo com a seção em largura total.
- **Do** verificar toda tela em 1440, 1100, 768 e 390 antes de considerá-la pronta.
- **Do** usar figuras tabulares em preço, ficha, quilometragem e estatística — e só nesses lugares.
- **Do** manter uma única curva de easing (`--ease-atlas`) e saída mais rápida que entrada.
- **Do** deixar todo estado parado bonito sozinho: o mostrador descansa em 12%, nunca em zero.

### Don't:
- **Don't** usar `border-radius`. Em nenhum componente, em nenhuma tela.
- **Don't** usar `box-shadow` neutro — sobre obsidiana ele não aparece e só suja o campo.
- **Don't** introduzir uma segunda cor de acento, inclusive verde de disponibilidade ou vermelho de urgência.
- **Don't** usar `#000` ou `#FFF`; todo neutro do sistema é morno.
- **Don't** compor botão em Bodoni nem título de seção em Jost.
- **Don't** usar ícone preenchido, ícone de biblioteca colorido ou emoji em qualquer lugar da marca.
- **Don't** colocar foto clara, diurna ou de carro claro — o sistema inteiro assume meia-luz.
- **Don't** centralizar a página num container de largura máxima; a landing é full-bleed por definição.
- **Don't** usar itálico como ênfase genérica; ele marca virada de sentido e nada mais.
- **Don't** revelar seção inteira por fade ao rolar. Entrada é só para conteúdo que chega como lista.
- **Don't** transicionar propriedade que dispara layout (`width`, `height`, `top`, `left`, `margin`).
- **Don't** fazer um mostrador representar o valor da estatística — o arco mede o progresso do leitor, não o dado.
- **Don't** introduzir uma terceira geometria circular. São duas: o escudo e o bezel.
