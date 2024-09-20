const mobiles=[

    {name:'samsung', price:50000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'Realmi', price:20000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'htc', price:18000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'Iphone', price:120000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'Google', price:80000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'Lenovo', price:22000, camera:'12mp', color:'Black', processor:'Quad Core'},
    {name:'Oppo', price:30000, camera:'12mp', color:'Black', processor:'Quad Core'},
  ]
  
  function getObjectHeighestPhones(phones){
      // console.log(phones)
      let max=phones[0];
      for(const phone of phones){
          // console.log(phone)
          if(phone.price>max.price){ // object er sathe number tolona kora jay na tai eikhane price er sathe tolona korar jonno .price deya hoyece
              max=phone;
          }
      }
      return max;
  }
  const heighest=getObjectHeighestPhones(mobiles);
  console.log('Heighest Price mobiles:',heighest)