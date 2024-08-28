const numbers=[12, 23, 24, 25, 7, 5, 26, 32, 40];
// for(let number of numbers){
//     console.log(number);
//     if(number ===26){
//         break;
//     }
// }

for(let number of numbers){
   
    // if(number ===25){
    if(number % 2===1){
        continue;
    }
    console.log(number)
}