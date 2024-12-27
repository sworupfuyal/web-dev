// 10. Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").

const inputString = prompt("Enter a string:");

let vowelCount = 0;

const vowels = "aeiouAEIOU";

for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        vowelCount++;
    }
}

console.log(`The number of vowels in "${inputString}" is ${vowelCount}.`);
