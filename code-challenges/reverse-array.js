// Write your code here:
const reverseArray = array => {
    let newArray=[];
    for (i = 0; i < 5; i++) {
    newArray.unshift(array[i]);
    };
    return newArray
}


// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/* (turns out there's a method for that: .reverse) */ 


