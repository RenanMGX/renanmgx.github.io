/* ============================================================
   Portfolio JS — Renan Oliveira 2026
   Vanilla JS | GitHub API | Typewriter | Dark/Light Mode
   ============================================================ */

(function () {
  'use strict';

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
  var phrases = [
    'Desenvolvedor Python & RPA',
    'Desenvolvedor Python',
    'Especialista em RPA',
    'Automação SAP & APIs',
    'IA com Ollama & Gemini',
    'Desenvolvedor Backend',
  ];

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
  var CACHE_KEY = 'gh_repos_v2';
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
    if (diff < 60) return 'agora';
    if (diff < 3600) return Math.floor(diff / 60) + 'min atrás';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h atrás';
    if (diff < 2592000) return Math.floor(diff / 86400) + 'd atrás';
    if (diff < 31536000) return Math.floor(diff / 2592000) + 'meses atrás';
    return Math.floor(diff / 31536000) + 'a atrás';
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
        '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:24px">Nenhum repositório encontrado.</p>';
      return;
    }

    grid.innerHTML = filtered
      .map(function (repo) {
        var langColor = getLangColor(repo.language);
        var safeDesc = escapeHtml(repo.description) || 'Sem descrição disponível.';
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
      '<p style="font-size:0.875rem">Não foi possível carregar via API. <a href="https://github.com/RenanMGX?tab=repositories" target="_blank" rel="noopener">Ver repositórios no GitHub</a></p>' +
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

  // Carregar repos quando a seção "sobre" ou "projetos" ficar visível
  var projectsSection = document.getElementById('projetos');
  var sobreSection = document.getElementById('sobre');
  var repoFetched = false;

  function triggerFetchRepos() {
    if (!repoFetched) {
      repoFetched = true;
      fetchRepos();
      if (repoObserver) repoObserver.disconnect();
    }
  }

  var repoObserver = null;
  var sectionsToObserve = [sobreSection, projectsSection].filter(Boolean);
  if (sectionsToObserve.length && 'IntersectionObserver' in window) {
    repoObserver = new IntersectionObserver(
      function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          triggerFetchRepos();
        }
      },
      { threshold: 0.05 }
    );
    sectionsToObserve.forEach(function (s) { repoObserver.observe(s); });
  } else {
    fetchRepos();
  }

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
        '<div class="gh-stat-row"><i class="fas fa-book" aria-hidden="true"></i><span class="gh-stat-label">Repositórios públicos</span><span class="gh-stat-val">' + data.public_repos + '</span></div>' +
        '<div class="gh-stat-row"><i class="fas fa-users" aria-hidden="true"></i><span class="gh-stat-label">Seguidores</span><span class="gh-stat-val">' + data.followers + '</span></div>' +
        '<div class="gh-stat-row"><i class="fas fa-user-plus" aria-hidden="true"></i><span class="gh-stat-label">Seguindo</span><span class="gh-stat-val">' + data.following + '</span></div>';
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
  var CV_CACHE_KEY = 'cv_data_v2';
  var CV_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 horas

  function renderExperience(items) {
    var container = document.getElementById('expTimeline');
    if (!container || !items || !items.length) return;

    container.innerHTML = items.map(function (exp) {
      var tags = (exp.tags || []).map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + '</span>';
      }).join('');

      var highlights = '';
      if (exp.highlights && exp.highlights.length) {
        highlights = '<ul class="exp-highlights">' +
          exp.highlights.map(function (h) {
            return '<li>' + escapeHtml(h) + '</li>';
          }).join('') +
          '</ul>';
      }

      return (
        '<div class="exp-item">' +
        '<div class="exp-dot" aria-hidden="true"></div>' +
        '<div class="exp-card">' +
        '<div class="exp-header"><div>' +
        '<h3 class="exp-title">' + escapeHtml(exp.title) + '</h3>' +
        '<span class="exp-company">' + escapeHtml(exp.company) + '</span>' +
        '</div><span class="exp-period">' + escapeHtml(exp.period) + '</span></div>' +
        (tags ? '<div class="exp-tags">' + tags + '</div>' : '') +
        '<p class="exp-desc">' + escapeHtml(exp.description) + '</p>' +
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
      return (
        '<div class="edu-main-icon" aria-hidden="true"><i class="' + iconClass + '"></i></div>' +
        '<div>' +
        '<h4>' + escapeHtml(edu.degree) + '</h4>' +
        '<span class="edu-institution">' + escapeHtml(edu.institution) + '</span>' +
        '<span class="edu-period">' + escapeHtml(edu.period) + '</span>' +
        (edu.description ? '<p class="edu-desc">' + escapeHtml(edu.description) + '</p>' : '') +
        '</div>'
      );
    }).join('');
  }

  function renderCertifications(items) {
    var container = document.getElementById('certsGrid');
    if (!container || !items || !items.length) return;

    container.innerHTML = items.map(function (cert) {
      var iconStyle = cert.icon_style ? ' style="' + escapeHtml(cert.icon_style) + '"' : '';
      return (
        '<a href="' + escapeHtml(cert.url) + '" target="_blank" rel="noopener noreferrer" class="cert-card">' +
        '<div class="cert-icon"><i class="' + escapeHtml(cert.icon_class) + '"' + iconStyle + ' aria-hidden="true"></i></div>' +
        '<div class="cert-info">' +
        '<span class="cert-name">' + escapeHtml(cert.name) + '</span>' +
        '<span class="cert-issuer">' + escapeHtml(cert.issuer) + '</span>' +
        '<span class="cert-date">' + escapeHtml(cert.date) + '</span>' +
        '</div>' +
        '<i class="fas fa-external-link-alt cert-ext-icon" aria-hidden="true"></i>' +
        '</a>'
      );
    }).join('');
  }

  function applyCurriculumData(data) {
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
            'Nao foi possivel carregar os dados. ' +
            '<a href="https://www.linkedin.com/in/renanmgx/" target="_blank" rel="noopener">Ver no LinkedIn</a>' +
            '</p>';
        }
      });
  }

  fetchCurriculumData();
})();
