function q(n, markers) {
    var colors = new Map()

    markers.forEach(marker => {
        colors.set( marker, colors.has(marker) ? colors.get(marker) + 1 : 1)
    });

    var min  = Number.MAX_VALUE
    var minColor = 0
    
    colors.forEach((v, key) => {
        if( v < min) {
            min = v
            minColor = key
        }
    })

    console.log(minColor)

}

q(3, [1, 1 ,2])

