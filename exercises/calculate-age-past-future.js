function howOld(age, year) {
  // get current year
  const currentYear = new Date().getFullYear();
  // calculate age if year in the future
  const calculatedAge = year - currentYear + age;
  // calculate if before birth
  const beforeBirth = (currentYear - age) - year;
  // calculate age back in time
  const agePast = age - currentYear + year;
  // print stuff
  if (year > currentYear) {
    return `You will be ${calculatedAge} in the year ${year}`;
  } else if (year < currentYear - age) {
    return `The year ${year} was ${beforeBirth} years before you were born`
  } else if (year < currentYear) {
    return `You were ${agePast} in the year ${year}`
  } else {
    return 'Something is odd here, could be your age, the year you entered, or it could be the matrix curmbling, who knows...';
  }
};
console.log(howOld(28, 2020))
console.log(howOld(28, 1900))
console.log(howOld(28, 2000))
console.log(howOld(28, 'what'))
console.log(howOld('', 23))
// we can see that not all cases are caught ...
