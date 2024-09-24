const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://stok777.by',
            changeOrigin: true,
            secure: true,
        }),
    );
}