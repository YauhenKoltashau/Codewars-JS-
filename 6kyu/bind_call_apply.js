function printPhrase() {
    return console.log(this.phrase);
}
const holidayNY = {phrase: "Happy NY"}
const holiday8March = {phrase: "Happy 8 March"}

const PrintNY = printPhrase.bind(holidayNY)
const Print8M = printPhrase.bind(holiday8March)
PrintNY()
Print8M()

const person = {
    firstName: "Jack",
    lastName: "Daniels",
    showFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
function getSkills(s1, s2, s3) {
    console.log(this.showFullName() + ' has skills ' + s1 +' , '+ s2+' , '+ s3);
}

let personSkills = getSkills.bind(person,'HTML','JS')
personSkills()
getSkills.call(person,'HTML','JS')
getSkills.apply(person,['HTML','JS','React'])

function summa(){
    let sum = 0
    Array.prototype.forEach.call(arguments,(value)=> {
        
        sum += value})
    console.log(arguments[1]);
    console.log(sum);
}
summa(58,899,4,993,2)