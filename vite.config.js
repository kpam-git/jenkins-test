import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {fileURLToPath, URL} from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['jsx', 'vue', 'js', 'json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/globalstyle.scss"; '
      }
    }
  }
})
