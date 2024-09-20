/*

* function takes an array  as parameter 
give me the average of the odd numbers in teh array;
*/
// onek vabe i odd number er gor ber kora jay
//   system : 1: put odd number in an array 
function oddAverae(numbers){
console.log(numbers)
const oddNumber=[];
for(const number of numbers){
    if(number % 2===1){
        // console.log(number)

        oddNumber.push(number);
    }
}
//odds is the array that contains odd number
// console.log(oddNumber)
let sum=0;
for(const number of oddNumber){
    sum=sum+number;
}

const count =oddNumber.length;
const avg=sum/count;
console.log(sum, count)
return avg;
}
const numbers=[42, 13, 58, 65, 81, 96, 7, 5, 2];
const avg=oddAverae(numbers);
console.log("average of the odd numbers is:", avg)