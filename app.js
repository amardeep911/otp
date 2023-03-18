const express = require("express");
const app = express();

const authRoutes = require('./routes/authRoutes')

app.use('/auth', authRoutes)

app.listen(8000, (req,res)=> {
    console.log('server is running')
})