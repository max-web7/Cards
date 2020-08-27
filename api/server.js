const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// for test working server
// app.get('/',(req,res)=>{
//     res.send("Hello Server!")
// })


app.listen(PORT, ()=>console.log(`[OK] Server is running on Port: ${PORT}`))
