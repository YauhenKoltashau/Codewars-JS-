var min = function(list){
    var minInlist = Math.min(...list)
    return minInlist;
}

var max = function(list){
    var maxInList = Math.max(...list)
    
    return maxInList;
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))