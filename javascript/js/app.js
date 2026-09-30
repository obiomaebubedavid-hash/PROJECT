// printing out to the console
// console.log("Hello World");
// console.log("12345");

// variables
// let
// variable declaration
// let names;
// variable initialization
// names = "Clinton"
// console.log(names);
// variable declaration and initialization
// let age = 20; 
// console.log(age);
// variable reinitialization
// names = "nancy";
// console.log(names);

// var
// var x = 10;
// console.log(x);
// x = 
































// Operators
// Arithmetic Operators
// +, -, /, *, %
// Let num1, num2;
// num1 = 10;
// num2 = 5;
// Console.log(num1 + num2);
// let number;
// Number = 10 + 5;
// console.log(number);
// number = 10 - 5;
// console.log(number);
// number = 10 / 2;
// console.log(number);
// number = 100 * 2;
// console.log(number);
// number = 10 % 3;
// console.log(number);

// Assignment Operators
// =, +=, -=, /=, *=, %=
// let x = 5;
// let y = 20;
// x %= y ;
// console.log(x);

// Comparison Operators
// ==, ===, !==, !==, >, <, <==, >==

// Logical Operators
// &&, ||, !

// String Operators
// const firstName = "John  ";
// const lastName = "Doe";
// const age = 55;

// Concatenation
// value = "My name is " + firstName + " " + lastName + " and i am " + age + " years old";
// Console.Log(value);

// Append 
// Value = "Femi";
// Value += " Ben";
// Console.Log(value);

// Template String 
// value = `My name is $(firstName) $(lastName) and i am $(age) years old`;
// console.log(value);

// Length
// console.log(firstName.length);

// Changing cases
// value = firstName.toUpperCase();
// console.log(value);
// value = lastName.toLowerCase();
// console.log(value);

// Index
// value = firstName[0];
// value = firstName[5];
// console.log(value);

// IndexOF
// let email = "test@gmail.com";
// value = email.indexOf("0");
// console.log(value);

// Substring
// value = firstName.substring(1, 3);
// console.log(value);

// Replace 
// value = email.replace("gmail", "outlook");
// console.log(value);




// Comparison Operators
// const id = 100;

// Equal to 
// if (id == 100) {
//     console.log("Correct");
// } else {
//    console.log("Incorrect");
// }

// Not equal to
// if (id != 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Equal to value and type
// if (id === 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Not equal to value and type
// if (id !== 100) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// let num1 = 40;
// let num2 = 20;

// if (num1 >= num2) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// if (num1 <= num2) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Logical Operator
// Logical (&&) AND Operator
// if (20 > 10 && 10 < 11) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Logical (||) OR Operator
// if (200 != 150 || num2 > num1) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// Logical (!) NOT Operator
// if (!(200 != 150 && num2 > num1)) {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// If-Else if-else
// let num1 = 4;
// let num2 = 20;
// if (num1 > num2) {
//     console.log("num1 is greater than num2");
// } else {
//    console.log("Incorrect");
// } else {
//     console.log("Incorrect");
// } else {
//     console.log("Incorrect");
// }






















// Arrays
// let students = ["Mimi", "Noble", "Ifeanyi", "Elvis", "Chibueze", "Emma", "Emeka"]

// Operations on an Array

// Get elements of an Array
// console.log(students[0]);
// console.log(students[2]);
// console.log(students[6]);

// Changing the elements of an array
// students[3] = "paschal";
// console.log(students[3]);

// Length of an array
// console.log(students.length);

// Adding elements to an array
// students.push("Victor");
// students.push("Elvis");

// Removing elements from an array
// students.pop();
// students.shift();
// console.log(students);

// Removing elements from a specified index in an Array
// students.splice(1, 3);
// console.log(students);

// looping through an Array
// for (let i = 0; < students.length; i++) {
//     console.log(students[i]);
// }

// for each loop
// students.forEach(function (a) {
//     console.log(a);  
// })


// Funtions
// function greeting() {
//    console.log("Good afternoon");
// }
// greeting();
// greeting();

// function addium() {
//     let num1 = 5;
//     let num2 = 10;
//     const result = num1 + num2;
//     console.log(result);
// }
// addium();

// function addium2(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
// }
// const numbers = addium2(20, 30);
// console.log(numbers);
// addium2(40, 15);

// function addium3(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
//     return sum;
// }
// const numbers2 = addium3(40, 30);
// console.log(numbers2);
// console.log(addium3(40, 35));

// const num = numbers2 + 50;
// console.log(num);

// Alert
// alert("Welcome to Javascript alerts")
// alert(12345)

// Prompt
// const input = prompt("Enter your name");
// console.log(input);
// alert(input);

// const age = prompt("Enter your Age");
// if (age >= 18) {
//     alert("user is eligible eligible to vote")
// } else {
//     alert(`User isn't eligible to vote ${18 - age} years old`);
// }

// DOM - Document Object Model

// Selectors

// getElementById
// let check = document.getElementById("demo");
// check.style.color = "red";
// check.style.backgroundColor = "yellow";
// check.style.fontSize = "50px";
// check.style.textAlign = "right";

// querySelector
// let checkQuery = document.querySelector("h2");
// checkQuery.style.color = "red";
// checkQuery.style.backgroundColor = "yellow";
// checkQuery.style.fontSize = "50px";
// checkQuery.style.textAlign = "right";
































const el = document.getElementById("demo");
el.textContent = "Using Javascript wisely";

const elm = document









