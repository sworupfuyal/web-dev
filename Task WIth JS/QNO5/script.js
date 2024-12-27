// 5. Write a program to find the largest number of Array [5, 8, 12, 3, 7]

const numbers = [5, 8, 12, 3, 7];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);
