// function multiply(num1, num2){
//     if(typeof num1 !=='number' || typeof num2 !=='number'){
//         return 'please provide a number';
//     }
//     const mul=num1 * num2;
//     return mul;
// }
// const result=multiply(12, '5')
// console.log('muliple:', result)

// function fullName(first, second){
//     if(typeof first !=='string'){
//         return 'first name should be string.'
//     }
//     else if(typeof second !=='string'){
//         return 'last name should be string';
//     }
  
//     const full= first + ' ' + second;
//     return full;
// }
// // const full=fullName('sidraturl',  'muntaha')
// const full=fullName('dalim' 5)
// console.log('fulname:', full);

function getPrice(product){
    if(typeof product !=='object'){
        return 'please provide an object';
    }
    
    const price=product.price;
    return price;
}
// const price=getPrice({name:'cream', price: 35, color:'blue'})
const price=getPrice(10)
console.log(price);

function getSecond(numbers){
    if(Array.isArray(numbers)===false){
        return 'please provide an array'
    }
    console.log(typeof numbers);
    const second =numbers[1];
    return second;
}
const second=getSecond([1, 2,3,45,78])
// const second=getSecond('45')
console.log(second)