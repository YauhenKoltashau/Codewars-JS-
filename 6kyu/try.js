let carArr = ['bmw', 'vw', 'audi']
let strCars1=''
let strCars2=''
carArr.forEach(element => {
    strCars1=strCars1+element
});


for (element of carArr) {
    strCars2 = strCars2 + element
}
console.log(strCars1)
console.log(strCars2)
console.log(strCars1===strCars2)