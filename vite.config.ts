import { defineConfig, loadEnv } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";
import tsconfigPaths from "vite-tsconfig-paths";

const viteEnv = loadEnv("", process.cwd());

const isProd = viteEnv.VITE_ENV === "production";

const config = defineConfig({
  ...(isProd
    ? {
      server: {
        https: {
          key: fs.readFileSync(__dirname + "/keys/fabletopia.key", "utf-8"),
          cert: fs.readFileSync(__dirname + "/keys/fabletopia.crt", "utf-8"),
        },
      },
    }
    : {}),
  plugins: [
    react(),
    tsconfigPaths(),
    vitePluginFaviconsInject("./src/assets/images/favicon/favicon.svg"),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
})

export default config;
