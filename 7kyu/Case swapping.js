function swap(str){
    //code me
    let checkLetter = ''
    const myArr = []
    for(let i of str) {
        checkLetter = i
        if (checkLetter == checkLetter.toLocaleUpperCase()) {
            myArr.push(i.toLocaleLowerCase())
        } else if (checkLetter == checkLetter.toLocaleLowerCase()) {
            myArr.push(i.toLocaleUpperCase())
        }
        
    
    }return myArr.join('')
}  
console.log(swap('HelloWorld'))
console.log(swap('CodeWars'))

