import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← This import is crucial!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← Add this line! (no config object needed)
  ],
  base:'/Electroparts-industrial/'
})