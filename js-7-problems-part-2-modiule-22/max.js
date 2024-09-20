const dalim=70;
const safi=80;

if(dalim>safi){
    console.log('this is big total dalim:');
}
else{
    console.log("this is big total safi:");
}
// inside a function

function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max=getMax(70, 80);
const max2=getMax(98, 89);
const ultimateMax=(max, max2);
// console.log('this is large Number:', max)
console.log('this is bigger to :', ultimateMax)