const products=[
    {name: 'shampoo', price:300, Quantity:2},
    {name: 'chironi', price:100, Quantity:3},
    {name: 'shirt', price:700, Quantity:5},
    {name: 'pant', price:1200, Quantity:1},
 
];
function getCartTotal(products){
    let total=0;
    for(const product of products){
       const productQuantityCost=product.price * product.Quantity;
        // console.log(product)
        total=total + productQuantityCost;
        
}
return total;
}
const shoppingTotal=getCartTotal(products);
console.log("shopping cart total pirce:",shoppingTotal)