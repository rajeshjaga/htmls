const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    var path = "../"
        //switch CASE
    switch (req.url) {

        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/login":
            path += "login.html";
            res.statusCode = 301;
            break;
        case "/submit":
            path += "404.html";
            res.statusCode = 301;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {

            res.end(data);
        }
    })

});
server.listen(3000, "localHost", () => {
    console.log("listening");
})