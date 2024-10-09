const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.get('/sensor-data',(req,res)=>{
    res.json({
        "rows":[
        {data:'2024-10-01 20:09:00',k:125,n:150,p:111,umidade:0.5},
        {data:'2024-10-01 20:09:00',k:125,n:150,p:111,umidade:0.5},
        {data:'2024-10-01 20:09:00',k:125,n:150,p:111,umidade:0.5},
        {data:'2024-10-01 20:09:00',k:125,n:150,p:111,umidade:0.5},
        {data:'2024-10-01 20:09:00',k:125,n:150,p:111,umidade:0.5}
        ],
        "count":5
    })
}) 

app.listen(port,()=>{
    console.log('Servidor rodando na porta '+port)
})







