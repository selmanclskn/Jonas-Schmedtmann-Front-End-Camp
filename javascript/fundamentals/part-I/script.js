/** 

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Selman');
console.log(29);

let firstName = 'Selman';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let selman_dev = 'SÇ';
let $function = 29;

let person = 'Selman';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Freelancer';

let job1 = 'Programmer';
let job2 = 'Freelancer';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Selman');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);
console.log(typeof year);

console.log(typeof null);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);


let age = 29;
age = 31;

const birthYear = 1996;
// birthYear = 1999; const ile tanımlanan değerler değiştirilemez !!

var job = 'designer';
job = 'programmer';

lastName = 'Çalışkan';
console.log(lastName);

const now = 2025;
const ageSelman = now - 1996;
const ageJonas = now - 1991;
console.log(ageSelman, ageJonas);

console.log(
  ageJonas * 2,
  ageJonas / 2,
  ageJonas + 2,
  ageJonas - 2,
  ageJonas ** 3 // ageJonas * ageJonas * ageJonas
);

const firstName = 'Selman';
const lastName = 'Çalışkan';
console.log(firstName + ' ' + lastName);


// Comparison operators
console.log(ageSelman > ageJonas); // <, >, <=, >=

const isFullAge = ageJonas >= 18;

console.log(now - 1996 > now - 1991);


const now = 2025;
const ageSelman = now - 1996;
const ageJonas = now - 1991;

console.log(now - 1996 > now - 1991);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSelman) / 2;
console.log(ageJonas, ageSelman, averageAge);



// CHALLENGE #1
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark;
let BMIJohn = massJohn / heightJohn;

console.log(BMIMark, BMIJohn);
console.log(BMIMark < BMIJohn);


const firstName = 'Selman';
const job = 'Freelance';
const birthYear = 1996;
const year = 2025;

const itsme =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(itsme);

const itsmeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(itsmeNew);

console.log(`Just a regular string...`);
console.log(
  'String \n\
multiple \n\
lines'
);

console.log(`String
multiple,
lines`);

let country = 'Türkiye';
let language = 'Türkçe';
let continent = 'Avrupa';

const turkey = `${country}, ${continent}'da bulunan ve ${language} dilini kullanan bir ülkedir.`;
console.log(turkey);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Can drive a car!');
} else {
  const yersLeft = 18 - age;
  console.log(`Can't drive a car yet! Wait for ${yersLeft} years more`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// CHALLENGE #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

console.log(`Mark's BMI (${BMIMark}) heigher than John's (${BMIJohn})!`);


const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Selman'));
console.log(typeof NaN);

console.log(String(29), 29);

// type coercion
console.log('I am ' + 29 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '3');

let n = '1' + 1; // "11"
n = n - 1;
console.log(n);


// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Selman'));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all :D");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/
