/* Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’ */
// Write your function here:
const finalGrade = (num1, num2, num3) => {
  // build a function that can check if any grade is valid
  const checkAnyGradeValidity = grade => {
    return (grade >= 0 && grade <= 100) ? true : false;
  }
  // check num1 - num3 for validity
	const checkGradeValidity = () => {
    const totalValidity = checkAnyGradeValidity(num1) + checkAnyGradeValidity(num2) + checkAnyGradeValidity(num3);
    return (totalValidity === 3) ? true : false;
  };
  const gradeValid = checkGradeValidity();
  // get the average
  const averageGrade = (num1 + num2 + num3) / 3;
  // assign the averageGrade a letter
  const assignLetterGrade = () => {
    switch (true) {
      case (averageGrade >= 0 && averageGrade <= 59): return 'F';
      break;
      case (averageGrade >= 60 && averageGrade <= 69): return 'D';
      break;
      case (averageGrade >= 70 && averageGrade <= 79): return 'C';
      break;
      case (averageGrade >= 80 && averageGrade <= 89): return 'B';
      break;
      case (averageGrade >= 90 && averageGrade <= 100): return 'A';
      break;
      default: `Error: Invalid grade ${averageGrade} should've been caught.`;
      break;
    }
  };
  const letterGrade = assignLetterGrade();
  // output results, put all together
  return gradeValid ? letterGrade : 'You have entered an invalid grade.';
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 79)) // Should print 'A'
console.log(finalGrade(99, 92, -22)) // Should print the error message
console.log(finalGrade(99, 50, 70)) // Should print 'C'
console.log(finalGrade(99, 299, 70)) // Should print the error message
// We encourage you to add more function calls of your own to test your code!
