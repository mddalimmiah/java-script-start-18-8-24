/*
array has some duplicate elements 
*[]
*/

const biriyaniKhor=['abul', 'babul', 'chabul', 'abul', 'babul', 'dalim', 'sidrat', 'farjana', 'dalim', 'muntaha', 'moni', 'farjana', 'dalim',];

const numbers=[10, 2, 3, 10, 5, 6, 8, 2, 5, 8, 20, 30, 40, 50, 20];

function noDuplicate(array){
    // console.log(array)
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }
 return unique;
}

// const  uniqueArray=noDuplicate(biriyaniKhor);
const  uniqueArray=noDuplicate(numbers);

console.log(uniqueArray)