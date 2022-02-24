function well(x){
  let myObject = {}
  if (x.includes('good')) {
    for (let i = 0; i < x.length; i++) {
      let item = x[i]
      myObject[item] = myObject[item] + 1 || 1
    }
    switch(true) {
      case (myObject.good == 1):
      case (myObject.good == 2):
        console.log("Publish!");
        break
      case (myObject.good >= 3):
        console.log("I smell a series!");
        break
    }
    

  }else {
    console.log('Fail!')
  }
}
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

  
  
well(['bad', 'bad', 'bad', 'bad', 'bad', 'bad'])

