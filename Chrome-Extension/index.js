// function Save(){
//     console.log("Save btn clicked")
// }
// some professional way to invoke a function on click event


const inputBtn = document.getElementById("input-btn")
// let inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = []
const inputEl = document.querySelector("#input-el")
inputBtn.addEventListener("click",function(){
    //console.log("Save btn clicked from addEventListener")
    //myLeads.push("www.example.com")
    myLeads.push(inputEl.value)

    //console.log(myLeads)
    renderLeads()
    
    
})

function renderLeads(){
    let listItems = " "

     for (let i = 0;i < myLeads.length ; i++){

    //    listItems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    //     // Another Ways to acheive the above task
    //     // create an element -> <li>
    //     // set text content
    //     // append to ul
    //     // const li = document.createElement("li")
    //     // li.textContent = myLeads[i]
    //     // ulEl.append(li)
    //     // But the first one is easier than the second
         listItems += `
         <li>
             <a target = '_blank' href = '${myLeads[i]}'>     
                 ${myLeads[i]}
             </a>
         </li>` // Template string

     }

        ulEl.innerHTML = listItems
}















