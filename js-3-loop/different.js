//  odd numbers
// odd  নাম্বার বের করতে অনেক ভাবে করা যায় কয়েকটা ভাব দেখানো হল।
// for (let i=0;i<=20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

// for (let i=0;i<=20; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }
// for (let i=1;i<=20; i+=2){
   
//     console.log(i);
// }

give me the list numbers between 1 to 30 divisible 5

for (i=1; i<=30; i++){
    if(i % 5 ===0){
        console.log("divisible 5: (1 to 30) ", i);
    }
}
divisible 3 or 5 (1 to 30)
for (i=1; i<=30; i++){
    if(i % 5 ===0 || i % 3 ===0){
        console.log("divisible 5 || 3 : (1 to 30) ", i);
    }
}
divisible 3 and 5 (1 to 30)
for (i=1; i<=30; i++){
    if(i % 5 ===0 && i % 3 ===0){
        console.log("divisible 5 && 3 : (1 to 30) ", i);
    }
}
 1 to 100 
for (i=1; i<=100; i++){
    if(i % 5 ===0 && i % 3 ===0){
        console.log("divisible 5 && 3 : (1 to 30) ", i);
    }
}

give me the sum of numbers from 1 to 20 that are divisible by 3
let sum=0;
for (i =1; i<=20; i++){
    if( i % 3 ===0){
        
        console.log(i);

        sum=sum +i;
    }
   
}
console.log("sum of the 3 divisible number:", sum);
