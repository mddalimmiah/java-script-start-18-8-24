
function monthlySavings(arr, livingCost){
    let sum=0;
     if(Array.isArray(arr) === true && typeof livingCost === 'number'){
       for(let income of arr){
         
         if(income>= 3000){
            income=income * 0.80;
            
         }
         sum = sum + income;
 
       }
       let savings= sum-livingCost;
       if(savings >= 0){
         return savings;
       }
       else {
         return 'earn more';
     }
    
     }
     else {
         return 'invalid';
     }
 }
 
 const result=monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
 console.log(result)