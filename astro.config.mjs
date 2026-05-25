import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 1. Importamos el nuevo plugin

export default defineConfig({
  // 2. Si tenías tailwind() dentro de integrations: [], ¡ELIMÍNALO!
  integrations: [], 
  
  vite: {
    plugins: [tailwindcss()], // 3. Lo agregamos aquí dentro
  },
});