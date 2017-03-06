const typescript = require('rollup-plugin-typescript');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

module.exports = config => {
  config.set({
    frameworks: ['jasmine'],
      files: [
        'src/**/*.spec.karma.ts',
        'src/**/*.spec.karma.tsx'
      ],
    preprocessors: {
      ["src/**/*.spec.karma.{ts,tsx}"]: ["rollup"]
    },
    browsers: ['Chrome'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-rollup-plugin'),
    ],
    rollupPreprocessor: {
      plugins: [
        typescript(),
        nodeResolve(),
        commonjs({
          include: 'node_modules/**',
          namedExports: {
            'node_modules/react/react.js': ['createElement', 'createClass'],
            'node_modules/react-dom/index.js': ['render']
          }
        }),
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        babel({
          exclude: 'node_modules/**'
        }),
      ],
      format: 'iife',
      sourceMap: 'inline'
    }
  });
};
