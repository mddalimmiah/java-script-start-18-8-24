const person={

    name: 'Dalim Miah',
    age:30,
    profession: 'Developer',
    salary: 25000,
    married:true,
    'fab places':['coxsbazar', 'sylhet', 'bandorban'],
}
// dot notation and bracket notation diye property change o kora jabe 
person.salary=30000;
person['age']=35;
person['fab places']=['singapur', 'maldiv', 'pataya'];

const profName='profession';
person[profName]='devops';
console.log(person);