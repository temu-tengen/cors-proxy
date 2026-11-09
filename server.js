var cors_proxy = require('cors-anywhere');

// Listen on a specific host and port, or default to port 8080
var host = '0.0.0.0';
var port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allows all origins (or specify your webOS domain array)
    requireHeader: ['origin', 'x-requested-with'], // Require headers to block open-proxy abuse
    removeHeaders: ['cookie', 'cookie2'] // Strip cookies for safety
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
