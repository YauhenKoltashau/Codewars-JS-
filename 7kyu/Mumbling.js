function accum(s) {
//the best decision
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')


//My decision
    // let resultArr = [...s.split('')]
    // let newArr =[]
    // let resultStr=''

    // for(let i=0;i<resultArr.length;i++){
    //     newArr.push(resultArr[i].repeat(i+1).toLowerCase())

    // }
    // newArr.map((e)=>{
    //     for(let i in e){
    //         if(i==0){
    //             resultStr=resultStr+ e[i].toUpperCase()
    //         }else{
    //             resultStr=resultStr+e[i]
    //         }
    //     }
    //     resultStr=resultStr+'-'

        

    // })
    // return resultStr.slice('',-1)

    // 
    // return[...s.split('')].forEach((w,index)=>{[...w.repeat(index+1).toLowerCase()].map((e,i,arr)=>{i===0?arr[i].toUpperCase():arr[i].toLowerCase()})})
    

}


console.log(accum("Zpg"))