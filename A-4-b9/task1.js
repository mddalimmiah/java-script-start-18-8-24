
/*
Problem-01 : Help The Zoo Manager
⚠️ Function Name Must be calculateMoney( )
বাকের ভাই মিরপুর চি ড়ি য়াখানার ম্যানেজার । প্রতিদিন তাকে অসংখ্য টিকেট বিক্রি করতে হয় । টাকার হিসেব এ
তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হেতু সদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।
চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।
Input :
ফাংশন টি ইনপুট নে বে টি কে ট সে ল করার সংখ্যা । ইনপুট হবে একটি পজি টি ভ সংখ্যা । (0<=Input)
Output :
টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
ফাংশন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছুই হতে পারে ।
💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300
Challenge 📢 : বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সংখ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
আউটপুট হি সে বে রি টার্ন করে দি তে হবে ।
SAMPLE INPUT SAMPLE OUTPUT
10 300
1055 125700
93 10260
-130 Invalid Number —------------------------------(string)
(you can give your own string error message)
/*function signature/sample */


function calculateMoney(ticketSale){
    if(ticketSale<0){
        return 'please provide valid positive integer number'
    }
 const ticketPrice=120;
 const dailyCost=500 +(50 * 8);
 totalIncome=(ticketSale * ticketPrice) - dailyCost;
 return totalIncome;
 

}

console.log(calculateMoney(1055))
  