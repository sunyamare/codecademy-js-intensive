let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
// console.log(secretMessage);
secretMessage.push('to', 'Program')
// console.log(secretMessage);
const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';
// console.log(secretMessage);
secretMessage.shift();
secretMessage.unshift('Programming');
// console.log(secretMessage);
secretMessage.splice(6, 5, 'know,');
// console.log(secretMessage);
console.log(secretMessage.join(' '));
