const express = require('express');

const app = express();


app.use('/user',(req,res)=>{
    res.send("HAHAAHAHAHAHA")
})

app.get('/user',(req,res)=>{
    res.send({"Name":"Vikas Kumaer",
        "Age":25,
        "Occupation":"Software Engineer"
    })
})

app.post('/user',(req,res)=>{
    res.send("Data Sucessfully loaded to the Database!");
})

app.delete('/user',(req,res)=>{
    res.send('Data succesfully deleted from the Database');
})

app.listen(3000,()=>{
    console.log("server is running on port {$3000}");
})