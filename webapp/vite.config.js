import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";
import { proxyConfiguration } from "./proxy";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls}
      }),
      quasar({
        sassVariables: '@/quasar-variables.sass'
      }),
      ViteEjsPlugin({
        title: "GESTIÓN LICENCIAS",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "../public",
    },
    server: {
      proxy: proxyConfiguration,
    },
});