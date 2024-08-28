var x =10;
// if-else 
/*
if (condition){
    condition true;
}
else {
    condition false;
} */
var x =25;
if(x>10){
    console.log("x 10 er cheye boro");
}
else {
    console.log("x 10 er cheye choto");
}

// var abc=30;
// if(abc===30){
//     console.log("equal to 30");
// }
// else{
//     console.log("not equal to 30");
// }
var abc=30;
if(abc!==30){
    console.log(" not equal to 30");
}
else{
    console.log(" equal to 30");
}

// multiple condition
/*
if (condition){

}
else if(condition){
}
else if(condition){
}
else{
} */
var temperature =10;
if(temperature >30){
    console.log("it's a hot day");
}
else if(temperature >20){
    console.log("it's a warm day");
}
else if(temperature >10){
    console.log("it's a cool day");
}
else {
    console.log("it's a cold day");
}

// nested if-else

/*
if (condition){

}
else if(condition){
}
else if(condition){
}
else{
} */
// Nested if-else

// logical && operator
var hour =14;
if(hour >= 6 && hour <12){
    console.log("Good morning!");
}
else {
    if(hour >=12 && hour <18){
        console.log("Good afternoon!");
    }
    else{
        console.log("Good evening!");
    }
}
// logical || or operator
var x =7;
// x man jodi 5 er boro hoy or /othoba 10 er boro hoy tahle true hobe
if(x>5 || x>10){
    console.log("true")
}
else{
    console.log("False");
}