const today=new Date(); // today date dibe 
const date=new Date('2062-10-19')
console.log(date.getMonth());
console.log(date.getDay());
const specificDate=new Date (2024, 0, 26)
console.log(specificDate)
specificDate.setMonth(10)
console.log(specificDate.toLocaleDateString('en-GB'))

// unix epox (diye 1970 theke bortoman porjonto day k minit abong second a convert kora jay)