// multi level condition

const price =2000;
// if(price >= 5000){

//     // discount 10%
//     const discount =price *10 /100;
//     const payAmount =price - discount;
//     console.log(payAmount);
// }
// else{
//     console.log(price);
// }
if(price >= 5000){

    // discount 10%
    const discount =price *10 /100;
    const payAmount =price - discount;
    console.log(payAmount);
}
else if(price >=2000){
    // 5% discount 
    const discount=price *5 /100;
    const payAmount =price -discount;
    console.log(payAmount);
}
else{
    console.log(price);
}