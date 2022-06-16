import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const localEnabled = process.env.USE_MOCK || false

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [IconsResolver(), ElementPlusResolver()]
      }),
      Components({
        resolvers: [IconsResolver(), ElementPlusResolver()]
      }),
      Icons({
        autoInstall: true
      }),
      viteMockServe({
        mockPath: 'mock',
        supportTs: false,
        localEnabled
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
