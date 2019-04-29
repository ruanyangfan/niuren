const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser  = require('cookie-parser')
const userRouter = require('./userRouter')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user',userRouter)
app.listen(9093,function(){
    console.log('server is running')
})