function q(n) {
    var x = 2 * n + 1

    
    for (let i = 1; i <= x; i++) {
        print(i,x)
    }

    for (let m = x - 1; m > 0; m--) {
        print(m,x)
    }

}

function print( i , x) {
    var str = ""
        for (let j = 0; j < x - i / 2; j++) {
            str += " "
        }
        for (let k = 0; k < i; k++) {
            str += "*"
        }
        for (let l = 0; l < x - i /2; l++) {
            str += " "
        }
        console.log(str)
}

q(3)