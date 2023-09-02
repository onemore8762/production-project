import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        viteTsconfigPaths(),
        svgr({ exportAsDefault: true }),
        react()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend')
    }
})
