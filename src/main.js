import { tpPages } from './navbar.js';

const cards = tpPages
  .map(
    ({ label, href }) => `
      <a href="${href}" class="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md">
        <div class="card-body">
          <h2 class="card-title">${label}</h2>
          <p class="text-sm text-base-content/60">Ouvrir le TP</p>
        </div>
      </a>`
  )
  .join('');

const empty = `
  <div class="alert alert-info">
    Ajoute un fichier HTML dans <span class="font-mono">src/pages/tp</span> pour le voir apparaître ici.
  </div>
`;

document.querySelector('#app').innerHTML = `
  <main class="mx-auto max-w-5xl px-4 py-12">
    <h1 class="text-4xl font-bold">Révisions JavaScript</h1>
    <p class="mt-2 text-base-content/70">Chaque TP du dossier src/pages/tp est listé automatiquement.</p>
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${tpPages.length ? cards : empty}
    </div>
  </main>
`;
