// task chilo eta korechi
function minNubers(numbers){
 console.log(numbers)
 let minS=numbers[0];
 for(let item of numbers){

    // console.log(item)
    if(item<minS){
        minS=item;
    }
 }
return minS;
}
const heights=[65, 66, 72, 75, 78, 60, 80, 83, 61, 60, 55, 56, 57];
const min=minNubers(heights);
 

console.log('the array of Min number:', min)

// eta jankar vai er 

const prices=[20000, 16000, 18000,12000,30000, 40000];
function getMinNumbers(numbers){
    console.log(numbers)
    let cheapest=numbers[0];
    for(let cheap of numbers){
        // console.log(cheap)
        if(cheap<cheapest){
            cheapest=cheap;
        }
    }
    return cheapest;
}
const cheap=getMinNumbers(prices);
console.log('the cheapest price:', cheap)