
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send({hi:'there'});
})
app.listen(5000);
const Port=process.env.Port||5000;
app.listen(Port);