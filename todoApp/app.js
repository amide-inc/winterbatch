const express = require('express');
const app = express();
const mongoose = require('mongoose');
const taskRoute = require('./routes/task-route')
const port = process.env.port || 8080;

mongoose.connect("mongodb+srv://root:root@todoapp.xcphd.mongodb.net/tododb",
    (err) => {
        if(err) {
            console.log("Db is not connecting...")
        }else{
            console.log("Db connected")
        }
    })

app.use('/task', taskRoute);
app.get('/', (req, res) => {
    res.send("My world")
});


app.listen(port, () => {
    console.log("server is connected at port : ", port);
});

