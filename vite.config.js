import { defineConfig } from 'vite';

export default defineConfig({
  scss: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_variables.scss";`
      }
    }
  }
});
