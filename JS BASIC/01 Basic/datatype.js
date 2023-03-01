//object 
let Browser = {
    "Name": "Chrome",
    "Version": 98.090,
    "Test": "Regression",
    fun: () => {
        console.log("Browser use for Regression testing")
    }
}
console.log(typeof Browser)
console.log(Browser)
console.log(Browser.fun())
console.log(Browser.Name)

//Object array 
let Browsers = [
    {
        "Name": "Chrome",
        "Version": 98.090,
    },
    {
        "Name": "Firefox",
        "Version": 99.09,
    },
    {
        "Name": "Micorsoft EDGE",
        "Version": 100.12,
    }

]

console.log("TYPE OF => " + typeof Browsers)
console.log(Browsers[2])
console.log(Browsers[1].Name)
console.table(Browsers)

//array 
console.log("*****ARRAY****")
let cryptocoins = ["BTC", "ETH", "MATIC", "DOT", "BNB", "XRP", "ADA"]
console.log("TYPE OF ==> " + typeof cryptocoins)
console.log(cryptocoins[1])
console.log(cryptocoins[5 - 1])
console.log(cryptocoins)

cryptocoins.forEach(coin => {
    console.log(coin)
}
)