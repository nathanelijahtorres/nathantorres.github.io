const htmlEl = document.documentElement;

function applyTheme(theme) {
  const isDark = theme === "dark";
  htmlEl.classList.toggle("dark", isDark);
  document.querySelectorAll("[data-theme-icon]").forEach((icon) => {
    icon.textContent = isDark ? "light_mode" : "dark_mode";
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

function initThemeToggle() {
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = htmlEl.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  });
}

function setBingBackground() {
  document.body.style.backgroundImage = "url('https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US')";
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const icon = document.querySelector("[data-menu-icon]");
  if (!toggle || !menu || !icon) return;

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    icon.textContent = isOpen ? "menu" : "close";
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.querySelectorAll("[data-mobile-link]").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      icon.textContent = "menu";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((yearEl) => {
    yearEl.textContent = year;
  });
}

initTheme();
initThemeToggle();
setBingBackground();
initMobileMenu();
setYear();
