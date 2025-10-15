// Blackjack game (browser only)
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("card-el")

function randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) return 11
    if (randomNumber > 10) return 10
    return randomNumber
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards.join(" ")

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function StartGame() {
    // initialize a new game
    isAlive = true
    hasBlackJack = false
    cards = [randomNumberGenerator(), randomNumberGenerator()]
    sum = cards[0] + cards[1]
    renderGame()
}

function NewCard() {
    if (!isAlive || hasBlackJack) return
    const card = randomNumberGenerator()
    cards.push(card)
    sum += card
    renderGame()
}

// expose functions to window so onclick in HTML works (if not using modules)
window.StartGame = StartGame
window.NewCard = NewCard
