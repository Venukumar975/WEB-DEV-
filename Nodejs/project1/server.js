import http from 'node:http'
import { getDataFromDB } from './database.js'



const PORT = 6000
const destinations = await getDataFromDB()

const server = http.createServer((req,res)=>{
  if (req.url === '/api' && req.method === 'GET'){
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