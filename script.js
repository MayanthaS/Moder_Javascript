//-----------------------
// Modern JavaScript
//-----------------------

//var is function scope|let & const are block scope

//--var---
var num = 20;
function multiply(){
    var num1 = 10;
    console.log(num);
    console.log(num1);
}
multiply();