const input = "Easy, a pirate's life for me!";
const vowels = [];
// function to check if something is a vowel
function isVowel(x) {
        return ('aeiouyAEIOUY'.indexOf(x) != -1);
    }
// loop to assign letters from input that are vowels to vowels in uppercase
for (i = 0; i < input.length; i++) {
  isVowel(input[i]) ? vowels.push(input[i].toUpperCase()) : false;
}
// function to check if something is e or u
function isEorU(x) {
        return ('EU'.indexOf(x) != -1);
    }
// dubplicate E and U
for (i = 0; i < vowels.length; i++) {
  isEorU(vowels[i]) ? vowels[i] += vowels[i] : false;
}
// fill vowels into resultArray without commas
const resultArray = vowels.join("");
console.log(resultArray);

// alternative solution:
/*
const input = "Easy, a pirate's life for me!";
const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
  for (let v = 0; v < vowels.length; v++){
  if (input[i] === vowels[v]){
     if (input[i] === 'e' || input[i] === 'E'){
       resultArray.push('ee');
     } else if (input[i] === 'u' || input[i] === 'U'){
       resultArray.push('uu');
   } else {
     resultArray.push(input[i]);
   }
  }
 }
};
console.log(resultArray.join('').toUpperCase());
*/
