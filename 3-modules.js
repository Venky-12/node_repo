// Modules

//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)


const Hi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative_flavour')

console.log(names);


Hi("susan");
Hi(names.john);
Hi(names.peter);

console.log(data);

require('./7-mind_grenade')
