function doubleIt(number){

    const doubled=number * 2;
    console.log(number, doubled);
}
console.log('i will call the function');
doubleIt(15) // ফাংশন কল করার পর ()  ব্রাকেটের ভিতর যা দেই তাকে প্রোগ্রামিং এর ভাষাং আরগুমেন্ট বলে ( arguments)

console.log("------------");
doubleIt(80);
console.log("---------------"); // ei gola bujar subidarthe output dekhar jonno 
doubleIt(100)
// debug korte chaile jodi break point na dei tahle f11 diye function er vitore dukaite hobe 
const number=55;
doubleIt(number) // paramete chara amra variable diye o man rakhte pari . 

const money =200;
doubleIt(money);

function difference (num1, num2){

    const diff=num1 - num2;
    console.log(num1, num2, "num1 and num2 difference:", diff); // 2 ta consoe 1 tar modday deya jay
}
const fatherAge=50;
const motherAge=30;

difference(fatherAge, motherAge);