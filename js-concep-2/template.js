const mypetName={
    name:'travis',
    food:'fish',
    color:'black',
 
};
//  eta ekta jotil .. khkn quotation nibo khkn . dibo buja muskil tai js string template niye asce 
// const sentence ="my pet name is " + mypetName.name+ ". His favorite food is " +mypetName.food+ " .and his color is " +mypetName.color;
// const sentence=`my pet name is ${mypetName.name}. His favorite food is ${mypetName.food}. and his color is${mypetName.color}.`

// eta template string eta te o akta sentence k object er value diye easyly declare kora jay .. eta te bactic sign use kora hoyece...(1 er left side a backric sign)
const sentence=`my pet name is ${mypetName.name}. His favorite food is ${mypetName.food}. and his color is${mypetName.color}.`;
console.log(sentence);