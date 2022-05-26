function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );

}

console.log(typeof findUniq([ 3, 10, 3, 3, 3 ]))

