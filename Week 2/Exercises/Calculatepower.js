function calculatePower() {
  
    const base = parseFloat(prompt("Enter the base:"));
    const exponent = parseFloat(prompt("Enter the exponent:"));
  
    // Validate inputs
    if (isNaN(base) || isNaN(exponent)) {
      console.error("Invalid input. Please enter numeric values.");
      return;
    }
  
  
    const result = base ** exponent;
  
    
    console.log(`${base} raised to the power of ${exponent} is ${result}`);
  }
  
 

   

  
   
    //if we want to pop-up the out put
    //  alert(`${base} raised to the power of ${exponent} is ${result}`);

  