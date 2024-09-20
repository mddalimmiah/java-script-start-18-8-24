const student={
    name:'dalim',
    id:121,
    address:'tb gate',
    isSingle:true,
    friends:['sidrat', 'safi', 'muntaha'],
    movies:[{name:'my name is khan', actor:'srk', release:'2011'}],
    act:function(){
        console.log('this is act')
    },
    car:{
        brand:'tesla',
        price:500000,
        made:2025,
        menufacturer:{
            name:'tesla',
            ceo:'elon mask',
            country:'usa'
        }

    }
}
console.log(student)
student.act()