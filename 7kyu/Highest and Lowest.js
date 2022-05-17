function highAndLow(numbers){
    
    return Math.max(...numbers.split(' ')).toString()+' ' +Math.min(...numbers.split(' ')).toString()

  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))