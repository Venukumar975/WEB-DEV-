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