import {createServer} from 'net';
const server = createServer((socket)=>{
    console.log('Client connected');

    socket.on('data', (data)=>{
        console.log('Received', data.toString());
        socket.write("Hello from server");
    })

    socket.on('end', ()=>{
        console.log('Cient disconnected');
    })
})
server.listen(2000, ()=>{
    console.log("Server is listening on port 2000")
})