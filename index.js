import 'dotenv/config'
import "./database/connectdb.js"

import express from 'express'
import authRouter from './routes/auth.route.js'
const app= express()
app.use(express.json())
app.use('/',authRouter)


app.get('/',(req,res)=>{res.json({ok:true})})
const PORT= process.env.PORT || 4000

app.listen(PORT, ()=>{console.log('Servidor funcionando 🚀🚀🚀')})