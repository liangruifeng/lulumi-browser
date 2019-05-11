'use strict'

const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')

const baseConfigs = require('../../.electron-vue/webpack.renderer.config')

// Set BABEL_ENV to use proper preset config
process.env.BABEL_ENV = 'test'

let webpackConfig = merge(baseConfigs[0], {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"test"',
      'process.env.TEST_ENV': '"unit"'
    })
  ]
})

// don't treat dependencies as externals
delete webpackConfig.entry
delete webpackConfig.externals
delete webpackConfig.output.libraryTarget

module.exports = (config) => {
  config.set({
    browsers: ['visibleElectron'],
    client: {
      useIframe: false
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    customLaunchers: {
      'visibleElectron': {
        base: 'Electron',
        flags: ['--show'],
        require: path.join('test', 'unit', 'override.js')
      }
    },
    frameworks: ['mocha', 'chai'],
    files: ['./renderer.js'],
    preprocessors: {
      './renderer.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
