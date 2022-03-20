function nbDig(n, d) {
    var numCounter = 0;
    for (let k = 0; k <= n; k++) {
        for (let item of (k * k).toString()) {
            if (item.includes(d)) {
                numCounter++
            }           
        }        
    }return numCounter
}
console.log(nbDig(11549, 1))

