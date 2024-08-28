// Prompt the user to enter the starting number
const start = parseInt(prompt("Enter the starting number:"), 10);

// Prompt the user to enter the ending number
const end = parseInt(prompt("Enter the ending number:"), 10);

// Check if the start is less than or equal to the end
if (start <= end) {
    // Loop through the range and print each number
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
} else {
    console.log("The starting number should be less than or equal to the ending number.");
}
