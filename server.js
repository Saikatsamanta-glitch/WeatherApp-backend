const express = require('express');
const axios = require('axios');
const app = express();
const port =5000;
const bodyParser = require('body-parser');
// localhost: 5500
// network  : port number

app.set('view engine','ejs');


// template engine [ejs]
app.use(bodyParser())

app.use(express.static('public'))

// static files: html, css, js
// template in node js : ejs
// middleware
app.get('/',(req,res)=>{
    res.render('index.ejs',{data:null})
})
app.post('/',async(req,res)=>{
    const {city} = req.body;
   
    var data;
    if(city!=""){
        try{
            const datas=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6698a520438f6a90c6799c68cd863317`)
        data=(datas.data.main)
        }
        catch{
            data=null
        }
    }else{
        data=null
    }
    console.log(data)

    res.render('index.ejs',{data:data})
})

app.listen(port,()=>{
    console.log(`Connected to port ${port} 🚀`)
})

// weather app