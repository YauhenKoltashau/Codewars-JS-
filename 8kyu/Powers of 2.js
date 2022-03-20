function powersOfTwo(n){
    const myArr = []
    for (let i = 0; i <= n; i++) {
        myArr.push(2**i)
        
    }
    return myArr
  }

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))
console.log(powersOfTwo(25))
