import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
	sourcemap: true,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BricksLibrary',
      fileName: (format) => `bricks-ui-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue','js'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
})
