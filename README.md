# beginTECH — website institucional

Projeto estático, responsivo, sem backend. Implementação visual baseada na imagem de Home aprovada, com páginas adicionais dentro da mesma linguagem visual.

## Começar

Abra `index.html` na pasta raiz, ou publique **todo o conteúdo desta pasta** em um servidor estático. As páginas principais estão em `/html/` e a raiz possui um redirecionamento de conveniência. Para testar em um servidor local, execute `python -m http.server 8000` na raiz do projeto e abra `http://localhost:8000`.

## Estrutura

- `html/index.html` — Home completa.
- `html/servicos.html` — Serviços detalhados.
- `html/portfolio.html` — Portfólio com filtros e ampliação.
- `html/sobre.html` — Sobre.
- `html/avaliacoes.html` — Avaliações Google e Instagram.
- `html/contato.html` — Contato com envio via WhatsApp.
- `html/privacidade.html` e `html/termos.html` — Textos institucionais iniciais, revisar antes da publicação.
- `css/style.css` — Design system, seções, animações, responsive.
- `scripts/variaveis.js` — Configurações editáveis, WhatsApp, social, e-mail.
- `scripts/main.js` — Navbar, efeitos, carrossel, filtros, modais e contatos.
- `assets/logos/` — Logotipos fornecidos pelo cliente.
- `assets/images/` — Recortes de referências visuais **extraídos da imagem aprovada**.
- `assets/fonts/` — Diretório reservado à fonte licenciada Captura Now.

## Configuração OBRIGATÓRIA antes da publicação

1. Os dados de contato já estão configurados em `scripts/variaveis.js`: WhatsApp (42) 99151-2459, e-mail contato@begintech.com.br, operação online e Instagram @begintech.solucoes. Não há links configurados para Facebook, LinkedIn ou YouTube.
2. Substitua as imagens de recorte pelos mockups originais em alta resolução, se os possuir. Algumas imagens do portfólio são **imagens referenciais do layout**, e não confirmação de trabalhos reais. Não publique como projetos reais sem autorização e validação.
3. A fonte **Captura Now não foi fornecida**. Para usá-la, obtenha a licença e coloque a fonte em `assets/fonts/CapturaNow.woff2`. O CSS já contém `@font-face`. Enquanto isso, a fonte título substituta é Manrope. Comfortaa carrega pelo Google Fonts.
4. Confirme a URL/site real para preencher canonical e metadados sociais absolutos quando houver domínio definitivo. Revise textos jurídicos para a realidade da empresa.

## Integrações

- Bootstrap 5 via CDN (não requer build).
- Google Fonts via CDN para Comfortaa e Manrope. Funciona sem internet com fontes padrão do sistema, embora a aparência varie.
- Ícones SVG embutidos; sem dependência de biblioteca de ícones.
- Links WhatsApp: `https://wa.me/NUMERO?text=MENSAGEM` (configuração no arquivo de variáveis).
- Formulário não coleta dados em servidor: valida nome, serviço e mensagem e abre o WhatsApp com o texto preenchido. Não solicita e-mail; o visitante conclui o envio no WhatsApp.

## Limitações transparentes

O projeto reproduz o layout fornecido com CSS, recortes do material visual e logotipos enviados. A fidelidade de fotografias e mockups pode ser aprimorada quando os arquivos originais dos objetos do layout estiverem disponíveis. Não há backend, e portanto não há dashboard, envio de e-mail no servidor nem persistência de leads. Para SEO de produção, configurar URL pública/canonical, sitemap específico do domínio e robots.txt após definir o domínio.


## Atualização v2 — portfólio e interações

- Portfólio com **apenas um cliente real**: GBO Representações, com captura de tela fornecida no pedido. Link do projeto: https://www.gbo26.com.br.
- Imagem do Sobre substituída por composição HD nova de 1672 × 941 px em WebP, sem interpolação da antiga miniatura.
- Botão de WhatsApp fixo, com ícone e texto “Vamos conversar”, configurado no `scripts/variaveis.js` e direcionado ao número oficial da beginTECH.
- Tipografia discretamente ampliada, padding extra nas seções e hovers de 0,27 s.
- Animações respeitam `prefers-reduced-motion`. Nenhuma biblioteca de animações adicional é necessária.
- O site usa Bootstrap via CDN; para ambiente totalmente offline, baixe o CSS do Bootstrap e altere o link em cada HTML.

## Imagem HD da seção Sobre

A Home e a página Sobre utilizam a imagem HD recém-gerada do escritório beginTECH em `assets/images/sobre-begintech-hd.webp` (1672 × 941 pixels), com o símbolo e lettering tridimensionais na parede preta. O arquivo WebP preserva a qualidade com compressão para web. O CSS limita a altura automaticamente e mantém a imagem horizontal sem cortes ou deformações.


## Atualização de responsividade e tipografia (v4)
- Tipografia aumentada moderadamente em todas as páginas, incluindo descrições, cards, menus, rodapé e botões.
- Em telas de até 767 px, mockups/imagens de composição nas seções do site ficam ocultos. Logotipos de navegação e ícones de interface permanecem visíveis.
- Os layouts, margens e grids dos blocos sem imagem são reorganizados para não deixar grandes espaços vazios.
- O portfólio GBO continua acessível por texto e link mesmo com a captura de tela oculta no celular.
- Para alterar a largura de corte para celular, ajuste `@media(max-width:767.98px)` no final de `css/style.css`.

### Portfólio — efeito de revelação hexagonal
Na Home, o notebook permanece estático. A tela começa com um fundo escuro e o símbolo B da beginTECH; passar o mouse abre a captura da GBO com uma máscara hexagonal e um traço geométrico giratório. No teclado, use Tab para destacar; em telas táteis com notebook visível, o primeiro toque revela e o segundo abre o link. A regra existente para ocultar mockups em celulares continua valendo. A animação LED dos dois cards vermelhos de diferenciais é preservada.


## Revisão de avaliações e processo (novembro 2026)
- Imagens substituídas: `google-plaque-hd.webp` (fotografia gerada em alta definição) e `google-phone-hd.svg` (arte vetorial ilustrativa).
- O QR code da imagem da placa é ilustrativo, não é um código funcional. Substitua pelo QR code real ao usar a peça comercial.
- Tipografia ampliada em todas as páginas, seções de avaliações e processo separadas por espaçamento e divisórias, linha do tempo centralizada verticalmente, primeira etapa com destaque fixo "Você está aqui".
- Foi removido o efeito de fundo ao passar o mouse nas etapas; apenas o ícone aumenta.
- Animação LED e revelação hexagonal do portfólio preservadas.


### Artes 3D nas páginas de serviços
- `assets/images/identidade-visual-3d.png`: arte transparente para Identidade Visual.
- `assets/images/redes-sociais-3d.png`: arte transparente para Design para Redes Sociais.
- Composições animadas com CSS em `css/style.css`; ocultas em telas abaixo de 768 px conforme solicitação prévia.


## Vitrines visuais 3D (Portfólio, Sobre, Avaliações)
Três novas composições conceituais em WebP animadas com CSS (flutuação, anel geométrico, pontos de luz). Os efeitos respeitam `prefers-reduced-motion`. Abaixo de 768 px as ilustrações são ocultadas, mantendo textos e ações visíveis. O portfólio continua mostrando apenas o projeto real GBO; demais ilustrações são conceituais.


## URLs amigáveis e publicação

O projeto inclui `.htaccess` para hospedagem Apache com `mod_rewrite` habilitado.
As rotas públicas são `/inicio`, `/servicos`, `/portfolio`, `/sobre`, `/avaliacoes`,
`/contato`, `/privacidade` e `/termos`. As antigas URLs `/html/*.html` redirecionam
para as URLs canônicas sem extensão. A raiz `/` redireciona para `/inicio`.

Envie o arquivo `.htaccess`, `robots.txt` e `sitemap.xml` para a raiz pública do
domínio, no mesmo nível das pastas `html`, `css`, `scripts` e `assets`.
Se a hospedagem usar Nginx em vez de Apache, será necessário replicar as regras
no bloco `server`, pois Nginx não interpreta `.htaccess`.

O loader geométrico é exibido brevemente durante a abertura de cada página e
desaparece assim que a página termina de carregar, com um limite de segurança
para não bloquear a navegação.


## Publicação na Hostinger (correção das rotas)

**Importante:** envie o CONTEÚDO desta pasta `beginTECH` diretamente para `public_html`,
não envie a pasta `beginTECH` como uma subpasta. O arquivo `.htaccess` deve ficar
exatamente em `public_html/.htaccess`, no mesmo nível das pastas `html`, `css`,
`scripts`, `assets` e das pastas de rota (`inicio`, `servicos`, etc.).

Esta versão inclui duas formas de resolução:
1. Regras `.htaccess` para reescrever `/inicio` internamente para `html/index.html`,
   mantendo a URL sem `.html` e sem alterar o endereço no navegador.
2. Pastas físicas (`/inicio/index.html`, `/servicos/index.html`, etc.) como fallback
   para ambientes de hospedagem que servem arquivos estáticos e não aplicam rewrite.

No hPanel: Sites → Gerenciar → Gerenciador de Arquivos → `public_html`.
Faça backup do `.htaccess` atual antes de substituí-lo. Se houver regras preexistentes
de HTTPS, cache ou segurança, preserve-as e acrescente as regras beginTECH sem apagar
configurações necessárias da hospedagem.

Após enviar, limpe o cache da Hostinger e teste `/inicio`, `/servicos` e `/contato`.
