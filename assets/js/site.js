(function () {
  var root = document.documentElement;

  /* ---------- 深浅色 ---------- */
  var toggle = document.getElementById('theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    var t = root.getAttribute('data-theme');
    return (t === 'dark' || t === 'light') ? t : (mq.matches ? 'dark' : 'light');
  }

  function syncLabel() {
    if (!toggle) return;
    var dark = currentTheme() === 'dark';
    toggle.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    toggle.setAttribute('title', dark ? '切换到浅色模式' : '切换到深色模式');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('cc-theme', next); } catch (e) {}
      syncLabel();
    });
    syncLabel();
  }


  /* ---------- 首页筛选 ---------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('#post-list .card'));
  var emptyHint = document.getElementById('empty-hint');

  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var filter = chip.getAttribute('data-filter');
        var shown = 0;
        chips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        cards.forEach(function (card) {
          var kind = card.getAttribute('data-kind') || 'translation';
          var show = filter === 'all' || kind === filter;
          card.classList.toggle('is-hidden', !show);
          if (show) shown++;
        });
        if (emptyHint) emptyHint.hidden = shown > 0;
      });
    });
  }

  /* ---------- 目录（从 h2 生成） ---------- */
  var article = document.querySelector('article');
  var sidebar = document.getElementById('toc-list');
  var inline = document.getElementById('toc-inline-list');
  var headings = article ? Array.prototype.slice.call(article.querySelectorAll('h2[id]')) : [];

  function buildToc(target) {
    if (!target) return;
    var frag = document.createDocumentFragment();
    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      frag.appendChild(li);
    });
    target.appendChild(frag);
  }
  buildToc(sidebar);
  buildToc(inline);

  var links = sidebar ? Array.prototype.slice.call(sidebar.querySelectorAll('a')) : [];

  /* ---------- 阅读进度 + 目录高亮 ---------- */
  var bar = document.getElementById('progress');

  function onScroll() {
    if (bar && article) {
      var start = article.offsetTop;
      var total = article.offsetHeight - window.innerHeight;
      var pct = total > 0 ? (window.scrollY - start) / total : 0;
      bar.style.width = (Math.max(0, Math.min(1, pct)) * 100).toFixed(2) + '%';
    }
    if (links.length) {
      var active = -1;
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top <= 120) active = i;
      }
      for (var j = 0; j < links.length; j++) {
        links[j].classList.toggle('active', j === active);
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
