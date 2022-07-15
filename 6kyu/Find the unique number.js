
  function findUniq(arr) {
    return arr.find((v,i)=>arr.lastIndexOf(v)==arr.indexOf(v))
  }


console.log(findUniq([ 3, 10, 3, 3, 3 ]))

