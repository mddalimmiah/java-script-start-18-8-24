const heights=[65, 66, 72, 75, 78, 60, 80, 83, 61];

function getMax(numbers){
    console.log(numbers)
    let max=numbers[0];
    for(let num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}
const max=getMax(heights);
console.log('array of max number is:', max)