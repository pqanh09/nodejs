var fs = require('fs');
var result = fs.readFileSync('a.txt');
console.log(result.toString());
console.log('Done');
