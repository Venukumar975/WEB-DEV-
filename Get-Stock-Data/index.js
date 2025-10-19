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
let symbol = document.getElementById("symbol")
let price = document.getElementById("price")
let time = document.getElementById("time")

function renderStockData(stockData){
   
    const {Name ,Symbol, Price , Time } = stockData
    name.innerText = Name
    symbol.textContent = Symbol
    price.innerHTML = Price
    time.innerHTML = Time

}





