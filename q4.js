function q(a , operation , b) {

    switch (operation){
        case "+":
            return a + b
        case "-": 
            return a - b
        default:
            throw new Error("unknown operation")
    }
}

console.log(q(8, "+" , 9))
console.log(q(110, "-" , 97))