import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue/dist'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
