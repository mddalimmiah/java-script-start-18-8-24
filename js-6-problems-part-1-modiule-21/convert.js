// 12 inch =1feet

function inchToFeet(inch){
   const feet=inch /12;
   return feet;
}

function inchToFeet2(inch){
    const feetFraction=inch/12;
    const feetNumber=parseInt(feetFraction);
    const inchRemaing=inch % 12;
    const result =feetNumber + " ft " + inchRemaing + " inch. ";
    return result;
}
const Height=inchToFeet(75);
// console.log(Height)
const Height2=inchToFeet2(75);
console.log(Height2)

function mileToKilometer(mile){
    const kilo=mile * 1.60934;
    return kilo;
}

console.log(mileToKilometer(200))

function kiloToMiles(kilo){
    const mile=kilo *0.621371;
    return mile;
}
console.log(kiloToMiles(200))