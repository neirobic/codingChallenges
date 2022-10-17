function bmi(weight, height) {
    //fun fact: bmi is widely considerate innacurate and misleading categorization method
    let bmi = weight/height**2;
    
    if (bmi <= 18.5) return "Underweight";
  
    if (bmi <= 25.0) return "Normal";
  
    if (bmi <= 30.0) return "Overweight";
  
    if (bmi > 30) return "Obese";
  }