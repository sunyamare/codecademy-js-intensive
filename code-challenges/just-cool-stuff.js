/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays. */
// Write your code here: 
const justCoolStuff = (array1, array2) => {
    return array1.filter(value => array2.includes(value));
}
// first solution which explains the above:
/* const justCoolStuff = (array1, array2) => {
    const isInArray2 = (value) => {
        return array2.includes(value);
    }
    return array1.filter(isInArray2);
} */

// Feel free to uncomment the code below to test your function
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
