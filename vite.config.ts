import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: "dist",
    minify: "terser", // Vite already includes Terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        require("cssnano")({ preset: "default" }) // Minify CSS
      ]
    }
  }
});
