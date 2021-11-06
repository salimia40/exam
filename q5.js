function q(input) {
    input = input.toString()
    inputSafe = input
    var output = []

    for(var i = 1; i <= input.length; i++) {
        output.push(input[input.length - i])
    }

    var convert = (inp) => {
        if( inp) return "YES"
        else return "NO"
    }
    return convert(output.join("") == inputSafe)
}

console.log(q(1537351))
console.log(q(11981))