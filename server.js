var cors_proxy = require('cors-anywhere');

var host = '0.0.0.0';
var port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allows all origins
    // REMOVED requireHeader so standard iframe requests won't throw an error
    removeHeaders: ['cookie', 'cookie2'] // Strip cookies for safety
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
