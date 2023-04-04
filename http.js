const http = require('http');

const server= http.createServer((reqst,respn)=>{
    respn.write('ritik gupta');
    respn.end();
});
server.listen(5000);