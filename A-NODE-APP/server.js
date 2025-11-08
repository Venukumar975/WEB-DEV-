import http from 'node:http'
import path from 'node:path'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'


const __dirname = import.meta.dirname


console.log(await getData())

const PORT = 8000


const server = http.createServer(async (req,res)=>{
    await serveStatic(req,res,__dirname)
  
})

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}\n and running on , http://localhost:${PORT}`)
})