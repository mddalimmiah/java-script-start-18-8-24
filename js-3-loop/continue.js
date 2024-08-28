continue : means skip code for  rest of this iteration
break: i am done with this loop . end loop

continue
 কনটিনিউ মানে হলো স্কীপ করবে; যেমন এখান বিজোর সংখ্যা হলে স্কীপ করে কনটিনিউ করবে। 
for (i =1; i<=10; i++){
    if(i % 2===1){
        continue;
    }
    console.log(i);
}
while loop diye continue
let i =1;
while(i<=20){
    i++;
    if(i % 2 ===1){
        continue;
    }
  
    console.log(i);
}