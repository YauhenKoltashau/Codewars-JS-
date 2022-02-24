function digitize(n) {
    const reversedArray = String(n).split("").reverse().map(Number)
    console.log(typeof  reversedArray)
}
digitize(35231)