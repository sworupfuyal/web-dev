// 9. Write a program using a while loop to calculate the sum of digits of a given number.

let number = parseInt(prompt("Enter a number:"));

let n = Math.abs(number);

let sum = 0;

while (n > 0) {
    sum += n % 10; 
    n = Math.floor(n / 10); 
}

console.log(`The sum of the digits of ${number} is ${sum}.`);
