/*
Problem-02: Good Name , Bad Name
⚠️ Function Name Must be checkName()
সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
কে উ এভাবে ক্ষে পাক ।
সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে a, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।
এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
করবে Good Name আর নাম টি খারাপ হলে রি টার্ন করবে Bad Name
Input : ত োমার ফাংশন টি ইনপুট নে বে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
ছ োট হাতে র বা বড় হাতে র হতে পারে ।
Output : ফাংশন টি আউটপুট হি সে বে রি টার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad
Name
Challenge 📢 : ইনপুট হি সে বে স্ট্রি ং টাইপে র বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রি টার্ন
করবে ।
SAMPLE INPUT SAMPLE OUTPUT (স্ট্রি ং এ আউটপুট হবে )
Salman Bad Name
RAFEE Good Name
Jhankar Bad Name
199 invalid
["Rashed"] invalid
/*function signature/sample */

function checkName(name) {

    if(typeof name !=='string'){
        return 'invalid'
    }
   const nameChar=['a', 'y', 'i' , 'e ',' o ', 'u', 'w'];

  if(nameChar.includes(name.charAt(name.length-1))){
    return 'good name';
  }
    else{
return 'bad name';
    }
  }

  
    


console.log(checkName(199))