// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration
app.use(
  '/restaurants',
  createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true,
    pathRewrite: {
      '^/restaurants': '/api/restaurantsmenu'
    }
  })
);

// Serve the static files
app.use(express.static('dist'));

// Start the server
const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
