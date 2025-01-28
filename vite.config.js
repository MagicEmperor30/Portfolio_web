import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures build output goes into the 'dist' folder
=======
   plugins: [react()],
  build: {
    outDir: 'dist', 
>>>>>>> c607b8b49d53ddfb469f1bf148c3ba2429144ebd
  },
})
