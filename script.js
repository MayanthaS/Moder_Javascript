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


//--rest parameters---
function myMarks(...marks){
    console.log(marks);
}
myMarks(80, 90, 75, 88);


//spread operator
let a = [10, 20, 30];
let b = [40, 50, 60];
let c = [...a, ...b];
console.log(c);

//--------
let fullname = ['Mayantha', 'Sapumal'];
console.log(fullname);
console.log(...fullname);//split the array elements

//---------
let subject = "Maths";
console.log(subject);
console.log(...subject);//split the string characters

//----objects
let subjects = {
    Maths: 80,
    Science: 75,
    English: 90
};
console.log(subject);
console.log({...subject});//split the object elements
let persona ={
    name: "Mayantha",
    age: 22,
    address: "Colombo",
    ...subjects
};
console.log(persona);
console.log({...persona});//split the object elements   

//-------
const numbers = [10, 20, 30];
function sum(x,y,z){
    return x + y + z;
}
console.log(sum(...numbers));


//deafualt parameters
function multiply(a, b=2){
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

const bDayInfo = (name, date=1, month="January", year=2000) => {
    return `My name is ${name} and my birthday is on ${date} ${month} ${year}.`;
}
console.log(bDayInfo("Mayantha", 22, "June", 2001));
console.log(bDayInfo("Kavindu"));

function getYear(currentYear, years=5){
    return currentYear+years;
}
console.log(getYear(2025));
console.log(getYear(2025, 10));

//-----------------------
function multiply(num1,num2=4){
    return num1*num2;
}
console.log(multiply(6));
console.log(multiply(8));

const bDay = function(name,birthYear = new Date()){
    console.log(`${name} was born in ${birthYear.getFullYear()}.`);
}
bDay("Mayantha", new Date(2001,5,22));
bDay("Kavindu");

//-----------------------
//for  Loop
//-----------------------
const cities = ["colombo", "kandy", "galle"];
for(let x = 0;x < cities.length; x++){
    console.log(cities[x]);
}
//for of Loop
const countries = ["Sri Lanka", "India", "USA"];
for (let y of countries){
    console.log(y);
}
    */

const names = ["Mayantha", "Kavindu", "Nimesh"];
for (let n of names.entries()){// get each  element as an entry with the index
    console.log(n);
}
///--------
const subjects =["Maths", "Science", "English"];
for (let s of subjects){
    console.log(s);
}
