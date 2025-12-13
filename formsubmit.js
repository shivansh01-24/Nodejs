// import express from 'express';
// const app = express()
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// app.use(express.urlencoded({extended:true}))
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'form.html'));
// })

// app.post('/submit',(req, res)=>{
//     const {username, email} = req.body;
//     console.log(req.body)
//     res.send()
//     // res.send(`
//     //     <h1>Form submitted</h1>
//     //     Name: ${username}
//     //     Email: ${email}
//     //     `)
// })
// app.listen(3000, ()=>{
//     console.log("server is running")
// })


import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});
app.post('/submit', (req, res) => {
    // const { username, email } = req.body;
    const { username, email } = req.body.details;
    console.log(req.body);
    fs.writeFile('dataput.txt', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("data saved");
        }
    });
    // res.send(`
    //     <h1>Form submitted</h1>
    //     Name: ${username}<br>
    //     Email: ${email}
    // `);
    res.send(`
        <h1>Form submitted</h1>
        Name: ${username}<br>
        Email: ${email}
    `);
});
app.listen(3000, () => {
    console.log("server is running");
});
