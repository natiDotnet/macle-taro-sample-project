import path from 'path'
import { defineConfig, type UserConfigExport } from '@tarojs/cli'

export default defineConfig(async (merge) => {
  const baseConfig: UserConfigExport = {
    projectName: 'macle-taro-sample',
    date: '2026-11-04',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
      '@tarojs/plugin-framework-react',
      [
        path.resolve(__dirname, '../../plugin-platform-macle'),
        {
          tailwindcss: true
        }
      ]
    ],
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      enable: false
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false
        }
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    return merge({}, baseConfig, require('./dev').default)
  }
  return merge({}, baseConfig, require('./prod').default)
})
