function arrayDiff(a, b) {
   let resultArray = []
   for (i of a) {
       if (!b.includes(i)) {
           resultArray.push(i);

       }
      
   }
   return resultArray
}

console.log(arrayDiff([],[3,1]))