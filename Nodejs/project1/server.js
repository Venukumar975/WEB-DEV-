import http from 'node:http'
import { getDataFromDB } from './database.js'



const PORT = 6000

const server = http.createServer(async (req,res)=>{
  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET'){
    res.setHeader('Content-Type','application/json')
    res.statusCode = 200
    res.end(JSON.stringify(destinations))
  }
  else if (req.url.startsWith('/api/continent') && req.method === 'GET'){
     const continent = req.url.split('/').pop()
     const filterData = destinations.filter((destinations) => {
      return destinations.continent.toLowerCase() === continent.toLowerCase()
     })
    res.setHeader('Content-Type','application/json')
    res.statusCode = 200
    res.end(JSON.stringify(filterData))
  }
  else{
    res.statusCode = 404
    res.setHeader('Content-Type','application/json ')
    res.end(JSON.stringify({
      error : "route not found",
      message : "The requested route does not exist"
    }))
    
  }
})

server.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT)
    console.log('http://localhost:'+PORT)
})