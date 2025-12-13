import express from 'express';
const app = express();
import userroute from './userroute.js';
app.use('/user', userroute);
app.listen(3000, ()=>{
    console.log("Server is running")
})