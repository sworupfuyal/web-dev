// 4. Write a program using while loop to reverse the string (Softwarica)

let str = "Softwarica";
let reversedStr = "";

let index = str.length - 1;

while (index >= 0) {
    reversedStr += str[index];
    index--;
}

console.log("Reversed string:", reversedStr);
