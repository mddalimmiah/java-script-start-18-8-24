function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments)
}
add(12, 13, 35, 78)

const numbers=[10, 12, 23, 20, 30, 40];
for(let i=0; i<numbers.length; i++){
    const number=numbers[i]
    console.log(number)
}
for(let number of numbers){
    console.log(number)
}