import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    middlewareMode: false, // 기본(정상) 모드
  },
  plugins: [
    {
      name: 'force-pdf-download',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/multi-line.pdf') {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="multi-line.pdf"');
          }
          next();
        });
      }
    }
  ]
});
