// 8. Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.

let n1 = 0, n2 = 1;

const count = 10;

console.log("First 10 numbers of the Fibonacci sequence:");

for (let i = 1; i <= count; i++) {
    console.log(n1); 
    const next = n1 + n2; 
    n1 = n2; 
    n2 = next;
}
