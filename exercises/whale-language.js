const input = "WTF with u";
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
