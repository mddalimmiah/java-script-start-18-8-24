const dalim =89;
const safi=90;
const sidrat=99;

if(dalim>safi && dalim>sidrat){
    console.log('Dalim is bigger')
}
else if(safi>dalim && safi>sidrat){
    console.log('safi is bigger')
}
else{
    console.log('sidrat is bigger');
}
function getMax3(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num3 && num2> num1){
        return num2;
    }
    else{
        return num3;
    }
}
const max=getMax3(89, 90, 98);

console.log('the largest number is:', max)

const largest =Math.max(200, 345, 400, 600, 980, 1200);
console.log('the largest number is math.max:', largest)