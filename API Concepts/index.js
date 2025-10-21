// https://apis.scrimba.com/bored/api  : base url

// /activity                           : endpoint
async function getSuggesstion(){
    const response =  await fetch("https://apis.scrimba.com/bored/api/activity")
    const data = response.json()
    console.log(data)
}
getSuggesstion()

