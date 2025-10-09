let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard] // array
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")   // More dynamic
let cardsEl = document.querySelector("#card-el")

function StartGame(){
    RenderGame()
}
function RenderGame(){
    sumEl.textContent = "Sum: " + sum
    // render out all the cards we have
    cardsEl.textContent = "Cards: "
    for (let i = 0 ; i <  cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function NewCard(){
    console.log("Drawing a new card from the deck!")
    let card = 6
    cards.push(card)
    sum += card
    StartGame()
}

