// GetHandlers
import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'

export async function getHandlers(res){
    const data =  await getData()
    return sendResponse(res,200,'application/json',JSON.stringify(data)
    )

}




//PostHandlers

export async function postHandlers(req,res) {
       const rawBody = await parseJSONBody(req)    
       console.log(rawBody)
}
