// 7. Write a program using a while loop to count the number of digits in a given number.

let number = parseInt(prompt("Enter a number:"));
let count = 0;

let n = Math.abs(number);

while (n > 0) {
    n = Math.floor(n / 10); 
    count++;
}

if (number === 0) {
    count = 1;
}

console.log(`The number of digits in ${number} is ${count}.`);
