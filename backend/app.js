const express = require('express');
const app = express()
const port = process.env.port || 8080;
const itemRoute = require('./routes/item');

app.get('/', (req, res) => {
    res.send("app get route");
});
app.use('/item', itemRoute);
app.listen(port, ()=> {
    console.log("Server is started at port", port);
})