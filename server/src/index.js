const express = require('express');
const graphlHTTP=require('express-graphql');
const schema = require('./schema/index');
const app = express();
const cors= require('cors')

app.use(cors());
app.use('/graphql',graphlHTTP({
    schema

}))
const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`All good`);
})