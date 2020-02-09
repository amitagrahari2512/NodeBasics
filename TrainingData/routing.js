const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if (req.url == '/osheen') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hi osheen');
    } else if (req.url == '/login') {
        if (req.method == 'POST') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            collectRequestData(req, result => {
                res.end('<html><head><title>Login Successful</title></head><body>' +
                    result+
                    '</body></html>');
            });
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><head><title>Login</title></head><body><form action="/login" method="POST">' +
                'Username: <input type="text" name="username"><br><br>Password: <input type="password" name="password"><br><input type="submit" value="Submit"></form></body></html>');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found\n');
    }
}).listen(port, hostname);

function collectRequestData(request, callback) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(body)
        });
}

console.log('Server running at http://' + hostname + ':' + port + '/');
