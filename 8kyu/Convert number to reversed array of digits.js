function digitize(n) {
    let myString = String(n).split("").map(Number)
    let reverseArr = myString.reverse()
    
    console.log(reverseArr);
    
}

digitize(35231)

