import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { DefinePlugin, type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }

    // @ts-ignore
    config.resolve.modules = [paths.src, 'node_modules']
    config.resolve?.extensions?.push('.tsx', '.ts')
    // @ts-ignore
    config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })
    config.module?.rules?.push(buildCssLoader(true))
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
    }))
    return config
}
