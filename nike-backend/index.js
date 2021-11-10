/**
 * at first installing the required packages using npm
 * after installing use the js file for giving commands
 * 
 */


 const express=require('express')    //importing the express modules
 const mongoose = require('mongoose')  //importing the mongoose modules
 const url= 'mongodb+srv://siva:Siva0127@cluster0.4agkn.mongodb.net/siva?retryWrites=true&w=majority'   //here we are connecting to database using url
 
 const app=express()
 const cors = require('cors')
 const PORT = 1109;

 app.use(cors())

 mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
     console.log('connection success')
 })   //connecting to mongoose 
 
 const con =mongoose.connection;                 // connecting to database
 
 con.on("open",()=>{                             //giving an open event to make sure it is running.
     console.log(" getting connected...")
     
 })
 
 
 app.use(express.json())                        //using express in json
 
 
 const sivaRouter=require('./routersss/help')    //importing and store the data
 app.use('/',sivaRouter);
 
 
 
 app.listen(PORT,function(){         // connecting the local host using port number
     console.log('server started')
 })
