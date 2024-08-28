const numbers=[1, 2, 3,4, 5, 6, 7];

// console.log(numbers)
// numbers.reverse();
// console.log(numbers)
//  for of loop diye reverse:
const rev_numbers=[];
for(const num of numbers){
    console.log(numbers);
    // rev_numbers.push(num); //push mane akta akta kore number ba kono kisu add kore
    rev_numbers.unshift(num); // unshift mane akta akta kore samne theke add kore (12345 unshift korebe thale 1 tar aga 2=5,4,3,2,1)
}
console.log(rev_numbers)

// normaly for loop diye reverse:

let reversed_numbers=[];
for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i])
    const num=numbers[i];
    reversed_numbers.unshift(num);

}
console.log(reversed_numbers);

// reverse side : 

// array index theke -1 korte hobe
const rev_rev_numbrs=[];
for(let i =numbers.length-1; i>=0; i--){
   const num=numbers[i];
   console.log(num);
   rev_rev_numbrs.push(num);
}
console.log(rev_rev_numbrs)
