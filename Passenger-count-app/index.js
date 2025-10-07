//document.getElementById("count-el").innerText = 5 

// **************** Intro To JS ****************

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// **************** Incrementing a number ****************
// initialise count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

let countEl = document.getElementById("count-el")
let count = 0
function increment() {
   count += 1
   //document.getElementById("count-el").innerText = count 
   countEl.innerText = count  
}
function decrement(){
    count -= 1
    countEl.innerText = count
}

let SaveEL = document.getElementById("save-el")
function save(){
    SaveEL.innerText += count + " , "
}