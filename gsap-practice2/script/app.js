var http = require(http);
var date = import('./date');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('the date is ' + mydateTime());
    res.end();
}).listen(8080);