import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode }) => ({
  base: '/localProject2/',
  plugins: [
    vue(),]
}))