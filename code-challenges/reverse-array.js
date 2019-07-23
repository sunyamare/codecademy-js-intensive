// Write your code here:
const reverseArray = array => {
    let newArray=[];
    for (i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
    };
    return newArray
}

// Test with a bunch of words:
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 
// ['This', 'will', 'all', 'make', 'sense.'];

// Test on numbers:
const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 121];
console.log(reverseArray(sequence))
// [ 121, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/* (turns out there's also a method for that: .reverse) */ 
