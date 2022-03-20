function isNice(arr){
    const checkArr = []
    if (arr.length > 1) {

        for (let i of arr) {
            if ((arr.includes(i - 1)) || (arr.includes(i + 1))) {
                checkArr.push(true)
            } else {
                checkArr.push(false)
            }
        }
        if (checkArr.includes(false)) {
            return false
        } else {
            return true
        }
    }else {
        return false
    }
    


}
console.log(isNice([2,10,9,3]))
console.log(isNice([3,4,5,7]))
console.log(isNice([1,2,3,4]))
console.log(isNice([2,10,9,3]))
console.log(isNice([2,1]))
console.log(isNice([1]))
console.log(isNice([]))

  