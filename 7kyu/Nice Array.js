function isNice(arr){
    for (let i of arr) {
        if ((i - 1) in arr || (i + 1 in arr)) {
            return console.log(true)
        } else {
            return console.log(false)
        }
        console.log(i)
    }
    // if ((i + 1) in arr || (i - 1) in arr) {
    //     return true
    // } else {
    //     return false
    // }    
  }
  

  isNice([2,10,9,3])
  isNice([3,4,5,7])
  