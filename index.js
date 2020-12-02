require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 4000;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('views/landing')
})

app.listen(4000)