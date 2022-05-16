    const sepStr = (str) => {
        
        myArr = str.split(' ')
        let theLongest=Math.max(...(myArr.map(el => el.length)))
        console.log(theLongest)
        newArr = []
        fullArray = []
        for (let e=0; e<theLongest;e++){
            for(let p=0; p<myArr.length; p++){
                newArr.push('')
            }
            fullArray.push(newArr)
            newArr=[]
        }
        console.log(fullArray)
        console.log(newArr)

        let a = 0
        while (a < theLongest ){
            for (let i in myArr){
                debugger
                for (let j in myArr[i]){
                    if (j == a) {
                        
                        newArr.push(myArr[i][j])
                                            
                   
                }
                                
                
            continue
            
            }
            fullArray.push(newArr)
            newArr=[]  
            
            a++ 
        }
        
        console.log(fullArray)
        // console.log(theLongest)

     }

    
//sepStr("Justckdjckdjckd Live Lifeyytetettete Man")
    }
    sepStr("Just Live Life Man")