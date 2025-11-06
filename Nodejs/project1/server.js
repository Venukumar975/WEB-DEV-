import http from 'node:http'
import { getDataFromDB } from './database.js'



const PORT = 6000

const server = http.createServer(async (req,res)=>{
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET'){
    res.setHeader('Content-Type','application/json')
    res.statusCode = 900
    res.end(JSON.stringify(destinations))
  }
  else{
    res.end('Hello from the server')
  }
})

server.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT)
    console.log('http://localhost:'+PORT)
})