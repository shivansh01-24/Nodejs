import fs from 'fs';
const readStream = fs.createReadStream('test.txt', {encoding:'utf-8', start:0, end:3});

readStream.on('data', (chunk)=>{
console.log("Recevied chunk:\n", chunk);
})

readStream.on('end', ()=>{
    console.log("Finished reading the file")
});

readStream.on('error', (err)=>{
    console.error("Error in reading the file", err);
})