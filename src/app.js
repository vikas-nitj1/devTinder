const express = require('express');
const app = express();

const {authAdmin,authUser} =  require('./Middlewear/Auth.js');



//middlewear is the chain of request till the request handler

app.get('/admin/getDetails',authAdmin,(req,res,next)=>{
    res.send("get All the details");
})

app.use('/abcd/:UserId/:Name/:Adresss',(req,res)=>{
    console.log(req.params);
    res.send("HAHAAHAHAHAHA")
})

app.get('/user',authUser,(req,res,next)=>{
    console.log('In the Response 1 Scenrio');
    //res.send('Hello from user')
    next();
    //res.send('Hello from user')

},(req,res,next)=>{
    console.log('In the Response 2 Scenrio');
    next();
    //res.send("Response 2");


})

app.get('/user',(req,res,next)=>{
    //res.send('Response3');
    console.log('In the Response 3 Scenrio');
    next();
})
app.get('/user',(req,res,next)=>{
    console.log('In the Response 4 Scenrio');
    res.send('Response4');
    
})

// app.get('/user',(req,res)=>{
//     res.send({"Name":"Vikas Kumaer",
//         "Age":25,
//         "Occupation":"Software Engineer"
//     })
// })

// app.post('/user',(req,res)=>{
//     res.send("Data Sucessfully loaded to the Database!");
// })

// app.delete('/user',(req,res)=>{
//     res.send('Data succesfully deleted from the Database');
// })

app.listen(3000,()=>{
    console.log("server is running on port {$3000}");
})