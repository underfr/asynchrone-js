import './style.css';
import slugs from 'virtual:tp-pages';
import { initTheme, toggleTheme } from './services/themeService.js';

initTheme()

const base = import.meta.env.BASE_URL;

const toLabel = (slug) =>
  slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) =>
      /^tp\d*$/i.test(word) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

export const tpPages = slugs.map((slug) => ({
  slug,
  label: toLabel(slug),
  href: `${base}src/pages/tp/${slug}.html`,
}));

const currentSlug = decodeURIComponent(window.location.pathname)
  .split('/')
  .pop()
  .replace(/\.html$/, '');

const menuItems = tpPages.length
  ? tpPages
      .map(
        ({ slug, label, href }) =>
          `<li><a href="${href}"${slug === currentSlug ? ' class="menu-active"' : ''}>${label}</a></li>`
      )
      .join('')
  : '<li><span class="text-base-content/50">Aucun TP</span></li>';

const navbar = document.createElement('header');

navbar.className =
  'navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 px-4 backdrop-blur';

navbar.innerHTML = `
  <div class="navbar-start">
    <div class="dropdown lg:hidden">
      <div tabindex="0" role="button" class="btn btn-ghost" aria-label="Ouvrir le menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <ul tabindex="0" class="menu dropdown-content z-1 mt-3 w-56 rounded-box bg-base-100 p-2 shadow-lg">
        ${menuItems}
      </ul>
    </div>
    <a href="${base}" class="btn btn-ghost px-2 text-lg font-bold">Révisions JS</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal max-w-[55vw] flex-nowrap overflow-x-auto">
      ${menuItems}
    </ul>
  </div>
  <div class="navbar-end">
    <button id="theme-toggle" class="btn btn-ghost btn-circle" aria-label="Changer de thème">
        Thème
    </button>
  </div>


`;

document.body.prepend(navbar);
navbar
    .querySelector('#theme-toggle')
    .addEventListener('click', toggleTheme);