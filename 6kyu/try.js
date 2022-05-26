const array = [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]

let positiveNumbers = array.filter((n)=>n*-1<0&&n%1==0)
let negativeNumbers = array.filter((n)=>n*-1>0)

// console.log(positiveNumbers)
// console.log(negativeNumbers)

// console.log([...positiveNumbers].map((e)=>e**2))
// let N=3
// let nArr=[]
//     for(let i=0; i<N+1; i++){
//       nArr.push(i)
//     }

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // mArr = nArr.reduce((a,b)=>a+b)
    // console.log(nArr.reduce((a,b)=>a+b))



    function getBanknoteList(amountOfMoney){
      debugger
      let result=[]
      recursionBanknotes(amountOfMoney)
      function recursionBanknotes (summ){
        const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
        for(let i of banknotes){
          debugger
          if(summ-i>=0&& summ!==0){
            result.push(i)
            recursionBanknotes(summ-i)
            break
          }else if(summ===0){
            break
          }else{}
        }
              
      }
    return result
    }
    
    console.log(getBanknoteList(23))

