'use strict';
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connect = require('./db/dbConnection')
const apiRouter = require('./Router/apiRouter')
const {PORT,BASE_URL} = process.env
const server = express()

server.use(cors())
server.use(express.json())

server.get("/",(req,res)=>{
    res.json("server is running")
  })

// api route main entry token genenrate
server.use("/api",apiRouter);

server.listen(PORT,async()=>{
    try {
         await connect()
        console.log(`server is running on ${BASE_URL}${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})
