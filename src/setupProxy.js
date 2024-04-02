// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/restaurants', // Match any request starting with '/restaurants'
    createProxyMiddleware({
      target: 'my-swiggybackend.onrender.com', // Your backend server URL
      changeOrigin: true, // Needed for virtual hosted sites
      pathRewrite: {
        '^/restaurants': '/api/restaurantsmenu' // Rewrite '/restaurants' to '/api/restaurantsmenu'
      }
    })
  );
};
