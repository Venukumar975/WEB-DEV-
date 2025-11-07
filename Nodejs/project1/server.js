import http from 'node:http'
import { getDataFromDB } from './database.js'
import { sendJSONResponse } from './utility/sendJSONResponse.js'
import { getFilteredData } from './utility/getFileterdData.js'

const PORT = 6000

const server = http.createServer(async (req,res)=>{
  const destinations = await getDataFromDB()
  const urlObj = new URL(req.url, `http://${req.headers.host}` )
  const queryObj = Object.fromEntries(urlObj.searchParams)
  if (urlObj.pathname === '/api' && req.method === 'GET'){
    sendJSONResponse(res,200,destinations)
    console.log(queryObj)
  }
  else if (req.url.startsWith('/api/continent') && req.method === 'GET'){
     const continent = req.url.split('/').pop()
     const filterData = getFilteredData(destinations , 'continent', continent)
      
    sendJSONResponse(res,200,filterData)

  }
   else if (req.url.startsWith('/api/country') && req.method === 'GET'){
     const country = req.url.split('/').pop()
     const filterData = getFilteredData(destinations,'country',country)
     
    sendJSONResponse(res,200,filterData)

  }
  else{
    
    sendJSONResponse(res,404,{
      error : "route not found",
      message : "The requested route does not exist"
    })

  }
})

server.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT)
    console.log('http://localhost:'+PORT)
})