// ダークモード：localStorageで状態を永続化
(function () {
  const STORAGE_KEY = 'kaidanbunko-theme';

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = isDark ? '明' : '暗';
  }

  // ページ読み込み時に保存済みの設定を適用
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    applyTheme(true);
  } else if (saved === 'light') {
    applyTheme(false);
  } else {
    // 未設定の場合はOSのダークモード設定に従う
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
  }

  // トグル関数をグローバルに公開
  window.toggleDark = function () {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  };
})();
