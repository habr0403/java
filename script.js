function printOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += message + "<br>"; 
}

let firstName = "Brandon";
printOutput("My first name is: " + firstName);

let age = 38; 
printOutput("My age is: " + age);

let isStudent = true; 
printOutput("Am I a student? " + isStudent);

const PI = 3.14159;
printOutput("The value of Pi is: " + PI);

let favoriteColors = ["Blue", "Green", "Red"];
printOutput("My favorite colors are: " + favoriteColors);

let person = {
    name: "Brandon",
    age: "age",
    city: "Crystal"
};
printOutput("Person object: " + JSON.stringify(person));


if (age >= 18) {
    printOutput("You are an adult");
} else {
    printOutput("You are a minor");
}

function greet(name) {
    printOutput("Hello, " + name + "!");
}
greet(firstName);

function calculateArea(length, width) {
    return length * width;
}
let area = calculateArea(5, 10);
printOutput("The area of the rectangle is: " + area);

let globalVar = "I am a global variable";
printOutput(globalVar);

function scopeTest() {
    let globalVar = "I am a local variable";
    printOutput("Inside scopeTest - Local globalVar: " + globalVar);
    printOutput("Inside scopeTest - Global globalVar: " + window.globalVar);
}
scopeTest();
printOutput("Outside scopeTest - Global globalVar: " + globalVar);

for (let i = 0; i < favoriteColors.length; i++) {
    printOutput("Favorite color: " + favoriteColors[i]);
}

let counter = 1;
while (counter <= 10) {
    printOutput("Counter: " + counter);
    counter++;
}

let randomNumber = Math.floor(Math.random() * 10) + 1;
printOutput("Random number between 1 and 10: " + randomNumber);

let currentDate = new Date();
printOutput("Current date and time: " + currentDate);

let upperCaseName = firstName.toUpperCase();
printOutput("My name in uppercase: " + upperCaseName);
