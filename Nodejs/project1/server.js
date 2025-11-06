import http from 'node:http'


const PORT = 5000
const server = http.createServer((request , response) => {
  response.end("Hello from the server")
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

