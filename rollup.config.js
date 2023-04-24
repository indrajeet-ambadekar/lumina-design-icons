import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';

const config = {
  input: 'icon-src/index.js',
  output: {
    file: 'icon-dist/icon-lib.js',
    // format: 'esm',
  },
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
    filesize(),
  ],
};

export default config;