 var arrayName=["Dalim", "saif", "Farjana", "sidrat", "muntaha"];
 console.log(arrayName);
// array index 0 theke soro hoy 
 var numbers =[10, 20, 30, 40, 50];
//  console.log(numbers[3]);
// push and pop
// numbers.push(60);
// numbers.push(70);
// numbers.push(60, 70, 80, 90, 100);

// numbers.pop();
// var a =numbers.pop();
//  console.log(numbers);
//  console.log(a);
// shift and unshift
// var numbers =[10, 20, 30, 40, 50];
// // numbers.shift();
// numbers.unshift(4);
// numbers.unshift(5, 6, 7);
// console.log(numbers);

// var numbers =[10, 20, 30, 30, 40, 50, 60, 70, 80];

// console.log(numbers .indexOf(30));
// console.log(numbers .indexOf(130));
// console.log(numbers[numbers.length-1]);
console.log(numbers.length);
// slice kon index theke soro abong kon index er ag porjonto 
console.log(numbers.slice(1, 4));
console.log(numbers.slice(2));
//   ‍ splice (start, deleteCount, element1, element2)

var numbers =[10, 20, 30, 30, 40, 50, 60, 70, 80];
console.log(numbers);
// numbers.splice(2, 3);
// numbers.splice(2, 3, 100, 200);
numbers.splice(3, 0, 100, 200);
console.log(numbers);