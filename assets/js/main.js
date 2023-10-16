
//===============================================================
console.log("%c intro-level-1-3", "color:yellow; font-size:20px")
//===============================================================

// let i = 1;
// console.log(typeof i)
// let lastName = "Johnson";
// console.log(typeof lastName)
// let j = "2";
// console.log(typeof j)
// let status = true;
// console.log(typeof status)
// let hello = "hello";
// console.log(typeof hello)
// let helloWorld1 = "hello";
// console.log(typeof helloWorld1)


//===============================================================
console.log("%c intro-level-1-4", "color:yellow; font-size:20px")
//===============================================================


// console.log(typeof "John");
// console.log(typeof 3.14); 
// console.log(typeof NaN); 
// console.log(typeof false); 
// console.log(typeof [1,2,3,4]); 
// console.log(typeof {name:'John', age:34}); 
// console.log(typeof new Date()); 
// console.log(typeof function () {}); 
// console.log(typeof null);
// let x = 3+2==5;
// console.log(typeof x); 
// let y = 3 + "3";
// console.log(typeof y); 

//===============================================================
console.log("%c intro-level-1-7", "color:yellow; font-size:20px")
//===============================================================


// const helloWorld = "Hello World";
// const pi = 3.14;
// const burjDubai = "828m";
// const fullName = "Jan Schmidt";
// const eifelTower = "324m";
// const camelCase = "camelCase";
// const kursStatus = true;


//===============================================================
console.log("%c Variablen-Level-1_5", "color:yellow; font-size:20px")
//===============================================================

// const carName = "BMW";
// console.log(carName);

// let x = 150;
// console.log(x);
// let y = 50;
// console.log(y);
// let z = x + y;
// console.log(z);

// let firstName;
// let lastName;
// let age;

// firstName = "John";
// lastName = "Doe";
// age = 35;
// console.log(firstName + " " + lastName + " " +age)


//===============================================================
console.log("%c Variablen-Level-1_6", "color:yellow; font-size:20px")
//===============================================================



// let x = 34;
// x = 67;
// console.log(x);

// const y = 34;
// y = 67;

//Error: weil man die Variablen, die mit const deklariert sind nicht neu deklarieren kann und die behalte ihre feste Werte.
// main.js:88 Uncaught TypeError: Assignment to constant variable.
//     at main.js:88:3


//===============================================================
console.log("%c Intro-Level-1_8", "color:yellow; font-size:20px")
//===============================================================

// let a = 15;
// let b = 9;
// let c = 20;
// let x = 20;
// let y = 30;
// let z = 10;
// let resultOne = (x * y) / z;
// let resultTwo = (a + b) * c;


// console.log(x + y);

// console.log(x - y);

// console.log(y - x);

// console.log(x * y);

// console.log(x / y);

// console.log(resultOne);

// console.log( a % b);

// console.log(resultTwo);
// a++;
// console.log(a);
// b--;
// console.log(b);

// let resultThree = a - b;

// console.log(resultThree);

// console.log(resultOne % resultTwo);


//===============================================================
console.log("%c Intro-Level-1_12", "color:yellow; font-size:20px")
//===============================================================

// let score = 5 + 5 * 10;
// console.log("Ergebnis: " + score);

// score = (5 + 5) * 10;
// console.log("Ergebnis: " + score);

// score = 0;
// score += 10;
// console.log("Ergebnis: " + score);

// score += 10;
// console.log("Ergebnis: " + score)

// score = 2;
// score++;
// console.log("Increment: " + score) 





//===============================================================
console.log("%c Intro-Level-1_13", "color:yellow; font-size:20px")
//===============================================================


// // Addition
// let addition_operator = 1 + 1;
// console.log("addition: " + addition_operator);
// // Subtraktion
// let subtraktion_operator = 2 - 1;
// console.log("subtraktion: " + subtraktion_operator);
// // Multiplikation
// let multiplication_operator = 2 * 2;
// console.log("multiplication: " + multiplication_operator);
// // Division
// let division_operator = 4 / 2;
// console.log("division: " + division_operator);
// // Modul: zeigt an, was der Rest sein würde.
// let modulus_operator = 14 % 5;
// console.log("modulus: " + modulus_operator);


//===============================================================
console.log("%c Intro-Level-1_13", "color:yellow; font-size:20px")
//===============================================================


let x = " Hello";
let y = "World";
let z = x + " " + y;
let meinString = "Ich bin Este:r"

document.write(z);
console.log(z);

x += " World";

document.write(x);
console.log(x);

console.log(meinString + " Ich komme auf Platz zwei")

//===============================================================
console.log("%c Output-Level-1_4", "color:yellow; font-size:20px")
//===============================================================


window.alert("Hallo Welt");
let name = window.prompt("Bitte geben Sie Ihren Namen ein.");
alert("Hallo " + name);
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");
let alter = window.prompt( "Gib mir bitte dein Alter:" );
console.log(alter);

window.alert(alter);
let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);