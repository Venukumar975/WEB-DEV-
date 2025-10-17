// function Save(){
//     console.log("Save btn clicked")
// }
// some professional way to invoke a function on click event


const inputBtn = document.getElementById("input-btn")
// let inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true , currentWindow : true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

function render(leads){
    let listItems = " "

     for (let i = 0;i < leads.length ; i++){

    
         listItems += `
         <li>
             <a target = '_blank' href = '${leads[i]}'>     
                 ${leads[i]}
             </a>
         </li>` // Template string

     }

        ulEl.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    //console.log("Save btn clicked from addEventListener")
    //myLeads.push("www.example.com")
    myLeads.push(inputEl.value)

    //console.log(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
    
})

















