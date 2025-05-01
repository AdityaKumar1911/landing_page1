import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://skillblazeai.com/ai_powered_filmmaking/', // ← important
  plugins: [react()],
});


