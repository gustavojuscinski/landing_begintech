(() => {
  'use strict';
  const config = window.BEGINTECH_CONFIG || {};
  const page = document.body.dataset.page || 'home';
  const links = [
    ['home', 'Início', '/inicio'], ['sobre', 'Sobre', '/sobre'], ['servicos', 'Serviços', '/servicos'],
    ['portfolio', 'Portfólio', '/portfolio'], ['avaliacoes', 'Avaliações Google', '/avaliacoes'], ['contato', 'Contato', '/contato']
  ];
  const icon = (id, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const symbols = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-sprite" aria-hidden="true">
   <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol><symbol id="i-arrow-up" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></symbol>
   <symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M20.4 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20l1-4.6a8.5 8.5 0 1 1 16.4-3.8Z"/><path d="M8.7 8.5c.3-.4.7-.4 1-.1l1 1.4-.5 1.1c.7 1.4 1.6 2.3 3 2.9l1.1-.6 1.5 1c.3.3.3.7 0 1-2 2-7.7-2.5-7.8-5.6 0-.4.3-.8.7-1.1Z"/></symbol>
   <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8m-4-4v4"/></symbol><symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/></symbol>
   <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></symbol>
   <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 9h3v-2a6 6 0 0 0-4-5.7"/></symbol>
   <symbol id="i-gem" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9l4-6Zm-4 6h20M9 3l3 18 3-18"/></symbol><symbol id="i-zap" viewBox="0 0 24 24"><path d="m13 2-10 12h8l-1 8 11-13h-8V2Z"/></symbol>
   <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2 3 6.3 7 1-5 5 .9 7-5.9-3.2-6 3.2 1-7-5-5 7-1L12 2Z"/></symbol>
   <symbol id="i-headset" viewBox="0 0 24 24"><path d="M3 13v-2a9 9 0 0 1 18 0v2M3 13h4v7H5a2 2 0 0 1-2-2v-5Zm18 0h-4v7h2a2 2 0 0 0 2-2v-5Z"/></symbol>
   <symbol id="i-message" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h8m-8 4h5"/></symbol>
   <symbol id="i-gear" viewBox="0 0 24 24"><path d="M10 2h4l.7 2.2 2 .8 2.1-1 2.8 2.8-1 2.1.8 2L24 12l-2.6 1.1-.8 2 1 2.1-2.8 2.8-2.1-1-2 .8L14 22h-4l-.7-2.2-2-.8-2.1 1-2.8-2.8 1-2.1-.8-2L0 12l2.6-1.1.8-2-1-2.1L5.2 4l2.1 1 2-.8L10 2Z" transform="translate(2 2) scale(.82)"/><circle cx="12" cy="12" r="3"/></symbol>
   <symbol id="i-check" viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></symbol><symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 20h18M6 17v-5m5 5V8m5 9V4m5 13v-8"/></symbol>
   <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></symbol><symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2"/></symbol>
   <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol><symbol id="i-close" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19"/></symbol><symbol id="i-chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>
   <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></symbol>
   <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M14 21v-9h3l.5-4H14V6.5c0-1.5.4-2 2-2h2V1h-3c-4 0-5 2-5 5v2H7v4h3v9"/></symbol><symbol id="i-linkedin" viewBox="0 0 24 24"><path d="M4 9v12M4 3v2M10 21V9h4v2c1-2 7-3 7 3v7M10 14v7"/></symbol>
   <symbol id="i-spark" viewBox="0 0 24 24"><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/></symbol>
   </svg>`;
  const navItem = ([id, label, href]) => `<li><a class="nav-link ${page === id ? 'active' : ''}" ${page === id ? 'aria-current="page"' : ''} href="${href}">${label}</a></li>`;
  const header = `<header class="site-header" id="site-header"><div class="container nav-shell"><a class="brand" href="/inicio" aria-label="beginTECH — página inicial"><img src="../assets/logos/logo-branca.png" alt="beginTECH" width="158" height="54" /></a><nav id="main-navigation" class="navigation" aria-label="Menu principal"><ul>${links.map(navItem).join('')}</ul><a class="btn btn-primary nav-mobile-cta" href="#" data-wa="contato">${icon('whatsapp', 18)} Fale no WhatsApp ${icon('arrow', 16)}</a></nav><a class="btn btn-primary nav-desktop-cta" href="#" data-wa="contato">${icon('whatsapp', 17)} Fale no WhatsApp ${icon('arrow', 15)}</a><button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="main-navigation" aria-label="Abrir menu">${icon('menu', 27)}</button></div></header>`;
  const footer = `<footer class="site-footer"><div class="container footer-main"><div class="footer-company"><a href="/inicio"><img src="../assets/logos/logo-branca.png" alt="beginTECH" width="170" height="60" loading="lazy"></a><p>Soluções digitais para empresas<br>que querem crescer.</p><div class="social-icons"><a data-social="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${icon('instagram')}</a></div></div><div><h3>Navegação</h3><ul>${[['Início', '/inicio'], ['Sobre', '/sobre'], ['Portfólio', '/portfolio'], ['Contato', '/contato']].map(x => `<li><a href="${x[1]}">${x[0]}</a></li>`).join('')}</ul></div><div><h3>Serviços</h3><ul><li><a href="/servicos#sites">Criação de Sites</a></li><li><a href="/servicos#identidade">Identidade Visual</a></li><li><a href="/servicos#sociais">Design para Redes Sociais</a></li><li><a href="/avaliacoes">Placas de Avaliação Google</a></li></ul></div><div><h3>Contato</h3><ul class="footer-contact"><li><a href="#" data-wa="contato">${icon('whatsapp', 16)} <span data-config="telefoneExibicao"></span></a></li><li><a data-email href="#">${icon('mail', 16)} <span data-config="email"></span></a></li><li>${icon('monitor', 16)} <span data-config="localizacao"></span></li></ul></div></div><div class="container footer-bottom"><span>© <span data-current-year></span> beginTECH. Todos os direitos reservados.</span><div><a href="/privacidade">Política de Privacidade</a><i></i><a href="/termos">Termos de Uso</a></div></div></footer><a class="floating-wa" data-wa="contato" href="#" aria-label="Conversar com a beginTECH pelo WhatsApp"><span class="wa-icon">${icon('whatsapp', 26)}</span><span class="wa-text">Vamos conversar</span><span class="wa-spark" aria-hidden="true">✦</span></a>`;
  const root = document.getElementById('site-header-slot'); if (root) root.innerHTML = symbols + header;
  const ft = document.getElementById('site-footer-slot'); if (ft) ft.innerHTML = footer;
  document.querySelectorAll('[data-config]').forEach(el => { const k = el.dataset.config; el.textContent = config[k] ?? ''; });
  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
  const whatsUrl = key => 'https://wa.me/' + String(config.telefone || '').replace(/\D/g, '') + '?text=' + encodeURIComponent((config.mensagens || {})[key] || config.mensagemPadrao || 'Olá!');
  document.querySelectorAll('[data-wa]').forEach(el => { el.href = whatsUrl(el.dataset.wa); el.target = '_blank'; el.rel = 'noopener noreferrer'; });
  document.querySelectorAll('[data-social]').forEach(el => { el.href = config[el.dataset.social] || '#'; });
  document.querySelectorAll('[data-email]').forEach(el => { el.href = 'mailto:' + (config.email || ''); });
  const menu = document.getElementById('menu-toggle'), nav = document.getElementById('main-navigation');
  function closeMenu() { nav?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Abrir menu'); document.body.classList.remove('menu-open'); if (menu) menu.innerHTML = icon('menu', 27); }
  menu?.addEventListener('click', () => { const open = !nav.classList.contains('is-open'); nav.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); menu.innerHTML = icon(open ? 'close' : 'menu', 27); document.body.classList.toggle('menu-open', open); });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  const headerEl = document.getElementById('site-header'); const updateHeader = () => headerEl?.classList.toggle('is-scrolled', window.scrollY > 28); updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });
  if ('IntersectionObserver' in window) { const reveal = new IntersectionObserver((entries, observer) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: .09, rootMargin: '0px 0px -20px 0px' }); document.querySelectorAll('.reveal').forEach(el => reveal.observe(el)); } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  // Interação tátil: primeiro toque revela a prévia; segundo toque visita o projeto.
  document.querySelectorAll('[data-gbo-reveal]').forEach(screen => {
    screen.addEventListener('click', event => {
      if (window.matchMedia('(hover: none)').matches && !screen.classList.contains('is-revealed')) {
        event.preventDefault();
        screen.classList.add('is-revealed');
      }
    });
    screen.addEventListener('keydown', event => {
      if (event.key === 'Escape') { screen.classList.remove('is-revealed'); screen.blur(); }
    });
  });
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => { const filter = btn.dataset.filter; const group = btn.closest('.portfolio-filters'); group?.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); }); document.querySelectorAll('.project-card[data-category]').forEach(card => { const show = filter === 'todos' || card.dataset.category.split(' ').includes(filter); card.hidden = !show; }); }));
  document.querySelectorAll('[data-carousel]').forEach(carousel => { const track = carousel.querySelector('.carousel-track'); if (!track) return; const items = Array.from(track.children); const dots = carousel.querySelector('.carousel-dots'); let index = 0; const visible = () => window.innerWidth < 650 ? 1 : window.innerWidth < 992 ? 2 : 3; const max = () => Math.max(0, items.length - visible()); const render = () => { index = Math.min(index, max()); const gap = parseFloat(getComputedStyle(track).gap) || 16; const width = (items[0]?.getBoundingClientRect().width || 0) + gap; track.style.transform = `translateX(-${index * width}px)`; dots.innerHTML = Array.from({ length: max() + 1 }, (_, i) => `<button class="carousel-dot ${i === index ? 'active' : ''}" aria-label="Ir para posição ${i + 1}" aria-current="${i === index}"></button>`).join(''); dots.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => { index = i; render(); })); }; carousel.querySelector('[data-prev]')?.addEventListener('click', () => { index = index <= 0 ? max() : index - 1; render(); }); carousel.querySelector('[data-next]')?.addEventListener('click', () => { index = index >= max() ? 0 : index + 1; render(); }); window.addEventListener('resize', render, { passive: true }); render(); });
  document.querySelectorAll('[data-timeline]').forEach(timeline => { const items = [...timeline.querySelectorAll('.timeline-step')]; items.forEach((item, i) => item.addEventListener('click', () => { items.forEach((el, j) => { const active = i === j; el.classList.toggle('selected', active); el.setAttribute('aria-pressed', String(active)); }); })); });
  document.querySelectorAll('[data-contact-form]').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); if (!form.reportValidity()) return; const data = new FormData(form); const msg = `Olá! Gostaria de conversar com a beginTECH.\n\nNome: ${data.get('nome')}\nServiço: ${data.get('servico')}\nMensagem: ${data.get('mensagem')}`; window.open('https://wa.me/' + String(config.telefone || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer'); }));
  document.querySelectorAll('[data-lightbox]').forEach(el => el.addEventListener('click', () => { const src = el.dataset.lightbox, caption = el.dataset.caption || 'Projeto beginTECH'; let dialog = document.querySelector('#lightbox'); if (!dialog) { dialog = document.createElement('dialog'); dialog.id = 'lightbox'; dialog.className = 'project-lightbox'; dialog.innerHTML = `<button type="button" class="lightbox-close" aria-label="Fechar">×</button><img alt=""><p></p>`; document.body.append(dialog); dialog.querySelector('button').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', ev => { if (ev.target === dialog) dialog.close(); }); } dialog.querySelector('img').src = src; dialog.querySelector('img').alt = caption; dialog.querySelector('p').textContent = caption; dialog.showModal(); }));

  // Loading visual curto com revelação geométrica inspirada no portfólio.
  const pageLoader = document.getElementById('page-loader');
  if (pageLoader) {
    let loaderDismissed = false;
    const dismissLoader = () => {
      if (loaderDismissed) return;
      loaderDismissed = true;
      window.setTimeout(() => pageLoader.classList.add('is-hidden'), 320);
    };
    if (document.readyState === 'complete') {
      dismissLoader();
    } else {
      window.addEventListener('load', dismissLoader, { once: true });
    }
    window.setTimeout(dismissLoader, 850);
    window.addEventListener('pageshow', event => {
      if (event.persisted) pageLoader.classList.add('is-hidden');
    });
  }

})();
