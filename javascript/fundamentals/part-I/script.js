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

//  # Assigment: Values and Variables
let country = 'Türkiye';
let continent = 'Europe, Asia';
let population = 81000000;

console.log(country);
console.log(continent);
console.log(population);



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

//  # Assigment: Data Types
let country = 'Türkiye';
let continent = 'Europe, Asia';
let population = 81000000;
let isIsland = false;
let language;

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


//  # Assigment: let, const and var
const country = 'Türkiye';
const continent = 'Europe, Asia';
let population = 81000000;
const isIsland = false;
const language = 'Türkçe';



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

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x -1
console.log(x);

// Comparison operators
console.log(ageSelman > ageJonas); // <, >, <=, >=

const isFullAge = ageJonas >= 18;

console.log(now - 1996 > now - 1991);



//  # Assigment: basic operators
let population = 80000000;
console.log(population / 2);
population++;
console.log(population);
let populationTurkey = 80000000;
let populationFinland = 6000000;
console.log(populationTurkey > populationFinland);
console.log(populationTurkey > 33000000);
let country = 'Turkey';
let language = 'Turkish';
let continent = 'Europa';
console.log(
  country +
    ' ' +
    'is in' +
    ' ' +
    continent +
    ', ' +
    'and its ' +
    population +
    ' people speak ' +
    language
);



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

//  # Assigment: taking decisions
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}

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
*/
