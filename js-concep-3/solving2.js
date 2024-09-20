/*
2. [ ফাংশন নেম দিতে হবে pandaCost]:  তিনটা প্যারামিটার  লাগবে।
১। ১ টি সিঙ্গারার দাম -৭ টাকা
২। ১ টি সমুচার দাম -১০ টাকা
৩। ১ টি জিলাপি এর দাম -১৫ টাকা 
এখন সে যদি  বিভিন্ন  সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে মোট কত টাকা খরচ হলো সেই সংখ্যা রিটার্ন করবে। 
*/
function pandaCost(singara, samucha, jilapi){
    if(typeof singara !=='number' || typeof samucha !=='number' || typeof jilapi !=='number' ){
        return 'please provide valid integer number'
    }
    else if(singara <0 || samucha < 0 || jilapi <0){
        return 'please all parameter should be positive numbers'
    }
   else{
    const singaraPrice=7;
    const samuchaPrice=10;
    const jilapiPrice=15;
    const total= (singara * singaraPrice ) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
    return total;
   }
}
console.log(pandaCost(1, 2, 0))