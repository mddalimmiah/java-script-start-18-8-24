/*
* check the number is even or odd;
*/


function evenOdd(x){
    if(x %2===0){
        // console.log('even number')
        return "even";
    }
    else{
        // console.log('odd number')
        return 'odd';
    }
}
const checkNumber=evenOdd(6)
console.log(checkNumber)

//ami chaile amr function call kore aamr name k onkbar print korte parbo ba bahir theke control korte parbo

function printName(x){
    for(i=1; i<=x; i++){
        console.log("dalim")
    }
}
printName(3)