var express=require('express');
var app= express();


app.use(express.static('public'));
app.get('/',(request,response)=>{
    
    response.sendFile('index.html');
});


var port= process.env.PORT || 8080;

var server=app.listen(port,(req,res)=>{
    console.log('server is running',__dirname);
});