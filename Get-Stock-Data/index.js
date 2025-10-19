import fakeStockDataGenerator from './fakeStockDataGenerator.js'
// console.log(fakeStockDataGenerator()) -> gives obj from fakeStcok......

// Now for every 2 seconds we need to call the fakeStockDataGenerator and store the key values and display them, s define a function for that 
// using setTimeout(fake.........,2000)
setInterval(function(){
    const stockData = fakeStockDataGenerator()
    renderStockData(stockData)

} , 2000)
// So initially to display the results we need to grab the html elements first , So do that

const name = document.getElementById("name")
const symbol = document.getElementById("symbol")
const price = document.getElementById("price")
const time = document.getElementById("time")
let initial_price = 0
function renderStockData(stockData){
   
    const {Name ,Symbol, Price , Time } = stockData
    name.innerText = Name
    symbol.textContent = Symbol

    price.innerHTML = Price > initial_price ? `${Price} <img src = "./up.jpg" alt = "profit" />`: 
                      `${Price} <img src = "./down.webp" alt = "profit" />`
    initial_price = Price
    time.innerHTML = Time

}





