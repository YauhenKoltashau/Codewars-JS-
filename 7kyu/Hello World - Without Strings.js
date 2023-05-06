                                // my way
// class PhraseMaker {
//   constructor() {
//     this.name = 'Hello,';
//     this.secondName = " World!"
//   }
// }

// const hello = new PhraseMaker();

// const entirePhrase = hello.name + hello.secondName

// const helloWorld = () => {
//     return entirePhrase
// return
// };
// console.log(helloWorld());
                              //chartCodeWay
const helloWorld = _ => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
                              //sourceWay
const helloWorld1 = () =>  /Hello, World!/.source

console.log(helloWorld());

const href = _ => "hello";

console.log(href())