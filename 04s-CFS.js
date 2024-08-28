function getGrade(score) {
    let grade;

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

    return grade;
}

// Prompt the user to enter a score
const score = parseInt(prompt("Enter your score:"), 10);

// Get the grade based on the score
const grade = getGrade(score);

// Show the grade in an alert box
alert("Grade: " + grade);
