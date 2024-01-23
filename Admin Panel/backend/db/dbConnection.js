const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGO_URI


const connect = async ()=>{
    // console.log(uri);
    return new Promise((resolve)=>{
        let conn = mongoose.connect(uri,{dbName:"crmDB"})
        if(conn){
            console.log("connect to mongodb");
            resolve({status:true})
        }
    })
}

module.exports = connect

