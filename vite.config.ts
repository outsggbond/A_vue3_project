import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { fileURLToPath, URL } from 'node:url'   // 新增

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    // 新增 resolve 别名配置，让 @ 指向 src 目录
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 修改为别名路径，Vite 会自动解析
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
  }
})