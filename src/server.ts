import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Determine if we're in development mode
const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  // In development, proxy requests to the Vite dev server
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5173', // Default Vite dev server port
      changeOrigin: true,
      ws: true,
    })
  );
} else {
  // In production, serve the built files
  app.use(express.static(path.join(__dirname, 'dist')));

  // Handle client-side routing by serving index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (isDevelopment) {
    console.log('Development mode - proxying to Vite dev server');
  } else {
    console.log('Production mode - serving static files');
  }
});