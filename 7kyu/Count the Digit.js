function nbDig(n, d) {
    var arrNum = [];
    if (d <= n) {
       let currentNum = d * d;
       console.log(currentNum)
       arrNum.push(currentNum)
       let currentString = currentNum.toString() 
       //console.log(`${d} ${currentNum} ${currentString}`)
       nbDig(n, d + 1)
    
  }return arrNum
}
console.log(nbDig(10, 1))

