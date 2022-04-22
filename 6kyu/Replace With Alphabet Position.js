function alphabetPosition(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let checkingLetter
    const resultArray = []
    for (let i=0; i<sentence.length; i++){
        checkingLetter= sentence[i]
        for (let j in alphabet){
            if(checkingLetter.toLowerCase() == alphabet[j]){
                resultArray.push(Number.parseInt(j)+1)
            }
        }

    }
    
     return resultArray.join(' ') 
    
   
}
console.log(typeof alphabetPosition("The sunset sets at twelve o' clock."))
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"