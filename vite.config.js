import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        page1: './page1.html',
        page2: './page2.html',
        page3: './page3.html',
        // Add more pages as needed
      }
    }
  }
})
