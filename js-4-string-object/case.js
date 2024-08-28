 const school= "Kala Paharia Union High School";
 console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
 const subject ="ChemIstry";
 const book ="chemistry";
//  দুইটা স্ট্রিং কে তুলনা করলে দুই টা কে হয় আপার কেস নিতে হবে, নয় দুইটা কে লোয়ার কেস নিয়ে তুলনা করতে হবে। 
// string k compare korle obossoi toLowercase() othoba toUpperCase() banate hobe 
if(subject.toLowerCase() === book.toLowerCase()){

    console.log("I am reading  a book");
 }
 else {
    console.log("I don n't read this book");
 }
//   ‍স্ট্রিং এর মধ্যে আগে পরে যদি কোন হোয়াইট স্পেস থাকে তা রিমোভ করার জন্য  trim use kora  হয়।
  const drink ='water ';
  const liquid ='water';

  if(drink.trim() === liquid.trim()){
    console.log('i drink water');
  }
  else {
    console.log("i want to drink water");
  }