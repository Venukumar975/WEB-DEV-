export default function fakeStockDataGenerator(){
    return {
        Name : "QtechAI",
        Symbol : "QTA",
        Price : ( Math.random()*3 ).toFixed(3) ,
        Time : new Date().toISOString()
    }
}

