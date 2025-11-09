// GetHandlers
import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'


export async function getHandlers(res){
    const data =  await getData()
    return sendResponse(res,200,'application/json',JSON.stringify(data)
    )

}




//PostHandlers

export  function postHandlers(req,res) {
    console.log("POST request received");
    
}
