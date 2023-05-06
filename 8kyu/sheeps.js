function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(e=>{if(e === true){counter++}})
    return counter
}
    
    
    
     
    // TODO May the force be with you
    
  

  console.log(countSheeps(
    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
  ));