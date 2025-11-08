import http from 'node:http'
import path from 'node:path'
import { serveStatic } from './utils/serveStatic.js'


const __dirname = import.meta.dirname

const PORT = 8000
const server = http.createServer((req,res)=>{
  serveStatic(__dirname)
  res.setHeader('Content-Type','text/html')
  res.statusCode = 200
  //res.writeHead(200,{'Content-Type':'text/html'})
  res.end('<html> <h1> This server is working </h1></html>')
  
})

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}\n and running on http://localhost:${PORT}`)
})