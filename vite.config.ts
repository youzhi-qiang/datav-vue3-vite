import { ConfigEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
 

  return {
    resolve: {
      alias,
    },
 
    build: {
      outDir: 'dist', // 设置不同的输出目录
      rollupOptions: {
        output: {
          manualChunks: {
            echarts: ["echarts"],
          },
        },
      },
    },
    plugins: [
      vue(),
 
    ],
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  };
};
