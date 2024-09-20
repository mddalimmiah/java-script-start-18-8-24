/*
1. [ ফাংশন নাম দিতে হবে AnaToVori].  একটা ফাংশন এ  প্যারামিটার হিসেবে নিবে  আনা (Ana) । তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 
*/
 function AnaToVori(Ana){
    if(typeof Ana !=='number' || Ana<0){
        return 'please provide a valid integer number'
    }
    const Vori=Ana * 0.0625;
    return Vori;
 }
 console.log(AnaToVori(10))
