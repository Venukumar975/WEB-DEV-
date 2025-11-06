import http from 'node:http'

const PORT = 6000
const server = http.createServer((req,res)=>{
  if (req.url === '/api'){
    res.end('Here is your data from server')
  }
  else{
    res.end('Hello from the server')
  }
})

server.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT)
    console.log('http://localhost:'+PORT)
})