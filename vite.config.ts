import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 关键：使用绝对路径，并将 Windows 反斜杠转为正斜杠
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss').replace(/\\/g, '/')}" as *;`
      }
    }
  }
})