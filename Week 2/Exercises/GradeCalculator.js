function determineGrade() {
    // Prompt the user to enter a score
    const score = parseFloat(prompt("Enter the score:"));
  
    // Validate input
    if (isNaN(score) || score < 0) {
      console.log("Invalid input. Please enter a non-negative number.");
      return;
    }
  
    let grade;
  
    // Determine the grade based on the score
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Print the grade to the console
    console.log(`The grade for a score of ${score} is ${grade}.`);
  }
  
  // Call the function to execute
  determineGrade();
  