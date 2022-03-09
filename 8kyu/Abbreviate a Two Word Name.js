function abbrevName(name){
    let separateName = name.split(' ')
    
    let firstLet = separateName[0][0].toUpperCase()
    let secondLet = separateName[1][0].toUpperCase()
    console.log(`${firstLet}.${secondLet}`)
    

   

}

function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
abbrevName('Yauhen koltashau')