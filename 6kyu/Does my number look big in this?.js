function narcissistic(value) {
    let mySum = 0
    const numToStr = value.toString()
    const numLength = numToStr.length
    for (let i of numToStr) {
        mySum = mySum + (Number.parseInt(i) ** numLength)
        
    }
    if (mySum == value) {
        return true
    } else {
        return false
    }
    

    
    // Code me to return true or false
  }
  console.log(narcissistic(371))
  console.log(narcissistic(1625))
  console.log(narcissistic(7))