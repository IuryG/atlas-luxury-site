# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML/CSS estático, sem framework e sem build — decisão do usuário em 14/09/2026. O alvo é um site publicável em host estático. Deploy e domínio ainda não decididos.

Hoje o código vive como artboards `.dc.html` publicados num canvas do Claude Design. A conversão para um projeto estático publicável ainda não foi feita.

## Users

Duas camadas, e as duas pesam nas decisões:

1. **Visitante fictício da Atlas Luxury** — comprador de carro de alto padrão em São Paulo, avaliando uma compra de sete dígitos. Chega desconfiado de procedência e quer saber com quem está falando antes de entregar o contato. É para ele que a copy e a hierarquia da página são escritas.
2. **Avaliador real da peça** — dono de negócio procurando quem faça o site dele, vendo o Atlas como amostra do trabalho do usuário. Ele não avalia o carro: avalia o acabamento, e decide se contrata.

## Product Purpose

Peça de portfólio: uma marca fictícia de concessionária de luxo — identidade visual e site — construída para demonstrar capacidade de identidade e execução de UI a clientes diretos. Sucesso é um cliente em potencial abrir o link, reconhecer o nível de acabamento e procurar o usuário.

## Positioning

**Da marca fictícia:** a Atlas não vende estoque, vende procedência. Curadoria fechada (menos de um em cada dez carros avaliados entra no showroom), laudo de 137 pontos entregue junto da proposta, um gestor único do primeiro contato à entrega, garantia própria de 12 meses. Uma concessionária vizinha não conseguiria copiar a afirmação sem manter o mesmo processo.

**Da peça:** portfólio com link que abre e funciona em qualquer tela, não print de Figma.

## Operating Context

- Diretório de trabalho: `D:\claude_acesso\atlas-luxury`. Não é repositório git.
- Três artboards: `Main.dc.html` (desktop), `Mobile.dc.html` (390px), `Identity.dc.html` (identidade). `canvas.json` posiciona os três e define anotações e ponto de abertura.
- Canvas publicado em `https://claude.ai/code/artifact/30c54ace-abb0-4da5-9136-a0890b5b0525`. Salvar de dentro dele republica a versão para todos com o link.
- Pré-visualização local: servidor estático na porta 5173 sobre a pasta do projeto (entrada `atlas-luxury` em `../.claude/launch.json`).
- No canvas as imagens entram em base64 dentro do próprio arquivo, porque a CSP do artifact bloqueia imagem externa. Num site estático publicado essa restrição deixa de existir.

## Capabilities and Constraints

- **Escopo alvo (case completo):** landing, inventário com filtros, ficha do veículo, sobre e contato. Hoje existe só a landing, em duas versões.
- **Idioma:** pt-BR, confirmado pelo público (clientes diretos no Brasil). Termos em inglês onde o mercado usa — test drive, showroom, concierge.
- **Divulgação de ficção:** a página deve trazer uma linha discreta identificando projeto conceitual / marca fictícia. Texto exato ainda não definido.
- **Reuso:** peça única, feita à mão. Não há obrigação de abstrair em tokens ou componentes genéricos; a decisão foi priorizar o limite visual desta peça sobre o reaproveitamento futuro.
- Sem backend, sem formulário funcional, sem CMS. Os CTAs são de demonstração.

## Brand Commitments

- Nome fixo: **Atlas Luxury** (definido pelo usuário; "Atlas Luxury Motors" aparece no rodapé).
- O usuário forneceu uma imagem de referência de landing de concessionária de luxo como ponto de partida — é a referência vinculante da direção.
- `C:\Users\iuryo\OneDrive\Desktop\parametros_sites_ia\parametros_sites.md` é a regra da casa para qualquer site do usuário e deve ser lido antes de trabalhar aqui. Inclui a regra de responsividade obrigatória: conferir em 1440/1100/768/390, zero scroll horizontal, alvo de toque nunca abaixo de 44px.
- O sistema visual já construído — paleta, tipografia, símbolo, componentes — existe no código e **não está documentado**. É lacuna de documentação, não deste arquivo.

## Evidence on Hand

**Reais.** Quatro fotos do Unsplash, licença livre inclusive para uso comercial, no diretório do projeto: `hero-bentley.jpg` (Bentley Flying Spur), `car-dbs.jpg` (Aston Martin DBS), `car-phantom.jpg` (Rolls-Royce Phantom), `car-911.jpg` (Porsche 911). Os nomes e fichas dos cards seguem os carros que aparecem nas fotos.

**Fictícios.** Nunca apresentar como resultado real do usuário nem como fato sobre uma empresa existente: os números do hero (18 anos, 640 carros entregues, 97% de clientes recorrentes); o processo (137 pontos, 19 dias médios até a entrega); preços, anos e quilometragens dos três veículos; endereço (Av. Europa, 1200), telefone, e-mail e o CNPJ, que fica marcado como `[00.000.000/0001-00]`; e o depoimento assinado "Ricardo Salgado".

**Ausências.** Não existe cliente real, métrica real, depoimento real nem contrato. Trabalho futuro não deve inventar mais nenhum, nem converter os fictícios em afirmação sobre o usuário.

## Product Principles

1. **A ficha técnica é a copy.** Nesse mercado procedência documentada vende mais que adjetivo: número específico e verificável no lugar de "excelência".
2. **Uma ação primária por tela, repetida.** Falar com um consultor, agendar a visita. CTAs concorrentes na mesma dobra enfraquecem os dois.
3. **A peça é julgada pelo acabamento, não pelo conceito.** O avaliador real é um cliente, não um júri de design — um defeito de alinhamento custa mais do que uma ideia ousada rende.
4. **Ficção assumida, nunca disfarçada.** Dado inventado fica plausível e interno à marca, e a página diz que é conceito.
5. **Toda tela nasce fluida.** Responsividade aqui é requisito de entrega, não refinamento posterior.

## Accessibility & Inclusion

Nenhum padrão formal (WCAG AA ou equivalente) foi estabelecido como requisito deste produto. Valem as regras do arquivo de parâmetros: responsividade obrigatória nas quatro larguras e alvo de toque nunca abaixo de 44px.
