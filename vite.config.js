import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const PORT = 5173

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // command: resolve(root, 'command', 'command.html'),
        // contact: resolve(root, 'contact', 'contact.html'),
      },
    },
  },
  server: {
    open: `http://localhost:${PORT}/`,
  },
})
