async function fetchData(){
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{method: 'GET'})
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data  = await response.json()
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
}
fetchData()