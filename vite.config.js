import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    minify: 'esbuild', // Ensure ESBuild is used for minification
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all node_modules into a single 'vendor' chunk
          }

          // Additional manual chunking for large components or libraries
          if (id.includes('src/components/LargeComponent')) {
            return 'large-component'; // Custom chunk for a specific large component
          }
        }
      }
    }
  }
});

