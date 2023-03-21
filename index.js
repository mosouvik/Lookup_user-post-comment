const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

const port=process.env.PORT|| 400;


app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));


app.use(bodyparser.json());



const Route=require('./routes/web');
const { allowedNodeEnvironmentFlags } = require('process');
app.use(Route);
const DB="mongodb+srv://nodeClassjan:BrnrXRpwEfvb35kG@cluster0.4axmojt.mongodb.net/Nested-Lookup_mongo"
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    app.listen(port,()=>{
        console.log("DB Connected.......");
        console.log(`server running http://localhost:${port}`);
    })
}).catch(err=>{
    console.log(err);
})