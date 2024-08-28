const sentence ='i am learning web development. this is new sentence. ';

// reverse রিভার্স মানে পিছন থেকে আগে আসবে। যেমন: .tnempoleved bew gnirael ma i

// for of loop use kore 
let reverse='';
for (let letter of sentence){
    // console.log(letter);
    reverse=letter + reverse;
}
// console.log(reverse);

//  for loop diye reverse korar system
let rev='';
for(let i=0; i<sentence.length; i++){
    console.log(i);
    console.log(sentence[i]); // sentence a joto gola index ache ta dekhacce
    const letter=sentence[i]
    rev=letter + rev;

}
// console.log(rev);

// short cut reverse

const reversed =sentence.split('') .reverse().join('');
console.log(reversed);
