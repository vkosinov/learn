import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@welldone-software/why-did-you-render',
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // Needed for `useSelector` tracking in wdyr.tsx: https://github.com/welldone-software/why-did-you-render/issues/85
      // 'react-redux': 'react-redux/dist/react-redux.js',
    },
  },
})
