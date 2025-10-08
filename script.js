//-----------------------
// Modern JavaScript
//-----------------------

//var is function scope|let & const are block scope

//--var---
/*
var num = 20;
function multiply(){
    var num1 = 10;
    console.log(num);
    console.log(num1);
}
    
multiply();
//local variable
/*
var num = 20;
function multiply(){
    var num1 = 10;
    console.log(num);
    console.log(num);
}
multiply();
*/
//global variable
/*
var num = 20;
function multiply(){
    num = 10;
    console.log(num);
   
}
multiply();
console.log(num);

if (num2 > 10) {
  var num2 = 200;
}
console.log(num2);

let num = 20;
if(num > 10){
    let greet = "Hello";
    console.log(greet);
    great ="World";
    console.log(greet);

    let num =15;
    console.log(num);
}

//---const---
const num = 20; 
if(num > 10){
    const greet = "Hello";
    console.log(greet);
    
    const num =15;
    console.log(num);
} 
console.log(num);

//----template literals---

//----concatination---
let name = "Mayantha";
let age = 22;
let address = "Colombo";

let info = "My name is " + name + ", I'm " + age + " years old and I live in " + address + ".";
console.log(info);

//---Template literals---   
let fname = "Mayantha";
let lname = "Sapumal";
let fullname =`My name is ${fname } ${lname}`;
console.log(fullname);


//-------
function Myname(name){
    return `My name is ${name.toUpperCase()}`;
}
console.log(Myname("Mayantha"));

//--argument object--
function myMarks(){
    console.log(arguments);
}
myMarks(80, 90, 75, 88);
*/

//--rest parameters---
function myMarks(...marks){
    console.log(marks);
}
myMarks(80, 90, 75, 88);
