// import http from 'http';
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type':'text/plain'})
//     console.log("New request from the client");
//     res.write("Hello from node js");
//     res.write("hELLO AGAIN")
//     res.end();
// })
// server.listen(3000, ()=>{
//     console.log("Server is running at 3000");
// })

import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res)=>{
    
    if(req.url=='/'){
        const logmsg = `Request received on ${new Date().toLocaleString()}`
        fs.appendFile('log.txt', logmsg, (err)=>{
            if(err){
                console.log("Error writing into the file")
            }
            else{
                console.log("Log written into the file");
            }
        })
        res.writeHead(200, {'content-type':'text/html'});
        res.end('<h1 style=color:red;background-color:pink>Home Page<h1>');
    }
    else if(req.url == '/about')
    {
        res.writeHead(200, {'content-type':'text/plain'});
        res.end('About page');
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'content-type':'text/plain'});
        res.end('Contact page');
    }
    else{
        res.writeHead(404)
        res.end("Not found");
    }
})
server.listen(3000, ()=>{
    console.log("Running");
})