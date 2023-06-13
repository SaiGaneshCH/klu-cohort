const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.send('Hello World')
})
app.get('/',function(req,res){
    res.send('Hello World,This is Ganesh')
})
app.listen(3000,()=>{
    ('listening on port 3000');
})