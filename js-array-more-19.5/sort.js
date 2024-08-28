const person=['dalim', 'sidrat', 'farjana', 'safi', 'muntaha', 'akib', 'balan', 'Akib'];
const sortedPerson=person.sort();

console.log(sortedPerson)
console.log(person)
// sort 
const numbers=[4, 7, 2, 8, 3, 6]; 
// ascending : smaller to larger =1, 2, 3, 4, 5, 6,9, 15
// Dsending: larger to smaller = 15, 9, 6,5,4,3,2,1

// const numbers_asc=numbers.sort()
// console.log(numbers_asc);
const newNumbers=[1, 2, 3, 14, 23, 6, 45, 8, 30, 5];
// const numbers_asc=newNumbers.sort() //nor working properly

// ascending
const numbers_asc=[...newNumbers].sort(function(a, b){return a - b}) //nor working properly
// Descending
const numbers_dsc=[...newNumbers].sort(function(a, b){return b - a}) //nor working properly
console.log(numbers_asc);
console.log(numbers_dsc);