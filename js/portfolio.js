/* ============================================================
   Portfolio JS — Renan Oliveira 2026
   Vanilla JS | GitHub API | Typewriter | Dark/Light Mode
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     INTERNATIONALISATION (PT / EN)
  ---------------------------------------------------------- */
  var I18N = {
    phrases: {
      pt: [
        'Desenvolvedor Python & RPA',
        'Desenvolvedor Python',
        'Especialista em RPA',
        'Automação SAP & APIs',
        'IA com Ollama & Gemini',
        'Desenvolvedor Backend'
      ],
      en: [
        'Python & RPA Developer',
        'Python Developer',
        'RPA Specialist',
        'SAP & API Automation',
        'AI with Ollama & Gemini',
        'Backend Developer'
      ]
    },
    strings: {
      pt: {
        'nav.home': 'Inicio', 'nav.about': 'Sobre', 'nav.skills': 'Habilidades',
        'nav.experience': 'Experiencia', 'nav.projects': 'Projetos',
        'nav.education': 'Formacao', 'nav.contact': 'Contato',
        'hero.badge': 'Disponivel para novas oportunidades',
        'hero.bio': 'Desenvolvedor Pleno no <strong>Grupo Patrimar</strong> com foco em automacao inteligente. Desenvolvo solucoes em Python para RPA, APIs e IA que eliminam processos manuais, integram sistemas corporativos e escalam operacoes empresariais.',
        'hero.btn.projects': 'Ver Projetos', 'hero.btn.contact': 'Contato',
        'hero.stat.repos': 'Repositorios', 'hero.stat.contribs': 'Contrib. 2025',
        'hero.stat.devyears': 'Anos dev', 'hero.stat.ityears': 'Anos em TI',
        'about.title': 'Sobre <span class="accent">Mim</span>',
        'about.p1': 'Sou um desenvolvedor apaixonado por automacao inteligente, com solida experiencia em <strong>Python, RPA, IA e APIs</strong>. Atuo como Desenvolvedor Pleno no <strong>Grupo Patrimar</strong>, desenvolvendo solucoes que eliminam processos manuais, integram sistemas corporativos e geram ganho real de eficiencia.',
        'about.p2': 'Especializado em integracao com <strong>SAP</strong>, desenvolvimento de <strong>APIs com FastAPI</strong> e automacao com <strong>BotCity</strong>. Venho explorando ativamente <strong>IA generativa</strong> — construindo agentes conversacionais com RAG usando Ollama local e integrando o Gemini AI em pipelines de processamento de dados.',
        'about.p3': 'Formando em Ciencia da Computacao pela Unip (2021–2026), tenho como base uma mentalidade orientada a resultados: codigo limpo, manutivel e com impacto real nos negocios.',
        'about.location': 'Belo Horizonte, MG — Brasil',
        'about.age_suffix': ' anos',
        'about.company': 'Patrimar Engenharia',
        'about.edu': 'Bacharel em Ciencia da Computacao — Unip',
        'about.lang_item': 'Ingles — <strong>Intermediario</strong>',
        'about.gh.stats': 'GitHub Stats',
        'about.gh.langs': 'Top Linguagens',
        'skills.title': 'Habilidades <span class="accent">Tecnicas</span>',
        'skills.cat.langs': 'Linguagens',
        'skills.cat.rpa': 'RPA &amp; Automacao',
        'skills.cat.ai': 'IA &amp; Machine Learning',
        'skills.cat.apis': 'APIs &amp; Frameworks',
        'skills.cat.tools': 'Ferramentas &amp; Infra',
        'skills.ollama': 'Ollama (IA local)',
        'skills.orchestration': 'Orquestracao',
        'skills.agents': 'Agentes conversacionais',
        'skills.networking': 'Redes / TCP-IP',
        'exp.title': 'Experiencia <span class="accent">Profissional</span>',
        'projects.title': 'Projetos <span class="accent">em Destaque</span>',
        'projects.subtitle': 'Automacao, APIs e IA aplicada — solucoes com impacto real nos negocios.',
        'proj1.title': 'Agente-Ollama <span class="tag" style="font-size:0.62rem;vertical-align:middle">IA Local</span>',
        'proj1.desc': 'Agente conversacional com RAG usando Ollama. Indexa documentos (PDF, Word, Excel), gera embeddings e responde com contexto — 100% on-premise, sem nuvem.',
        'proj2.title': 'Oracle CRM + Gemini AI',
        'proj2.desc': 'Automacao que consome a API CRM da Oracle, processa dados incrementalmente e usa o Gemini AI para filtragem inteligente de spam e enriquecimento de cadastros.',
        'proj3.title': 'Automacao de Indices Financeiros',
        'proj3.desc': 'Sistema financeiro para gerenciar indices do mercado imobiliario (INCC, IGP-M) com web scraping, integracao SAP e relatorios automaticos no Power BI.',
        'proj4.title': 'Gerador de Incorridos',
        'proj4.desc': 'Pipeline completa: conexao SAP, extracao de dados de empreendimentos, relatorios Excel consolidados com indices INCC via integracao web. Fluxo 100% automatizado.',
        'proj5.title': 'Sistema de Telemetria de Rede',
        'proj5.desc': 'Coleta dados de hardware/software de todos os PCs da rede via API Flask, armazena em CSV e gera dashboards no Power BI. Deploy automatizado via GPO.',
        'proj6.title': 'Automacao de Faturamento SAP',
        'proj6.desc': 'Automacao completa do processo de faturamento no SAP: executa lancamentos, valida dados, gera relatorios e envia notificacoes de forma totalmente autonoma. Ativo em producao desde 2025.',
        'proj7.title': 'Bot WhatsApp Massivo',
        'proj7.desc': 'Le planilha Excel com contatos e dispara mensagens personalizadas com arquivos anexos de forma sequencial, com interface grafica de acompanhamento em tempo real.',
        'proj8.title': 'Imobme Extract API',
        'proj8.desc': 'API que automatiza a extracao de dados do sistema Imobme via RPA e os disponibiliza como endpoint HTTP — integrando o sistema legado com outras ferramentas via REST. Atualizado em Mai/2026.',
        'repos.title': 'Repositorios <span class="accent">Recentes no GitHub</span>',
        'repos.live': 'Atualizado automaticamente via GitHub API',
        'repos.viewall': 'Ver todos os repositorios',
        'edu.title': 'Formacao &amp; <span class="accent">Certificacoes</span>',
        'edu.graduation': 'Graduacao',
        'edu.certs': 'Certificacoes',
        'contact.title': 'Vamos <span class="accent">Conversar?</span>',
        'contact.subtitle': 'Aberto a novas oportunidades, projetos e colaboracoes.',
        'footer.rights': 'Todos os direitos reservados.',
        'gh.pub_repos': 'Repositórios públicos',
        'gh.followers': 'Seguidores',
        'gh.following': 'Seguindo',
        'gh.nodesc': 'Sem descrição disponível.',
        'gh.api_error': 'Não foi possível carregar via API.',
        'gh.viewrepos': 'Ver repositórios no GitHub',
        'gh.norepos': 'Nenhum repositório encontrado.',
        'exp.load_error': 'Nao foi possivel carregar os dados. ',
        'exp.load_link': 'Ver no LinkedIn',
        'time.now': 'agora',
        'time.min': ' min atrás',
        'time.h': ' h atrás',
        'time.d': ' d atrás',
        'time.months': ' meses atrás',
        'time.year': ' a atrás'
      },
      en: {
        'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
        'nav.experience': 'Experience', 'nav.projects': 'Projects',
        'nav.education': 'Education', 'nav.contact': 'Contact',
        'hero.badge': 'Available for new opportunities',
        'hero.bio': 'Senior Developer at <strong>Grupo Patrimar</strong> focused on intelligent automation. I build Python solutions for RPA, APIs, and AI that eliminate manual processes, integrate corporate systems, and scale business operations.',
        'hero.btn.projects': 'View Projects', 'hero.btn.contact': 'Contact',
        'hero.stat.repos': 'Repositories', 'hero.stat.contribs': 'Contrib. 2025',
        'hero.stat.devyears': 'Dev years', 'hero.stat.ityears': 'Years in IT',
        'about.title': 'About <span class="accent">Me</span>',
        'about.p1': 'I\'m a developer passionate about intelligent automation, with solid experience in <strong>Python, RPA, AI, and APIs</strong>. I work as a Senior Developer at <strong>Grupo Patrimar</strong>, building solutions that eliminate manual processes, integrate corporate systems, and generate real efficiency gains.',
        'about.p2': 'Specialized in <strong>SAP</strong> integration, <strong>FastAPI</strong> development, and automation with <strong>BotCity</strong>. Actively exploring <strong>generative AI</strong> — building conversational agents with RAG using local Ollama and integrating Gemini AI into data processing pipelines.',
        'about.p3': 'Computer Science student at Unip (2021–2026), with a results-oriented mindset: clean, maintainable code with real business impact.',
        'about.location': 'Belo Horizonte, MG — Brazil',
        'about.age_suffix': ' years old',
        'about.company': 'Patrimar Engenharia',
        'about.edu': 'Bachelor\'s in Computer Science — Unip',
        'about.lang_item': 'English — <strong>Intermediate</strong>',
        'about.gh.stats': 'GitHub Stats',
        'about.gh.langs': 'Top Languages',
        'skills.title': 'Technical <span class="accent">Skills</span>',
        'skills.cat.langs': 'Languages',
        'skills.cat.rpa': 'RPA &amp; Automation',
        'skills.cat.ai': 'AI &amp; Machine Learning',
        'skills.cat.apis': 'APIs &amp; Frameworks',
        'skills.cat.tools': 'Tools &amp; Infrastructure',
        'skills.ollama': 'Ollama (local AI)',
        'skills.orchestration': 'Orchestration',
        'skills.agents': 'Conversational Agents',
        'skills.networking': 'Networking / TCP-IP',
        'exp.title': 'Professional <span class="accent">Experience</span>',
        'projects.title': 'Featured <span class="accent">Projects</span>',
        'projects.subtitle': 'Automation, APIs, and applied AI — solutions with real business impact.',
        'proj1.title': 'Agente-Ollama <span class="tag" style="font-size:0.62rem;vertical-align:middle">Local AI</span>',
        'proj1.desc': 'Conversational agent with RAG using Ollama. Indexes documents (PDF, Word, Excel), generates embeddings and responds with context — 100% on-premise, no cloud.',
        'proj2.title': 'Oracle CRM + Gemini AI',
        'proj2.desc': 'Automation consuming Oracle CRM API, processing data incrementally and using Gemini AI for intelligent spam filtering and customer data enrichment.',
        'proj3.title': 'Financial Index Automation',
        'proj3.desc': 'Financial system to manage real estate market indexes (INCC, IGP-M) with web scraping, SAP integration, and automated Power BI reports.',
        'proj4.title': 'Incurred Costs Generator',
        'proj4.desc': 'Full pipeline: SAP connection, property data extraction, consolidated Excel reports with INCC indexes via web integration. 100% automated workflow.',
        'proj5.title': 'Network Telemetry System',
        'proj5.desc': 'Collects hardware/software data from all network PCs via Flask API, stores in CSV, and generates Power BI dashboards. Automated deployment via GPO.',
        'proj6.title': 'SAP Billing Automation',
        'proj6.desc': 'Full automation of SAP billing process: executes postings, validates data, generates reports, and sends notifications autonomously. Live in production since 2025.',
        'proj7.title': 'Mass WhatsApp Bot',
        'proj7.desc': 'Reads Excel spreadsheet with contacts and sends personalized messages with attachments sequentially, with a real-time GUI monitoring interface.',
        'proj8.title': 'Imobme Extract API',
        'proj8.desc': 'API automating data extraction from the Imobme system via RPA, exposing it as an HTTP endpoint — integrating the legacy system with modern tools via REST. Updated May/2026.',
        'repos.title': 'Recent <span class="accent">GitHub Repositories</span>',
        'repos.live': 'Automatically updated via GitHub API',
        'repos.viewall': 'View all repositories',
        'edu.title': 'Education &amp; <span class="accent">Certifications</span>',
        'edu.graduation': 'Education',
        'edu.certs': 'Certifications',
        'contact.title': 'Let\'s <span class="accent">Talk?</span>',
        'contact.subtitle': 'Open to new opportunities, projects, and collaborations.',
        'footer.rights': 'All rights reserved.',
        'gh.pub_repos': 'Public repositories',
        'gh.followers': 'Followers',
        'gh.following': 'Following',
        'gh.nodesc': 'No description available.',
        'gh.api_error': 'Could not load via API.',
        'gh.viewrepos': 'View repositories on GitHub',
        'gh.norepos': 'No repositories found.',
        'exp.load_error': 'Could not load data. ',
        'exp.load_link': 'View on LinkedIn',
        'time.now': 'just now',
        'time.min': ' min ago',
        'time.h': ' h ago',
        'time.d': ' d ago',
        'time.months': ' months ago',
        'time.year': ' yr ago'
      }
    }
  };

  var currentLang = localStorage.getItem('portfolio-lang') || 'pt';

  function t(key) {
    return (I18N.strings[currentLang] && I18N.strings[currentLang][key] !== undefined)
      ? I18N.strings[currentLang][key]
      : (I18N.strings.pt[key] || key);
  }

  if (currentLang !== 'pt') {
    var _s = I18N.strings[currentLang] || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = _s[el.getAttribute('data-i18n')]; if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = _s[el.getAttribute('data-i18n-html')]; if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.setAttribute('lang', 'en');
    var _ll = document.getElementById('langLabel'); if (_ll) _ll.textContent = 'PT';
  }

  /* ----------------------------------------------------------
     THEME MANAGEMENT
  ---------------------------------------------------------- */
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Update navbar scroll background on theme change
    updateNavbarBg();
  }

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ----------------------------------------------------------
     DOWNLOAD CV — gera PDF automaticamente via html2pdf.js
  ---------------------------------------------------------- */
  function generateCV(srcFile, filename, triggerEl) {
    if (triggerEl) {
      triggerEl.disabled = true;
      triggerEl._origHTML = triggerEl.innerHTML;
      triggerEl.innerHTML = triggerEl.tagName === 'BUTTON'
        ? '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Gerando...'
        : 'Gerando...';
    }

    function restore() {
      if (triggerEl) { triggerEl.disabled = false; triggerEl.innerHTML = triggerEl._origHTML; }
    }

    fetch(srcFile)
      .then(function (r) { return r.text(); })
      .then(function (rawHtml) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(rawHtml, 'text/html');
        var cvRoot = doc.querySelector('.cv-root');
        if (!cvRoot) { restore(); return; }

        var styleContent = Array.from(doc.querySelectorAll('style'))
          .map(function (s) { return s.textContent; }).join('');

        var wrap = document.createElement('div');
        wrap.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;background:#fff;z-index:-1;';
        var styleEl = document.createElement('style');
        styleEl.textContent = styleContent;
        wrap.appendChild(styleEl);
        wrap.appendChild(cvRoot);
        document.body.appendChild(wrap);

        html2pdf().set({
          margin: 0,
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, letterRendering: true, logging: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(cvRoot).save()
          .then(function () { document.body.removeChild(wrap); restore(); })
          .catch(function () { if (wrap.parentNode) document.body.removeChild(wrap); restore(); });
      })
      .catch(function () { restore(); });
  }

  var btnPrintCV = document.getElementById('btnPrintCV');
  if (btnPrintCV) {
    btnPrintCV.addEventListener('click', function () {
      if (currentLang === 'en') {
        generateCV('curriculo-en.html', 'Renan_Oliveira_Resume.pdf', btnPrintCV);
      } else {
        generateCV('curriculo.html', 'Renan_Oliveira_Curriculo.pdf', btnPrintCV);
      }
    });
  }

  var btnDownloadCVContact = document.getElementById('btnDownloadCVContact');
  if (btnDownloadCVContact) {
    btnDownloadCVContact.addEventListener('click', function (e) {
      e.preventDefault();
      generateCV('curriculo.html', 'Renan_Oliveira_Curriculo.pdf', btnDownloadCVContact);
    });
  }

  var btnDownloadCVContactEn = document.getElementById('btnDownloadCVContactEn');
  if (btnDownloadCVContactEn) {
    btnDownloadCVContactEn.addEventListener('click', function (e) {
      e.preventDefault();
      generateCV('curriculo-en.html', 'Renan_Oliveira_Resume.pdf', btnDownloadCVContactEn);
    });
  }

  /* ----------------------------------------------------------
     AGE CALCULATION
  ---------------------------------------------------------- */
  function calcAge(dob) {
    var today = new Date();
    var birth = new Date(dob);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  var ageEls = document.querySelectorAll('.idade-auto');
  ageEls.forEach(function (el) {
    el.textContent = calcAge('1994-10-24');
  });

  /* ----------------------------------------------------------
     CURRENT YEAR
  ---------------------------------------------------------- */
  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     MOBILE MENU
  ---------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (hamburger) hamburger.classList.remove('open');
    if (navLinks) navLinks.classList.remove('open');
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-container')) closeMenu();
    });
  }

  /* ----------------------------------------------------------
     NAVBAR SCROLL EFFECT
  ---------------------------------------------------------- */
  var navbar = document.getElementById('navbar');

  function updateNavbarBg() {
    if (!navbar) return;
    var isDark = html.getAttribute('data-theme') === 'dark';
    var solid = isDark ? 'rgba(13,17,23,0.97)' : 'rgba(255,255,255,0.97)';
    navbar.style.background = window.scrollY > 50 ? solid : '';
  }

  window.addEventListener('scroll', updateNavbarBg, { passive: true });

  /* ----------------------------------------------------------
     ACTIVE NAV LINK ON SCROLL
  ---------------------------------------------------------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinkEls.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ----------------------------------------------------------
     TYPEWRITER EFFECT
  ---------------------------------------------------------- */
  var typewriterEl = document.getElementById('typewriter');
  var phrases = I18N.phrases[currentLang] || I18N.phrases.pt;

  if (typewriterEl) {
    var phraseIdx = 0;
    var charIdx = 0;
    var deleting = false;

    function type() {
      var current = phrases[phraseIdx];
      if (deleting) {
        typewriterEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typewriterEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }

      var delay = deleting ? 38 : 78;

      if (!deleting && charIdx === current.length) {
        delay = 2200;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 450;
      }

      setTimeout(type, delay);
    }

    type();
  }

  /* ----------------------------------------------------------
     INTERSECTION OBSERVER — REVEAL ANIMATIONS
  ---------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ----------------------------------------------------------
     BACK TO TOP
  ---------------------------------------------------------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener(
      'scroll',
      function () {
        backToTop.classList.toggle('visible', window.scrollY > 420);
      },
      { passive: true }
    );

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     GITHUB API INTEGRATION
  ---------------------------------------------------------- */
  var GITHUB_USER = 'RenanMGX';
  var CACHE_KEY = 'gh_repos_v3';
  var CACHE_TTL = 60 * 60 * 1000; // 1 hour

  var LANG_COLORS = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    CSS: '#563d7c',
    HTML: '#e34c26',
    'C#': '#178600',
    PHP: '#4F5D95',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
    PowerShell: '#012456',
  };

  function getLangColor(lang) {
    return LANG_COLORS[lang] || '#8b949e';
  }

  function timeAgo(dateStr) {
    var date = new Date(dateStr);
    var now = new Date();
    var diff = Math.floor((now - date) / 1000);
    if (diff < 60) return t('time.now');
    if (diff < 3600) return Math.floor(diff / 60) + t('time.min');
    if (diff < 86400) return Math.floor(diff / 3600) + t('time.h');
    if (diff < 2592000) return Math.floor(diff / 86400) + t('time.d');
    if (diff < 31536000) return Math.floor(diff / 2592000) + t('time.months');
    return Math.floor(diff / 31536000) + t('time.year');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderRepos(repos) {
    var grid = document.getElementById('reposGrid');
    if (!grid) return;

    var filtered = repos
      .filter(function (r) {
        return !r.fork && r.name !== GITHUB_USER;
      })
      .slice(0, 12);

    if (filtered.length === 0) {
      grid.innerHTML =
        '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:24px">' + t('gh.norepos') + '</p>';
      return;
    }

    grid.innerHTML = filtered
      .map(function (repo) {
        var langColor = getLangColor(repo.language);
        var safeDesc = escapeHtml(repo.description) || t('gh.nodesc');
        var safeName = escapeHtml(repo.name);

        return (
          '<a href="' +
          escapeHtml(repo.html_url) +
          '" target="_blank" rel="noopener" class="repo-card">' +
          '<div class="repo-card-name">' +
          '<i class="fas fa-book-open" style="font-size:0.7rem;opacity:0.55"></i>' +
          safeName +
          '</div>' +
          '<div class="repo-card-desc">' + safeDesc + '</div>' +
          '<div class="repo-card-footer">' +
          (repo.language
            ? '<span class="repo-lang"><span class="lang-dot" style="background:' + langColor + '"></span>' + escapeHtml(repo.language) + '</span>'
            : '') +
          (repo.stargazers_count > 0
            ? '<span class="repo-stars"><i class="fas fa-star" style="color:#e3b341;font-size:0.65rem"></i>' + repo.stargazers_count + '</span>'
            : '') +
          '<span class="repo-updated">' + timeAgo(repo.pushed_at) + '</span>' +
          '</div>' +
          '</a>'
        );
      })
      .join('');
  }

  function showRepoError() {
    var grid = document.getElementById('reposGrid');
    if (!grid) return;
    grid.innerHTML =
      '<div style="grid-column:1/-1;text-align:center;padding:36px;color:var(--text-muted)">' +
      '<i class="fab fa-github" style="font-size:2.2rem;display:block;margin-bottom:12px"></i>' +
      '<p style="font-size:0.875rem">' + t('gh.api_error') + ' <a href="https://github.com/RenanMGX?tab=repositories" target="_blank" rel="noopener">' + t('gh.viewrepos') + '</a></p>' +
      '</div>';
  }

  function fetchRepos() {
    // Try cache first
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        var cached = JSON.parse(raw);
        if (Date.now() - cached.ts < CACHE_TTL) {
          renderRepos(cached.data);
          renderLangStats(cached.data);
          return;
        }
      }
    } catch (e) {
      localStorage.removeItem(CACHE_KEY);
    }

    // Fetch from GitHub API
    fetch(
      'https://api.github.com/users/' + GITHUB_USER + '/repos?sort=pushed&per_page=30&type=public',
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    )
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ data: data, ts: Date.now() }));
        } catch (e) { /* storage full, ignore */ }
        renderRepos(data);
        renderLangStats(data);
      })
      .catch(function (err) {
        console.warn('GitHub API error:', err);
        showRepoError();
      });
  }

  // Carregar repos imediatamente para popular GitHub Stats e Top Linguagens sem esperar scroll
  fetchRepos();

  /* ----------------------------------------------------------
     GITHUB PROFILE — foto e contagens dinâmicas
  ---------------------------------------------------------- */
  var PROFILE_CACHE_KEY = 'gh_profile_v1';

  function applyProfileData(data) {
    var heroPhoto = document.getElementById('heroPhoto');
    var statRepos = document.getElementById('statRepos');
    if (heroPhoto && data.avatar_url) {
      heroPhoto.src = data.avatar_url;
    }
    if (statRepos && data.public_repos) {
      statRepos.textContent = data.public_repos;
    }
    var ghStatsBody = document.getElementById('ghStatsBody');
    if (ghStatsBody && data.public_repos !== undefined) {
      ghStatsBody.innerHTML =
        '<div class="gh-stat-row"><i class="fas fa-book" aria-hidden="true"></i><span class="gh-stat-label">' + t('gh.pub_repos') + '</span><span class="gh-stat-val">' + data.public_repos + '</span></div>' +
        '<div class="gh-stat-row"><i class="fas fa-users" aria-hidden="true"></i><span class="gh-stat-label">' + t('gh.followers') + '</span><span class="gh-stat-val">' + data.followers + '</span></div>' +
        '<div class="gh-stat-row"><i class="fas fa-user-plus" aria-hidden="true"></i><span class="gh-stat-label">' + t('gh.following') + '</span><span class="gh-stat-val">' + data.following + '</span></div>';
    }
  }

  function renderLangStats(repos) {
    var ghLangsBody = document.getElementById('ghLangsBody');
    if (!ghLangsBody) return;
    var counts = {};
    repos.forEach(function (r) {
      if (r.language) {
        counts[r.language] = (counts[r.language] || 0) + 1;
      }
    });
    var sorted = Object.keys(counts)
      .sort(function (a, b) { return counts[b] - counts[a]; })
      .slice(0, 6);
    var total = sorted.reduce(function (s, l) { return s + counts[l]; }, 0);
    if (sorted.length === 0) {
      ghLangsBody.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);text-align:center;padding:16px 0">Sem dados de linguagem</p>';
      return;
    }
    ghLangsBody.innerHTML = sorted.map(function (lang) {
      var pct = total > 0 ? ((counts[lang] / total) * 100).toFixed(1) : 0;
      var color = getLangColor(lang);
      return (
        '<div class="gh-lang-item">' +
        '<span class="gh-lang-dot" style="background:' + color + '" aria-hidden="true"></span>' +
        '<span class="gh-lang-name">' + escapeHtml(lang) + '</span>' +
        '<span class="gh-lang-pct">' + pct + '%</span>' +
        '</div>' +
        '<div class="gh-lang-bar-wrap" aria-hidden="true"><div class="gh-lang-bar-fill" style="width:' + pct + '%;background:' + color + '"></div></div>'
      );
    }).join('');
  }

  function fetchGitHubProfile() {
    var heroPhoto = document.getElementById('heroPhoto');
    var statRepos = document.getElementById('statRepos');
    if (!heroPhoto && !statRepos) return;

    try {
      var cached = localStorage.getItem(PROFILE_CACHE_KEY);
      if (cached) {
        var obj = JSON.parse(cached);
        if (Date.now() - obj.ts < CACHE_TTL) {
          applyProfileData(obj.data);
          return;
        }
      }
    } catch (e) {}

    fetch('https://api.github.com/users/' + GITHUB_USER,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    )
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        try {
          localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
        } catch (e) {}
        applyProfileData(data);
      })
      .catch(function () {});
  }

  fetchGitHubProfile();

  /* ----------------------------------------------------------
     CURRICULUM DATA — Experiencia / Formacao / Certificados
     Fonte: data.json no repositorio (editavel pelo GitHub web)
     Para atualizar: github.com/RenanMGX/renanmgx.github.io
     → clique em data.json → lapis → edite → Commit changes
  ---------------------------------------------------------- */
  var DATA_URL = './data.json';
  var CV_CACHE_KEY = 'cv_data_v3';
  var CV_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 horas
  var cvDataCache = null; // dados em memoria para re-render ao trocar idioma

  function renderExperience(items) {
    var container = document.getElementById('expTimeline');
    if (!container || !items || !items.length) return;

    container.innerHTML = items.map(function (exp) {
      var tags = (exp.tags || []).map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + '</span>';
      }).join('');

      var expTitle = (currentLang === 'en' && exp.title_en) ? exp.title_en : exp.title;
      var expPeriod = (currentLang === 'en' && exp.period_en) ? exp.period_en : exp.period;
      var expDesc = (currentLang === 'en' && exp.description_en) ? exp.description_en : exp.description;
      var expHighlights = (currentLang === 'en' && exp.highlights_en) ? exp.highlights_en : (exp.highlights || []);
      var highlights = '';
      if (expHighlights.length) {
        highlights = '<ul class="exp-highlights">' +
          expHighlights.map(function (h) {
            return '<li>' + escapeHtml(h) + '</li>';
          }).join('') +
          '</ul>';
      }

      return (
        '<div class="exp-item">' +
        '<div class="exp-dot" aria-hidden="true"></div>' +
        '<div class="exp-card">' +
        '<div class="exp-header"><div>' +
        '<h3 class="exp-title">' + escapeHtml(expTitle) + '</h3>' +
        '<span class="exp-company">' + escapeHtml(exp.company) + '</span>' +
        '</div><span class="exp-period">' + escapeHtml(expPeriod) + '</span></div>' +
        (tags ? '<div class="exp-tags">' + tags + '</div>' : '') +
        '<p class="exp-desc">' + escapeHtml(expDesc) + '</p>' +
        highlights +
        '</div></div>'
      );
    }).join('');
  }

  function renderEducation(items) {
    var container = document.getElementById('eduContainer');
    if (!container || !items || !items.length) return;

    container.innerHTML = items.map(function (edu) {
      var iconClass = escapeHtml(edu.icon_class || 'fas fa-graduation-cap');
      var eduDegree = (currentLang === 'en' && edu.degree_en) ? edu.degree_en : edu.degree;
      var eduPeriod = (currentLang === 'en' && edu.period_en) ? edu.period_en : edu.period;
      var eduDesc = (currentLang === 'en' && edu.description_en) ? edu.description_en : edu.description;
      return (
        '<div class="edu-main-icon" aria-hidden="true"><i class="' + iconClass + '"></i></div>' +
        '<div>' +
        '<h4>' + escapeHtml(eduDegree) + '</h4>' +
        '<span class="edu-institution">' + escapeHtml(edu.institution) + '</span>' +
        '<span class="edu-period">' + escapeHtml(eduPeriod) + '</span>' +
        (eduDesc ? '<p class="edu-desc">' + escapeHtml(eduDesc) + '</p>' : '') +
        '</div>'
      );
    }).join('');
  }

  function renderCertifications(items) {
    var container = document.getElementById('certsGrid');
    if (!container || !items || !items.length) return;

    container.innerHTML = items.map(function (cert) {
      var iconStyle = cert.icon_style ? ' style="' + escapeHtml(cert.icon_style) + '"' : '';
      var certName = (currentLang === 'en' && cert.name_en) ? cert.name_en : cert.name;
      var certDate = (currentLang === 'en' && cert.date_en) ? cert.date_en : cert.date;
      return (
        '<a href="' + escapeHtml(cert.url) + '" target="_blank" rel="noopener noreferrer" class="cert-card">' +
        '<div class="cert-icon"><i class="' + escapeHtml(cert.icon_class) + '"' + iconStyle + ' aria-hidden="true"></i></div>' +
        '<div class="cert-info">' +
        '<span class="cert-name">' + escapeHtml(certName) + '</span>' +
        '<span class="cert-issuer">' + escapeHtml(cert.issuer) + '</span>' +
        '<span class="cert-date">' + escapeHtml(certDate) + '</span>' +
        '</div>' +
        '<i class="fas fa-external-link-alt cert-ext-icon" aria-hidden="true"></i>' +
        '</a>'
      );
    }).join('');
  }

  function applyCurriculumData(data) {
    cvDataCache = data;
    renderExperience(data.experience);
    renderEducation(data.education);
    renderCertifications(data.certifications);
  }

  function fetchCurriculumData() {
    try {
      var cached = localStorage.getItem(CV_CACHE_KEY);
      if (cached) {
        var obj = JSON.parse(cached);
        if (Date.now() - obj.ts < CV_CACHE_TTL) {
          applyCurriculumData(obj.data);
          return;
        }
      }
    } catch (e) {}

    fetch(DATA_URL)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        try {
          localStorage.setItem(CV_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
        } catch (e) {}
        applyCurriculumData(data);
      })
      .catch(function () {
        var expEl = document.getElementById('expTimeline');
        if (expEl) {
          expEl.innerHTML =
            '<p style="color:var(--text-muted);padding:24px;text-align:center">' +
            t('exp.load_error') +
            '<a href="https://www.linkedin.com/in/renanmgx/" target="_blank" rel="noopener">' + t('exp.load_link') + '</a>' +
            '</p>';
        }
      });
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-br');
    var langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'en' ? 'PT' : 'EN';
    var strings = I18N.strings[lang] || I18N.strings.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = strings[el.getAttribute('data-i18n')]; if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = strings[el.getAttribute('data-i18n-html')]; if (v !== undefined) el.innerHTML = v;
    });
    if (cvDataCache) {
      applyCurriculumData(cvDataCache);
    } else {
      fetchCurriculumData();
    }
    try { var profRaw = localStorage.getItem(PROFILE_CACHE_KEY); if (profRaw) { var profObj = JSON.parse(profRaw); if (profObj && profObj.data) applyProfileData(profObj.data); } } catch (e) {}
    try { var reposRaw = localStorage.getItem(CACHE_KEY); if (reposRaw) { var rObj = JSON.parse(reposRaw); if (rObj && Date.now() - rObj.ts < CACHE_TTL) { renderRepos(rObj.data); renderLangStats(rObj.data); } } } catch (e) {}
    phrases = I18N.phrases[lang] || I18N.phrases.pt;
    phraseIdx = 0; charIdx = 0; deleting = false;
    if (typewriterEl) typewriterEl.textContent = '';
  }

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  fetchCurriculumData();
})();
