// Write your function here:
function tipCalculator(quality, totalCost) {
  if (quality === 'bad') {
    totalCost *= 0.05;
  } else if (quality === 'ok') {
    totalCost *= 0.15;
  } else if (quality === 'good') {
    totalCost *= 0.2;
  } else if (quality === 'excellent') {
    totalCost *= 0.3;
  } else {
    totalCost *= 0.18;
  }
  return totalCost;
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
