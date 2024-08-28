const x ='Dalim';
const y ='DaLiM';

if( x.toLowerCase() ===y.toLowerCase()){
    console.log("both are same");
}
else{
    console.log('both are different');
}
const j ='Hellow world';
const k ='heLLow';

console.log(j.toLowerCase().includes(k.toLowerCase()));

const address1='parabanda';
const address2=' paraBanda ';
if(address1.trim().toLowerCase()===address2.trim().toLocaleLowerCase()){
    console.log('Both are same');
}
else{
    console.log("both are different");
}