function vatkhao(){
    console.log("hand wash kore aso");
    console.log('sit down');
    console.log('plate a vaat nao');
    console.log('vat khao dhire dhire susthe..gopat gopat khao');
    }

    vatkhao();

    /*
    square korar function
    3 --> 3*3=9
    4--> 4*4=16
    5--> 5*5=25
    11--> 11*11=121
    */

    function square(number){
        // (number) এটা একটা প্যারামিটার । প্যারামিটার একাধিক হতে পারে। 
        // console.log(number);
         console.log('value of the number of parameter:', number);
         const borgo=number * number;
         console.log('value of the borgo:', borgo);
    }

    square(10);
//  প্যারামিটার যেহেতু দিছি তাই ফাংশন কল করার পর ও প্যারমিটার দিয়ে দিতে হবে নয় কোন কিছুই দিবে না। যেহেতু নাম্বার নামক প্যারমিটার দিছি আবার কনসল ও করছি নাম্বার তাই দিতে হবে। 
console.log('-------------');
square(5)
square(405);
function add (num1, num2){
    // console.log(num1, num2)
    const sum=num1 + num2;
    console.log("sum of num1 and num2:", sum);
}
// call the function and parameter
add(10, 20);

function addAll(a, b, c, d,e){
    const sum=a+b+c+d+e;
    console.log(a, b, c,d,e) // number ba parameter ja dibo ta dekhar jonno 
    console.log('sum of a+b+c=d+e:', sum); // parameter a number kom dile output NaN dekhabe
}
// addAll(10, 20, 30, 40, 50); 
addAll(10, 20, 30, 40); // parameter a 5 ta nichi jodi call function parameter 5 ta na dei tahle undefined dekhabe:এবং আউটপুটে  output NaN dekhabe