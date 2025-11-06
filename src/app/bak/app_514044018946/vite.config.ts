// @ts-nocheck

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 自定义插件：用于在终端打印前端错误
const errorLoggerPlugin = () => ({
  name: 'error-logger-plugin',
  configureServer(server) {
    server.middlewares.use('/log-error-from-frontend', (req, res) => {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        const error = JSON.parse(body);
        console.error(
          '[Browser Runtime Error]\n' +
          `Error: ${error.message}\n` +
          `Stack Trace:\n${error.stack}`
        );
        res.end('Error logged on server.');
      });
    });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === 'development' ? errorLoggerPlugin() : null,],
  server: {
    allowedHosts: true,
    hmr: {
      path: '/ws',
    }
  },
}));
