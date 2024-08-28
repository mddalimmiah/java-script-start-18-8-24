const person={

    name: 'Dalim Miah',
    age:30,
    profession: 'Developer',
    salary: 25000,
    married:true,
    'fab places':['coxsbazar', 'sylhet', 'bandorban'],
}
// console.log(person);
// dot notation
//  dot symbol diye object er property er value access kora 
console.log(person.profession); // kono perticular property dekhar jonno
const income=person.salary; // variable declare koe person salary property er maan rakha hoyece
console.log(income);
// sob kichu dot notation diye kora jabe na  বিদগুটে নাম থাকলে ব্রাকেট নোটেশন ব্যবহার করতে হবে। না হলে ইরর দিবে।
// bracket notation
console.log(person['age']);
const boyos=person['age'];
console.log(boyos);
// property name jodi qoutation er modday thake takhn must bracket notation use kore hobe na hole error dibe 
console.log(person["fab places"]);