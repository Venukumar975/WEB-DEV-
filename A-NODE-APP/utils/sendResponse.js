export function sendResponse(res,statusCode,contentType,payload){

  res.setHeader('Content-Type',contentType)
  res.statusCode = statusCode
  //res.writeHead(200,{'Content-Type':'text/html'})
  res.end(payload)
}