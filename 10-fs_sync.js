const {readFileSync,writeFileSync} = require('fs');

console.log('start');

//reading the files
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
// console.log(first,second)

//writing into the files
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag:'a'})
console.log('done with task');
console.log('starting new one');


