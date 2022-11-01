const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    //if the user is requesting a page that does not exist
    res.end(`<h1> Opps!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home
    `)
    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)
