// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" 
// for all incoming HTTP requests. You can use any library or framework of your choice.

const express=require('express')
const app=express()

//by the get api we can get data from datbase.
app.get('/api/user',async(req,res)=>{
    return res.status(200).send("Hello World")
})

//by the post api , we can take the input from the user and store in out database.
app.post('/api/user',async(req,res)=>{
    return res.status(201).send("Hello World")
})

//by the put api , we can update the data.
app.put('/api/user',async(req,res)=>{
    return res.status(200).send("Hello World")
})

//by the delete api, we can delete the data.
app.delete('/api/user',async(req,res)=>{
    return res.status(200).send("Hello World")
})

//here we define the server running port
app.listen(3000,()=>{
    console.log('server running on port 3000')
})