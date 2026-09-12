import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Permite abrir a versão compilada diretamente pelo navegador via file://.
export default defineConfig({ base: './', plugins: [react()] });
