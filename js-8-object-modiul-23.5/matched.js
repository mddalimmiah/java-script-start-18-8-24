const products=[
    {id:1, name:'samsung phone', price:190000},
    {id:2, name:'lenovo', price:190000},
    {id:3, name:'iphone phone', price:190000},
    {id:4, name:'apple', price:190000},
    {id:5, name:'walton phone', price:190000},
    {id:6, name:'samsung', price:190000},
    {id:7, name:'blackberry', price:190000},
    {id:8, name:'realme', price:190000},
    {id:9, name:'xoumi phone', price:190000},
    {id:10, name:'xeoni', price:190000},
];
for(const product of products){
 
    console.log(product)
   
}
function matchedProducts(products, search){
    const matched=[];
 for(const product of products){
    
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
    }

 }
 return matched;
}
const result=matchedProducts(products ,'Phone')
console.log(result);