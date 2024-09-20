const mobiles=[

  {name:'samsung', price:50000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'Realmi', price:200000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'htc', price:180000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'Ipone', price:120000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'Google', price:80000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'Lenovo', price:22000, camera:'12mp', color:'Black', processor:'Quad Core'},
  {name:'Oppo', price:30000, camera:'12mp', color:'Black', processor:'Quad Core'},
]

function getObjectCheapestPhones(phones){
    // console.log(phones)
    let min=phones[0];
    for(const phone of phones){
        // console.log(phone)
        if(phone.price<min.price){ // object er sathe number tolona kora jay na tai eikhane price er sathe tolona korar jonno .price deya hoyece
            min=phone;
        }
    }
    return min;
}
const cheap=getObjectCheapestPhones(mobiles);
console.log('cheapest mobiles:', cheap)