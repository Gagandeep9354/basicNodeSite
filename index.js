const http = require('http');
const fs = require('fs');

const port = process.env.port || 8080;
const httpServer = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    if (req.url == "/"){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } else if (req.url == "/about") {
        res.statusCode = 200;
        const data = fs.readFileSync('about.html');
        res.end(data.toString());
    } else if (req.url == "/contact-me") {
        res.statusCode = 200;
        const data = fs.readFileSync('contact-me.html');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        const data = fs.readFileSync('404.html');
        res.end(data.toString());
    }
})

httpServer.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})