/*
Problem 03 : Virus in my Array
⚠️ Function Name Must be deleteInvalids()
ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]
Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।
Output :
ফাংশন টি আউটপুট দে বে আরে কটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।
Challenge : ফাংশন টি তে Array ছাড়া অন্য ক োন ভ্যালুপাস করলে সে টা একটা error message
রি টার্ন করবে ।
SAMPLE INPUT SAMPLE OUTPUT
[1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] [ 1, 18, -19 ]
["1" , {num:2} , NaN ] []
[ 1 , 2 , -3 ] [ 1, 2, -3 ]
{num: [ 1 , 2 , 3 ]} Invalid Array —------------------------------(string)
(you can give your own string error message)
//write your code here
}
/*function signature/sample */


function deleteInvalids(array){
  if(Array.isArray(array)===false){

    return 'invalid array'
  }

    const nameArray=[];
    for(let arr of array){
      if(typeof arr==='number' && !Number.isNaN(arr)){
        nameArray.push(arr)
      }
       }
       return nameArray; 
   
}



// const input=[ NaN, 1,12,0 ,-1 , undefined ];
const input={num: [ 1 , 2 , 3 ]} 
console.log(deleteInvalids(input))