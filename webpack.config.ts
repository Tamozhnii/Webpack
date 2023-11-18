import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildPath, BuildMode } from './config/build/types/types'

interface EnvVariables {
  mode: BuildMode
  port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'production',
    paths,
  })

  return config
}
