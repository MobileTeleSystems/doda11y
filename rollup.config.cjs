const dts = require('rollup-plugin-dts')
const esbuild = require('rollup-plugin-esbuild')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel');

exports.default = [
  {
    input: `src/index.ts`,
    external: ['react'],
    plugins: [esbuild.default()],
    output: [
      {
        file: `build/index.js`,
        plugins: [getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          targets: {
            node: '6.0',
            esmodules: true,
          },
        })],
        format: 'module',
        sourcemap: true
      },
    ]
  },
  {
    input: `src/index.ts`,
    plugins: [dts.default()],
    external: ['react'],
    output: {
      file: `build/index.d.ts`,
      format: 'es'
    },
  }
]
