function printNumbersInRange() {
    // Prompt the user to enter the starting and ending numbers
    const start = parseInt(prompt("Enter the starting number:"));
    const end = parseInt(prompt("Enter the ending number:"));
  
    // Validate inputs
    if (isNaN(start) || isNaN(end)) {
      console.log("Invalid input. Please enter numeric values.");
      return;
    }
  
    if (start > end) {
      console.log("The starting number must be less than or equal to the ending number.");
      return;
    }
  
    // Print each number in the range
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }
  
  // Call the function to execute
  printNumbersInRange();
  