import http from 'node:http'
import { getDataFromDB } from './database.js'
import { sendJSONResponse } from './utility/sendJSONResponse.js'
import { getFilteredData } from './utility/getFileterdData.js'
import { getDataByQueryParams } from './utility/getDataByQueryParams.js'

const PORT = 6000

const server = http.createServer(async (req,res)=>{
  const destinations = await getDataFromDB()
  const urlObj = new URL(req.url, `http://${req.headers.host}` )
  const queryObj = Object.fromEntries(urlObj.searchParams)
  if (urlObj.pathname === '/api' && req.method === 'GET'){
    let filteredData = getDataByQueryParams(destinations, queryObj)
    sendJSONResponse(res,200,filteredData)
    console.log(queryObj)
  }
  else if (req.url.startsWith('/api/continent') && req.method === 'GET'){
     const continent = req.url.split('/').pop()
     const filteredData = getFilteredData(destinations , 'continent', continent)
      
    sendJSONResponse(res,200,filteredData)

  }
   else if (req.url.startsWith('/api/country') && req.method === 'GET'){
     const country = req.url.split('/').pop()
     const filteredData = getFilteredData(destinations,'country',country)
     
    sendJSONResponse(res,200,filteredData)

  }
  else{
    res.setHeader('Content-Type','application/json')
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