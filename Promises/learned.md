1. When we use .fetch("") method for fetching data from api we should chain it to .then if we want to access our resolved promise .avatar
   if our promise got rejected then should use either .catch or chain it with .finally (which executes whether our promise is resolved or rejected)

2 . When we impleemnt a async function to request an api try to write the code in try/catch blocks since our request can be either resolved or    rejected so to handle these rejections we should use catch blcoks again catch blocks should have try blocks (mandatory)

              ******** Handling Errors **********
3. async function fetchData(){
    try {
        const response = await fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
        const data = await response.json()
        console.log(data)

    }
    catch(err){
        console.log(err)

    }
    finally{
        console.log("fetch attempt finished")
    }
}
fetchData()


The above code written inseide a async function can be done in same way 
fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => console.log(data))
.catch(err=>console.log(err))
.finally(()=>console.log("fetch attempt finished"))

both are same but the first one is for automatic multipel calls(sice it is a function) and 2nd one requires manual process(we must either run it or write code for everything).

Note : await means our response is being processed so it takes some time. without using await we will just get a 'Promise {}' object with no data. Also await is only valid in async functiosn


4. Status Code Basics
  200-299 = successful response : True
  404 = not found ( the data was not found ) : False
  500 = server error : False

  So these type of checks just checks whether our request was successful from the perspective of the server They arent errors thrown by fetch . 


5 . *** response.ok *** 
   async function fetchData(){
    try {
        const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
        if (!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log(data)

    }
    catch(err){
        console.log(err)

    }
    finally{
        console.log("fetch attempt finished")
    }
}
fetchData()

so we use response.ok to throw an " custom error " if our http response was False ( either 404 , 500 ...) and this error is catched by the catch block and shown in console





