/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let num =1;
sum=0;
while(num <=100){
  
    console.log(num);
    num++;
    sum=sum+num;
    console.log("sum of number:", sum);
}

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
let nums=1;
while(nums <=40){
    if(nums % 2 ===1){
        console.log("odd numbers:", nums);
    }
    nums++;
}