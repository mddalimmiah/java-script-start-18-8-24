/*
types of function :
1. no parameters, no return 
2. no parameters, but return;
3. parameters, but no return;
4.parameters, return;
*/
function fun1(){
    console.log("no parameters, no return ")
}
// no parameters, but return;
function fun2(){
    return 5;
}
// parameters, but no return
function fun3(name){
console.log(name)
}
// parameters, return;
function fun3(x, y){
    return x+y;
}