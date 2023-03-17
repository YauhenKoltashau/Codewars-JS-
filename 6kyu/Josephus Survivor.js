function josephusSurvivor(n,k){
    let resultArr = []
   
    for (let i=k; k<=n; k++){
        resultArr.push(k)
    }
    return resultArr
  }


  console.log(josephusSurvivor(14,2))