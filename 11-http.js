const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home Page')
    }
    if(res.url === '/about'){
        res.end('Here is our about')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)