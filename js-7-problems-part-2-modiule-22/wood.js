/*
chair --> 3cft (cubic feet)
table --> 10cft (cubic feet)
bed --> 50 cft (cubic feet)
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const chairTotalWood=chairQuantity *perChairWood;
    const tableTotalWood=tableQuantity *perTableWood;
    const bedTotalWood=bedQuantity *perBedWood;
    const totalWood=chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood=woodQuantity(5, 6, 1);
console.log('total wood', wood);

function shoppingCost(shirtQuantity, pantQuantity, shoeQuantity){

    const perShirtPrice=300;
    const perPantPrice=500;
    const perShowPrice=900;
    const shirtTotalCost=shirtQuantity * perShirtPrice;
    const pantTotalCost=pantQuantity * perPantPrice;
    const shoeTotalCost=shoeQuantity * perShirtPrice;
    const totalCost=shirtTotalCost + pantTotalCost + shoeTotalCost;
    return totalCost;

}
const cost=shoppingCost(12, 4, 3);
console.log('total shopping Cost:', cost);