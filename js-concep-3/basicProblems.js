function findLargest(values){
    if(!Array.isArray(values)){
        return 'provide an array'
    }
   else{
    let max=values[0];
    for(i=1; i<values.length; i++){

        if(typeof values[i] !=='number'){
            return 'please all values should be number'
        }
        else{
            if(values[i]>max){
                max=values[i];
        }
        
        }
        
    }
    return max;
   }
}

const numbers=[112, 23, 3, 4, 24, 20,false,  140, '30', 40, 35, 50, 60];
// const numbers=[112, 23, 3, 4, 24, 20, 140, 30, 40, 35, 50, 60];
// const maxNumber=findLargest(numbers);
// console.log(maxNumber)
console.log(findLargest(numbers))