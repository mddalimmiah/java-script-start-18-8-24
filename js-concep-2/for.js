for(i=1; i<=10; i++){
    console.log("Dalim", i);
}

for(i=1; i<=100; i++){
    console.log("sorry Baby...!", i);
}

// const nums=[12, 2, 4, 5, 6,9, 7,10];
// // console.log(nums[3]);
// for(i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

let sumOfOdd=0;
let sumOfEven=0;
const nums=[12, 2, 4, 5, 6,9, 7,10];
// console.log(nums[3]);
for(i=0; i<nums.length; i++){
    // console.log(nums[i]);
    const x=nums[i];
    if( x % 2===1){
        sumOfOdd += x;
    }else{
        sumOfEven +=x;
    }
}
console.log(sumOfEven);
console.log(sumOfOdd);