// 1. Variable using var
var myName = "Zara Baker";

// 2. Variable using let (age as a string)
let age = "24";

// 3. Constant PI
const PI = 3.1416;
// PI = 3.14; // Uncommenting this will cause an error because PI is a constant

// 4. Boolean isStudent (dynamic based on age)
let isStudent = parseInt(age) < 25 ? true : false;

// 5. Object with nested properties
let person = {
    name: myName,
    age: age,
    details: {
        nationality: "Filipino",
        hobbies: ["coding", "reading", "traveling"]
    }
};

// 6. Array with repeated values
let colors = ["red", "blue", "green", "blue", "yellow"];

// ---- Reverse and Transform ----
let fruits = ["apple", "banana", "mango", "orange"];
let transformed = [];

for (let i = 0; i < fruits.length; i++) {
    let reversedWord = "";
    for (let j = fruits[i].length - 1; j >= 0; j--) {
        reversedWord += fruits[i][j];
    }
    transformed.push(reversedWord.toUpperCase());
}

console.log("Transformed fruits:", transformed);

// ---- Filtering and Counting ----
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filtered.push(num);
        count++;
    }
}

// Corrected template literal syntax
console.log(`Found ${count} numbers: [${filtered.join(", ")}]`);
