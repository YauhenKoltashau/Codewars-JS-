function inAscOrder(arr) {
    // Code your algorithm here :)
    let myArr = []
    
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] > arr[i]) {
                //console.log(`${arr[i+1]} ${arr[i]} true`)
                myArr.push(true)
            } else {
                //console.log(`${arr[i+1]} ${arr[i]} false`)
                myArr.push(false)
            }        
        }
        if (myArr.includes(false)) {
            return false
        }else if (!myArr.includes(false)){
            return true
        }
    
     
  

  
}
console.log(inAscOrder([1, 3, 4, 7, 19]))
console.log(inAscOrder([1, 2, 3, 4, 5]))
console.log(!inAscOrder([1, 6, 10, 18, 20, 40, 201]))
// console.log(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))