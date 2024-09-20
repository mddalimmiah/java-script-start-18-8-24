/*
validation :  কোন কিছু ইনপুট দিলে আউটপুট দেওয়ার আগে চেক করবে ইনপুট সঠিকভাবে বা  ঠিক মত দেওয়া হয়েছে কিনা তা চেক করবে তাই ভ্যালিডেশন। 

*/
 function add(x, y){
   if(typeof x !=="number" || typeof y !=='number'){
      return 'please provide valid number'
   }
    return x+y;

 }
 const result =add(3, '6')
 console.log(result)

 function objectName(info){
   if(typeof info !=='object'){
      return 'Input should be an object';
      }
      else if(!info.name || !info.age){
         return 'object must contain name and age property'
      }
      else if(typeof info.name !=='string' || typeof info.age !=='number'){
         return 'name should be string and age should be a number '
      }
      else if(info.age<=0){
         return 'age should be a positive number'
      }
   return `my name is ${info.name}. my age is ${info.age}`;
 }

//  console.log(objectName({name:'dalim', age:30}))
 console.log(objectName({name:'dalim', age:10}))