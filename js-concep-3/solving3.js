/*
 [ফাংশন নাম দিতে হবে picnicBudget]:  প্যারামিটার হিসেবে নিবে কয়জন পিকিনিকে যাবে সেই সংখ্যা। 
 যদি ১০০ বা তার কম যায়  তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে।
 যদি ১০০ এর বেশি কিন্তুু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জনকে ৫০০০ করে দিতে হবে। আর ১০০ জন  এর বেশি (অর্থাৎ ১০১ জন থেকে ) যত নম্বর আছে তাদের প্রত্যেককে ৪০০০ টাকা করে দিতে হবে। 
 আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন ৫০০০ টাকা করে দিতে হবে। আর ১০০ জন এর বেশি ২০০ জন এর নিচে প্রত্যেক কে ৪০০০ টাকা করে দিতে হবে। আর ২০০ জন এর বেশি (অর্থাৎ 2০১ জন থেকে ) যত আছে তাদের প্রত্যেককে ৩০০০ টাকা করে দিতে হবে। 
  
 এখন আমি একটা প্যারমিটার দিবো, সেটা যেকোন সংখ্যার হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে পিকনিক এর বাজেট কত টাকা হতে পারে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে, আবার ২০০ এর বেশি ও হতে পারে। সব কেইস ভালো করে টেস্ট করে নিবে। 
 */
function picnicBudget(perticipents){

    if(typeof perticipents !=='number' || perticipents <0){
        return 'perticipents should be valid positive integer number'
    }
 else{
    let first100Cost=0;
    let second100to200Cost=0;
    let remainingCost=0;
    let totalCost=0;
    if(perticipents <=100){
        first100Cost= perticipents * 5000;
        return first100Cost;
    }
    else if(perticipents <=200){
        first100Cost=5000 * 100;
        remainingCost=perticipents -100;
        second100to200Cost= remainingCost * 4000;
        total=first100Cost + second100to200Cost;
        return total;
    }
    else{
        first100Cost=5000*100;
        second100to200Cost=4000*100;
        remainingCost=(perticipents -200) * 3000;
        total=first100Cost + second100to200Cost + remainingCost;
        return total;
    }
 }

}
console.log(picnicBudget(201))
