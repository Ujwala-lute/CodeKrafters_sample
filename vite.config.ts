import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "src/styles/variables.scss";`, // If you had global SCSS variables
    //   },
    // },
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //   },
    // },
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@use "./src/assets/scss/variables" as *; @use "./src/assets/scss/mixins" as *;`
    //   }
    // }
  },
  
})
