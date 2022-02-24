function multiply(number){
    let myNumber = Math.abs(number)
    let myNumberToString = myNumber.toString().length
    console.log(myNumberToString);
    
   
    return console.log(number*(5**myNumberToString))
}
multiply(200);
multiply(10)
multiply(5)
multiply(200)
multiply(0)
multiply(-2)