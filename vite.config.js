import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const tpDir = resolve(root, 'src/pages/tp');
const virtualModuleId = 'virtual:tp-pages';
const resolvedVirtualModuleId = '\0' + virtualModuleId;

const listTpPages = () =>
  (existsSync(tpDir) ? readdirSync(tpDir) : [])
    .filter((file) => file.endsWith('.html'))
    .map((file) => file.replace(/\.html$/, ''))
    .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }));

const isTpPage = (file) => file.endsWith('.html') && dirname(resolve(file)) === tpDir;

const tpPages = () => ({
  name: 'tp-pages',
  resolveId(id) {
    return id === virtualModuleId ? resolvedVirtualModuleId : null;
  },
  load(id) {
    return id === resolvedVirtualModuleId
      ? `export default ${JSON.stringify(listTpPages())};`
      : null;
  },
  configureServer(server) {
    const refresh = (file) => {
      if (isTpPage(file)) server.restart();
    };

    server.watcher.on('add', refresh);
    server.watcher.on('unlink', refresh);
  },
});

export default defineConfig({
  plugins: [tailwindcss(), tpPages()],
  build: {
    rollupOptions: {
      input: {
        index: join(root, 'index.html'),
        ...Object.fromEntries(
          listTpPages().map((slug) => [slug, join(tpDir, `${slug}.html`)])
        ),
      },
    },
  },
});
