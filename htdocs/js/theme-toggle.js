(function () {
  const root = document.documentElement;
  const KEY = 'site-theme';

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const isLight = theme === 'light';
      btn.textContent = isLight ? 'Dark' : 'Light';
      btn.setAttribute('aria-pressed', String(isLight));
      btn.setAttribute('title', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    }
  };

  const saved = localStorage.getItem(KEY);
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  apply(saved || (prefersLight ? 'light' : 'dark'));

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem(KEY, next);
      apply(next);
    });
  });
})();
