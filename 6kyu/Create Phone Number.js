function createPhoneNumber(numbers){
    let stringPhone = '(***) ***-****'
    for (let i of numbers){
        stringPhone=stringPhone.replace("*",i)
        
    }
    
  console.log(stringPhone)
}       

createPhoneNumber([9, 2, 3, 8, 5, 6, 7, 8, 3, 0])
