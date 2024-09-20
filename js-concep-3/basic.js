function PrintName(name){
    console.log('my is ', name)
}
PrintName('Dalim')
PrintName('Miah')

function printDetails(naem, age, adress){
    console.log(`My name is ${naem}. My age is ${age}. I live in  ${adress}.`);
}
printDetails('Dalim', 30, 'Dhaka');

function add(x, y){
    const total=x +y;
    return total;
}
const z=add(4, 5);
console.log(z)

// return dile porbortite store kore use korte parbo
// kono kisu return na korle undefined dekhabe;
function giveNumber(){
    console.log('inside function',5)
    return 5;
}
const x=giveNumber()
console.log('outside function', x) 