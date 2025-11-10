import http from 'node:http'
import path from 'node:path'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'
import { getHandlers } from './handlers/routeHandlers.js'
import { postHandlers } from './handlers/routeHandlers.js'

const __dirname = import.meta.dirname


console.log(await getData())

const PORT = 8000


const server = http.createServer(async (req,res)=>{


   if (req.url.startsWith('/api')){
    if(req.method === 'GET'){
        return await getHandlers(res)
    }
    else if(req.method === 'POST'){
     await postHandlers(req,res)
     return 
    }
   }





    else if (!req.url.startsWith('/api')){

     await serveStatic(req,res,__dirname) // serving index file and html files

    }
  
})

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}\n and running on , http://localhost:${PORT}`)
})