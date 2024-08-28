// const mypetName={
//     name:'travis',
//     isMale:true,
//     age:2,
//     food:'fish',
//     color:'black',
//     specise:'holoBeral',
//     'is married':false,

    
// };
// dot notation
// bracket notaion ei 2 ta notation diye amr value poriborton korte parbo ba assign korte parbo tobe bidgute word hole bracket notation diye korbo

// // mypetName.sound='meo mewo';
// mypetName['sound']='hamba hamba';
// //  key ta k jodi akta variable rakhi tahle
// const x= 'name';
// console.log(mypetName[x]) // variable theke name ta dekhanor jonno
// mypetName.color='white'; // color ta change kora hoyece dot notation diye
// mypetName['is married']=true; // bracket notation diye  is married change kora hoyece
// console.log(mypetName);
// console.log(mypetName.age); // dot notation diye age namer key er value dekhar jonno
// const myPet=mypetName['color']; //bracket notation diye color dekhar jonno
// console.log(myPet)
// console.log(mypetName['is married']) 

const mypetName={
    name:'travis',
    isMale:true,
    age:2,
    food:'fish',
    color:'black',
    specise:'holoBeral',
    'is married':false,

    
};
// // object loop use korar jonno for in loop bebohar kora hoy
// // object a for in loop use kora hoy

// for(let key in mypetName){
//     // console.log(key, typeof key)
//     console.log(mypetName[key])
// }

const student={
    name:{
        fristName:'Md.',
        MiddleName:'Dalim',
        LastName:'Miah',

    },
    subjects:['English', 'Bangla'],
    isMale:true,
    age:30,
    dep:'cse',
    
   }
console.log(student.name.MiddleName)
console.log(student.subjects[1])