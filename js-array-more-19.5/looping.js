/*

* looping technique
 1. for loop
 2. while loop
 3. do while (ignore loop )
 4. for of loop --use of array
 5. for in loop -use of object
 6. 

 */
const friends=['elon', 'bill', 'steave', 'warren', 'mark'];
for (const friend of friends){
    console.log(friend);
}

// for(i=0; i<friends.length; i++){
//     console.log(i)
//     console.log(friends[i]);
// }

const numbers=[12, 13, 14, 45, 67, 78, 90, 100];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
let i=0;
while(i< friends.length){
console.log(friends[i]);
    i++;
}
let n=0;
while(n<numbers.length){
    // console.log(n)
    console.log(numbers[n]);
    n++;
}


// normally reverse:
// friends.reverse(friends);
// console.log(friends)

// let reverse_friends=[];
// // for of loop
// for(const friend of friends){
//     // console.log(friend)
//     reverse_friends.unshift(friend);
// }
// console.log(reverse_friends);

// for loop reverse
let rev_friends=[];
for(i=0; i<friends.length; i++){
    // console.log(friends[i])
    const friend=friends[i]
    rev_friends.unshift(friend);
}
// console.log(rev_friends)

// normally -- kore

let rev_rev_friends=[];

for(let i=friends.length -1; i>=0; i--){
    const reversed_friend=friends[i];
    rev_rev_friends.push(reversed_friend)
}
console.log(rev_rev_friends)