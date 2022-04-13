function solution(number){
  let myListNumbers = []
  for(let i=number-1; i > 0; i-- ){
      if ((i%3===0 && i%1===0) | i%5==0 && i%1===0) {
        myListNumbers.push(i)
      }
      
  }
let sumNumbers = 0
for(let n of myListNumbers) {
    sumNumbers = sumNumbers + n
}
  return sumNumbers
}
console.log(solution(10))
//console.log(solution(10)