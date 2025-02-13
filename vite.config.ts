import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoPrefixer from 'autoprefixer';
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';
import legacy from '@vitejs/plugin-legacy';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import postcssViewportHeightFix from "postcss-vh-fix";
import fs from 'fs';

const base64SetPlugin = (limit = 4096) => {
  return {
    name: "base64-set-plugin",
    async transform(_, id) {
      // 只处理图片文件
      if (!/\.(png|jpg|svg)$/.test(id)) return;
      //获取文件数据
      const stat = await fs.promises.stat(id);
      // 如果文件大小超过限制则不转换，大于4kb的图片转换为base64不划算
      if (stat.size > limit) return;
      // 读取文件并转换为 base64
      const buffer = await fs.promises.readFile(id);
      const base64 = buffer.toString("base64");
      // 返回转换后的代码
      const dataUrl = `data:image/${id.split(".").pop()};base64,${base64}`;
      return {
        code: `export default ${JSON.stringify(dataUrl)}`,
      };
    },
  };
};

const __dirname = path.resolve()
export default defineConfig({
  plugins: [
    commonjs(),
    react(),
    base64SetPlugin(),
    legacy({
      targets: ['defaults', 'not IE 11', 'last 2 versions', '> 1%']
    }),
  ],
  base: '/event/',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@/common': path.resolve(__dirname, './common'),
      '@/mb': path.resolve(__dirname, './mb/src'),
      '@/pc': path.resolve(__dirname, './pc/src'),
      '@/component': path.resolve(__dirname, './component'),
    }
  },
  build: {
    commonjsOptions: { include: [] },
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: (id) => {
          if(id.includes("node_modules")) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        entryFileNames: () => {
          return `js/[name].${new Date().getTime()}.js`;
        },
        chunkFileNames: () => {
          return `js/[name].${new Date().getTime()}.js`;
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssViewportHeightFix,
        autoPrefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 11'],
          grid: true
        }),
        // pc的设计稿一般是是1920，移动的设计稿一般是750
        postcsspxtoviewport8plugin ({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: file => {
            let num = 1920;
            if (file.indexOf('m_') !== -1) {
              num = 750;
            } else {
              num = 1920;
            }
            return num;
          },
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: [], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
          // landscape: true, // 是否处理横屏情况
          // landscapeUnit: 'vw',
          // landscapeWidth: 1920,
        }),
      ]
    }
  }
})
