let bet = 10;

//alert(typeof(bet));

let bet1 = 'String';

//alert(bet1);

//alert(typeof(bet1));


// console.log("You","suck!")

// Used 'let' because of changing the variable
let admin
let name = 'John';
admin = name;

 //alert(admin);

// Could also be done this way

// let admin, name;
name = "John";
admin + name;
//alert(admin);

//alert(10 / 2);

// getting rid of decimals

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
//console.log(twoDecimalPlaces);

//— passing the string value into the Number() constructor to return a number version of the same value.

let myNumber = "74";
myNumber = Number(myNumber) + 3;
//console.log(myNumber);


const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener("click", updateBtn); // this is redunant?

function updateBtn() {
//  btn.addEventListener("click", updateBtn); // this is redunant?
    if (btn.textContent === "Start machine") {
      btn.textContent = "Stop machine";
      txt.textContent = "The machine has started!";
    } else {
      btn.textContent = "Start machine";
      txt.textContent = "The machine is stopped.";
    }
  } 

  // back ticks ` are for template literals
name = "Chris";
const greeting = `Hello, ${name}`;
//console.log(greeting); // "Hello, Chris" 

// This is known as concantenation?
// Adding strings together

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
//console.log(joined); // "Hello, how are you?"

//Concatenation in context 

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

//button.addEventListener("click", greet);

// Creating a line break in the return string
// us \n for example:

let linebreak = "What the fuck\nare you doing?";

//console.log(linebreak);
//What the fuck
//are you doing?

//Quotes or ticks getting in the way of strings?
// this \ right before makes sure the script is ignored.

let quote = 'It\'s okay, I said, "This is okay!"';
// console.log(quote);

// console.log(Number(quote));


// alert("Helloworld");

/* let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b) */


/* let  a = 2;
++a;
console.log(a);
a++;
console.log(a + 'a'); */

/*
const b = 2;
b++;
console.log(b);
b++;
console.log(b);  */

/* let counter = 1;
let f = ++counter; // (*)

console.log(f); // 2

let counters = 1;
let g = counters++; // (*) changed ++counter to counter++

console.log(g); // 1 */

/* 
console.log(0 === false); // false
console.log(0 !== false); // true 
console.log(0 != false); // false
console.log(0 == false); // true
*/

//console.log(null == undefined);
//console.log(null === undefined);

/*
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true


console.log( undefined > 0 );  // false
console.log( undefined == 0 ); // false
console.log( undefined >= 0 ); // false

console.log(typeof(undefined));
console.log(typeof(NaN));
*/

// checking values separately is good idea in JS when writing code

/*if (new Date().getHours() < 20) {
  document.getElementById("demo").innerHTML = "Good day!";
}
*/

/*if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}*/

//console.log('string');

/*
let firstName = "Timy";
let lastName = "Change";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || 'Anonymous');
*/
/*
let balls=1
let talls=0
function tanky() {
  if (balls == 1)
  alert(talls || balls);
  else (balls > 1)
  alert('Im wrong');
}

tanky();


let hour = 2
let minute = 2

if (hour === 1 && minute === 2) {
  tanky();
}
else {
  alert('no good');
}
*/

//alert(1 && 2 && 0);

// && 'and' returns the first false value
// || 'or' returns the first true value