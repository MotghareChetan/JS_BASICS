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

let numbers = [12,11,21,541,12]
console.log(numbers)
console.log(numbers.push(90,12,13,12,41))
console.log(numbers)

console.log(numbers.pop())
console.log(numbers)

console.log(numbers.unshift(124))
console.log(numbers)

console.log(numbers.shift())

let concat =  numbers.concat(cryptocoins)

console.log(concat)
console.table(concat)

console.log(concat.join("*-*"))

//search 

let found =  cryptocoins.find(coin => coin === "BTC")
console.log(found)

//IF VALUE INCLUDE IT WILL RETURN TRUE 
console.log(cryptocoins.includes("ADA"))

console.log(cryptocoins.indexOf("ETH"))

console.log(cryptocoins.sort())
console.log(cryptocoins.reverse())