import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      staticImport: true,
    }),
  ],
  build: {
    lib: {
      name: 'cabinet_ui_kit',
      entry: ['./src/index.ts', './src/constants/colors.ts'],
      fileName: (format, name) => {
        if (format === 'es') return `${name}.js`

        return `${name}.${format}`
      },
    },
    rollupOptions: { external: ['react', 'react/jsx-runtime', 'react-dom'] },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename) => {
        filename = filename.split('/').slice(-1)[0].split('.')[0]
        filename = `${filename[0].toLowerCase()}${filename.slice(1)}`

        const lowerFilename = filename.toLowerCase()
        const lowerName = name.toLocaleLowerCase()
        if (lowerName.includes(lowerFilename)) return name
        if (lowerFilename === lowerName) return filename

        return `${filename}__${name}`
      },
    },
  },
})
