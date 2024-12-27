// 11. Write a program using a while loop to check if a given string is a palindrome (reads the same backward as forward).

const inputString = prompt("Enter a string:").toLowerCase(); 

let start = 0;
let end = inputString.length - 1;

let isPalindrome = true;

while (start < end) {
    if (inputString[start] !== inputString[end]) {
        isPalindrome = false; 
        break;
    }
    start++;
    end--;
}

if (isPalindrome) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}
