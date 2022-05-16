function squareDigits(num){
    let str=''
    var myArr = String(num).split("").map((num)=>{str=str+(num*num)})
    
    return Number(str).toString()
}
console.log(squareDigits(0))