//6.  Write a program using a for loop to print the multiplication table of a given number (e.g., 5).

const number = parseInt(prompt("Enter the number for the multiplication table:"));

console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
