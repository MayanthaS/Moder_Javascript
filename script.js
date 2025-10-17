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
  

const names = ["Mayantha", "Kavindu", "Nimesh"];
for (let n of names.entries()){// get each  element as an entry with the index
    console.log(n);
}
///--------
const subjects =["Maths", "Science", "English"];
for (let s of subjects){
    console.log(s);
}

const sym1 = Symbol();
    console.log(typeof (sym1));
    const sym2 = Symbol();
    console.log((sym2));

    let fname = Symbol("fname");
    let lname = Symbol  ("lname");
   
    console.log(fname === lname);
    console.log(fname);
    console.log(lname);

    console.log(fname.toString());



//function declaration
function myAge(age){
    console.log(`${age}`);
}
myAge(22);

//function expression
const myName = function(name){
    console.log(`${name}`);
}

 //arrow functions
 const myCountry =() =>{
    console.log("Sri Lanka");
 }
    myCountry();

const sum =(a ,b )=>a+b;
console.log(sum(5, 10));

const square = x => x * x;
console.log(square(6));

const city= name =>`My city is ${name}`;
console.log(city("Colombo"));

const city1 = (city1) =>{
    let out = `My city is ${city1}`;
    return out;
}
console.log(city1("Colombo"));

//how to passing argument

setTimeout(function(){
    console.log("Hello");
},5000);

setTimeout (() =>{
    console.log("Hello");
},6000);    

//----------------------
const fact = function(n)  {
    let f =1;
    for(let i = n; i>1 ; i--){
        f = f * i;
    }
    return f;
}
console.log(fact(5));

const fact1 = n => {
    let f =1;
    for(let i = n; i>1 ; i--){
        f = f * i;
    }
    return f;

}
console.log(fact1(5));


console.log("Hello");
//----------------------

const myMarks = (...marks) =>{
    console.log(marks);
}
myMarks(80, 90, 75, 88);

//-------------------
const salCal= (salry,improvement= 5)=>{
    let nSal = salry*((improvement+100)/100);
    console.log(`${nSal}`);
}
salCal(10000,10);
salCal(10000);

//-------------------

//destructuring  object

//get object vslues
const user ={
    first :"lahiru",
    last :"perera",
    age :22
}

const fname = user.first;
const age = user.age;
console.log(fname);
console.log(age);

//----
//destructuring
//object destructuring 
/*
const std ={
    name :"Kavindu",
    degree :"IT",
    age :23,
    subjects :["Maths", "Science", "English"]
}
const{name, degree, age: stdAge, subjects} = std;
 console.log(name);
 console.log(degree);
 console.log(stdAge);
 console.log(subjects);
 console.log(subjects[1]);

 const {name: stdName} = std;
 console.log(`My name is ${stdName}`);

 const {age:a, degree:d} = std;
    console.log("My age is ${a} and my degree is ${d}");

//array destructuring

 const names =["Saduni", "Kavindu", "Nimesh"];

 const [name1, name2, name3] = names;
 console.log(name1);
 console.log(name2);
 console.log(name3);

 const displaySubject =() =>["Maths", "Science", "English"];
 let [sub1,sub2] =displaySubject();
 console.log(sub1);
 console.log(sub2);


 //Map object(ES6)

 let myMap = new Map();
 console.log(myMap);


 let map = new Map();
 map.set("fname", "Mayantha");
 map.set("lname", "Sapumal");
 map.set("age", 22);

 console.log(map);

 //get values from a map
 console.log(map.get("fname"));
 console.log(map.get("age"));
 

 console.log(map.has("lname"));
 console.log(map.has("address"));
    console.log(map.size);

for(let x of map){
    console.log(x);
}
for(let x of map){
    console.log(`${x[0]}: ${x[1]}`);
}
    

//sets
let mySet = new Set();
console.log(mySet);

mySet.add("pasan");
mySet.add("kavindu");
mySet.add("nimesh");
mySet.add("pasan");
console.log(mySet);
mySet.add("mayantha");

for (let y of set){
    console.log(y);
}
    
//-------------

let  nset = new Set(["Maths", "Science", "English", "Maths"]);
console.log(nset);

console.log(nset.size);
console.log(nset.has("Science"));


//object construction
function Course (_subject){
    this.subject = _subject;
    this.getMarks = () =>{
        console.log(`${this.subject}: 80`);
        console.log(this);
    }
}
let cou1 = new Course("Maths");
console.log(cou1);
cou1.getMarks();

//-------
console.log(this);

function sample(){
    console.log(this);
}
sample();
 
//----------------

class Course{
    constructor(_subject){
        this.subject =_subject;
    }
    getMarks(){
        console.log(`${this.subject}:80`);
        console.log(this);
    }
}
let cou = new Course("Science");
console.log(cou);
cou.getMarks();

//static keyword

class Car{
    constructor(brand){
        this.brand = brand;
    }
    //static property
    static company = "Toyota";
    //static method
    static getPrice(tax){
        console.log(`Price is ${tax * 1000000}`);
          
    }
}
console.log(Car.company);
Car.getPrice(0.15);

//destructuring  after remain
//object destructuring
const std ={
    name :"mayantha",
    degree:"BSE",
    age:22,
    subjects:["Maths", "Web development", "English"]
};
const{name,degree,age:stdage, subjects} =std;
console.log(name);
console.log(degree);
console.log(stdage);
console.log(subjects);
console.log(subjects[1]);

const {age:a} = std;
console.log(`My age is ${a}`);

const {degree:d} = std;
console.log(`My degree is ${d}`);

//array destructuring
//after reaminning
const names = ["mayantha","sapumal","pasan"];
const[name1,name2,name3]=names;
console.log(name1);
console.log(name2);
console.log(name3);


const displaySubject =() =>["Webdevelopment","UI/UX","Programing In Python"];
let[sub1,sub2,sub3]=displaySubject();
console.log(sub1);
console.log(sub2);
console.log(sub3);

//-----------------------
//map object
let myMap = new Map();
console.log(myMap);
let map = new Map();
map.set("fname","mayantha");
map.set("lname","sapumal");
map.set("age",22);
console.log(map);
//get values from a map
console.log(map.get("fname"));
console.log(map.get('age'));
console.log(map.has("lname"));
console.log(map.has("address"));
console.log(map.size);

//sets
 let mySet = new Set();
 console.log(mySet);
 myMap.set("pasan");
 mySet.add("kavindu");
 mySet.add("nimesh");
 mySet.add("pasan");
console.log(mySet);


//getters setters

//normal function  inside an object

const person ={
    fname:"mayantha",
    lname:"sapumal",
    fullname:function(){
        return`${this.fname} ${this.lname}`;
    }

};
console.log(person.fullname());

const person1 = {
   
        //setter
    set fullname(names){
        const parts = names.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];

    },
     fname:"kavindu",
    lname:"perara",
    //Getter
    get fullname(){
        return `${this.fname} ${this.lname}`;
    }
    
    
};
console.log(person1.fullname);
person1.fullname = "mayantha sapumal";
person1.fullname = "nimesh de silva";
person1.fullname = "pasan kumara";
console.log(person1.fullname);
const person2 ={
    //setter
    set fullname(names){
        const parts = names.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    },
    fname: "",
    lname: "",
    //getter
    get fullname(){
        return `${this.fname} ${this.lname}`;
    }
};

person2.fullname = "nimesh silva";
console.log(person2.fullname);

//-----------------------

//getters setters in class

class shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    //getter
    get area(){
        return this.width * this.height;
    }
    //setter
    set area(values){
        const val =values.split(' ');
        this.width = val[0];
        this.height = val[1];
        
    }
}
let sh = new shape(10,20);
console.log(sh.area);
console.log(sh.width);
console.log(sh.height);

sh.area = "30 40";
console.log(sh.area);
console.log(sh.width);
console.log(sh.height);

//inheritance

class Car{
    constructor(model){
        this.model = model;
    }
    start(){
        return `${this.model} starting`;
    }

}
class ElectricCar extends Car{
    constructor(model, battery){
        super(model);
        this.battery = battery;
    }
    start(){
        return `${this.model} starting with battery ${this.battery}`;
    }
}
let ec = new ElectricCar("Tesla", "100kWh");
console.log(ec);
console.log(ec.start());

//-----------------------
//Exponential operator
console.log(2 ** 3);
console.log(5 ** 4);

//Array methods


//---Filter
const  students = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];
const filterStd = students.filter((std) =>{
    return std.age > 20;
});

console.log(filterStd);

//Map
const  student = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];
const mapStd = student.map((std) =>{
    return std.name;
});

console.log(mapStd);

//find
const  student1 = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];
const findItem = student1.find((std)=>{ return std.age === 21; });
console.log(findItem);


//for each
const  student2 = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];
let sum = 0;
student2.forEach((std)=> console.log(getSum(std.age)));
function getSum(age){
    sum += age;
    return sum;    
};
console.log(sum);


//some
const  student3 = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];

const aboveAge =student3.some((std) => std.age >21);
console.log(aboveAge);

//every
const  student4 = [
    {name:"Mayantha",age:22},
    {name:"Kavindu",age:19},
    {name:"Nimesh",age:21},
    {name:"pasan",age:18}
];
const allAboveAge =student4.every((std) => std.age >17);
console.log(allAboveAge);

//reduce
const subjects = [
    {name:"Web Development", marks:80},
    {name:"information Technology", marks:75},
    {name:"English", marks:90},
    {name:"Data Science", marks:85},
    {name:"AI", marks:95}
];
const totalMarks = subjects.reduce((total,sub) => {
    return total +sub.marks;
}, 0);
console.log(totalMarks);

//sort

const ages = [22,19,21,18,25,30];
ages.sort((a,b) => a-b);
console.log(ages);

//Includes
const num = [10,20,30,40,50];
console.log(num.includes(30));
console.log(num.includes(60));

let names = ["Mayantha", "Kavindu", "Nimesh"];
console.log(names.includes("Kavindu"));
console.log(names.includes("Pasan"));

//-----------------------

//promises

const product =[
{
    name:"Laptop",
    price: 50000,
    available: true
},
{
    name:"Mobile",
    price: 30000,
    available: false    
}
];
//display products
 function getProduct() {
    setTimeout(() => {
      let output = '';
      product.forEach((p) => {
        output += `
          <div>
            <h2>${p.name}</h2>
            <p>${p.price}</p>
            <h4>${p.available ? "Available" : "Not Available"}</h4>
          </div>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  // Add a new product, then call getProduct() after it’s added
  function addProducts(newProduct, callback) {
    setTimeout(() => {
      product.push(newProduct);
      callback(); // show updated list after adding
    }, 2000);
  }

  // Add new product, then display all
  addProducts({ name: "Tablet", price: 20000, available: true }, getProduct);

//------------
//promises
let pr = new Promise((resolve, reject) => {
    let ans = 2 + 3;
    setTimeout(() => {
        if (ans === 7) {
            resolve("Success");
        }else{
            reject("Failed");
        }
    }, 3000);
});

pr.then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});

//-----------------------
const product =[
{
    name:"Laptop",
    price: 50000,
    available: true
},
{   
    name:"Mobile",  
    price: 30000,
    available: false    
}
];
//display products
function getProduct() {
    setTimeout(() => {
      let output = '';
      product.forEach((p) => {
        output += `
          <div>
            <h2>${p.name}</h2>
            <p>${p.price}</p>
            <h4>${p.available ? "Available" : "Not Available"}</h4>
          </div>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  // Add a new product, then call getProduct() after it’s added
  function addProducts(newProduct, callback) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
        let ln  = product.length;
        product.push(product);
        if(product.length > ln){
             resolve("product added successfully"); 
        }else{
            reject("Failed to add product");
        }
    }, 2000);
   });
  }

  // Add new product, then display all
  addProducts({ name: "Tablet", price: 20000, available: true }, getProduct)
  .then((resolve) =>{
      getProduct();
      console.log(resolve);
  }).catch((err)=> {
    console
  })
    
//-----------------------
function getUserCountry(url){
    return new Promise((resolve, reject) => {
        const xmlreq = new XMLHttpRequest();
        xmlreq.open("GET", url);

        xmlreq.onload = () => {
            if (xmlreq.status === 200) {
              resolve(JSON.parse(xmlreq.response));
            } else {
                reject( Error(xmlreq.response));
            }
        };

        xmlreq.onerror = () => {
            reject(new Error("Network error"));
        };

        xmlreq.send();
    });
}
getUserCountry('https://restcountries.com/v3.1/all').then((response)=>{
    console.log(response);
}).catch((error) =>{
    console.error('Failed',error);
});

//-----------------------

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
});
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1500);   
});

Promise.all([pr1, pr2, pr3]).then((messages) =>{
    console.log(messages);
})
.catch((message) =>{
    console.log(message);
});


//Async await

// Normal promise 
function dialEmergency(numbers){
    return new Promise((resolve,reject) =>{
        console.log(`Dialing ${numbers}...`);
        if(numbers === 119){
            resolve("Emergency services contacted");
        }else{
            reject("Invalid emergency number");
        }
    })
}
function processCall(response){
    return new Promise((resolve) =>{
        console.log("Processing response...");
        resolve(`Response processed: ${response}`);
    });

}
dialEmergency(119).then((response) =>{
    return processCall(response);
}).then((processedResponse) =>{
    console.log(processedResponse);
}).catch((error) =>{
    console.error(error);
});



async function handleOperation(){
    const response = await dialEmergency(119);
   console.log("Response received");
   const processedResponse = await processCall(response); 
   console.log(processedResponse);  
}
handleOperation();

async function handleOperation(){
    try{
        const reponse = await dialEmergency(119);
        console.log("Response received");
        const processedResponse = await processCall(reponse);
        console.log(processedResponse);
    }
    catch(error){
        console.error(error);
    }
}
handleOperation();
*/
//-----------------------
//fetch api
//console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')

.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Error fetching data");
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('Error:', error);
});
*/
//-----------------------
//create a new post
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'Content-type': 'application/json',
    },
    body:JSON.stringify(
      {
        title: 'foo',
        body: 'bar',
        userId: 11,
      }
   )
    }).then((response) => {
    if(response.ok){
        return response.json();
    }else{
        return Error("Error creating post");
    }
}).then((data) => {
    console.log(data);
});
