const numbers=[300, 100, 500, 800, 1200];

const products=[
    {name: 'shampoo', price:300},
    {name: 'chironi', price:100},
    {name: 'shirt', price:500},
    {name: 'pant', price:800},
    {name: 'shoe', price:1000},
];

function getShoopingTotal(products){
    // console.log(products)
    let total=0;
    for(const product of products){
        // console.log(product)
        total=total +product.price; // object er sathe object jog kora jay na amra jog korbo object er price k tai .price deye hoyece;
    }
    return total;
}
const total=getShoopingTotal(products)
console.log('total Products Price:', total)