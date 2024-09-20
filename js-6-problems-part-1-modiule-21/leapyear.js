/*
// simple logic 
year will a leap year if the  year  is divisible by 4
/
*/

function isLeapYear(year){

    if(year % 4 ===0){
      return true;
    }
    else {
        return false;
    }
}

const isLeapY=isLeapYear(2043);
console.log(isLeapY)
/*
1. Those Year that is not divisible by 100, if the year is divisable by 4: then it wil be a leap year
*/
function leapYear2(year){
    if(year % 100 !==0 && year % 4===0 ){
        return true;
    }
    else {
        return false;
    }
}
// const leapYear3=leapYear2(2024);
// console.log(leapYear3)

function  leapYear4(year){
    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if(year % 400 ===0){
        return true;
    }
    else {
        return false
    }
}
const lipi=leapYear4(2100)
    console.log(lipi)

    console.log(leapYear4(2400))
    console.log(leapYear4(1900))
    console.log(leapYear4(2052))


