const http = require('http')

function myServer(req, res){
    res.writeHead(200);
    res.end("Bonjour mon amis");
};

const bigServer = http.createServer(myServer);

bigServer.listen(9090, () => {
    console.log(`Listening on 9090`);
})


