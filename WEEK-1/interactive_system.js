// Request user's name
const userName = prompt("Enter your name: ");
// Request user's age
const userAge = prompt("Enter your age: ");
// Convert age to number
const ageNumber = Number(userAge);
// Validate if age is a valid number
if (isNaN(ageNumber)) {
// Show error message
console.error("Error: Please enter a valid age in numbers");
} else {
// Check if user is under 18
if (ageNumber < 18) {
    alert(`Hello ${userName}, you are underage. Keep learning and enjoying coding!`);
} else {
 // Message for adults
alert(`Hello ${userName}, you are an adult. Get ready for great opportunities in the world of programming!`);
}}