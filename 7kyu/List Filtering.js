function filter_list(l) {
    const numArray = []
      for (let i in l) {
          if (typeof l[i] === 'number') {
              numArray.push(l[i])
          }
          
      }
      return console.log(numArray);
    }
filter_list([1,'a','b',0,15])

function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
  }

  function filter_list(l) {
    return l.filter(x=>x+0==x)
  }