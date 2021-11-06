
const prompt = require('prompt-sync')();


function getNumber(q) {
    var n = prompt(q)
    if(isNaN(n))(
        n = prompt("please enter a valid number:")
    )
    else {
        return parseInt(n)
    }
}

function q() {
    var n = getNumber("enter a number:")

    var numbers = []
    for (let i = 0; i < n; i++) {
        numbers.push(getNumber(`enter number ${i+1} :`))
    }

    var sum = numbers.reduce((a, b) => a + b, 0);

    console.log(`Max: ${Math.max(...numbers)}`)
    console.log(`Min: ${Math.min(...numbers)}`)
    console.log(`Avg: ${sum / numbers.length || 0}`)
}

q()