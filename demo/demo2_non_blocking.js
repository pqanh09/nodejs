var fs = require('fs');
fs.readFile('a.txt', function(error, data){
  console.log(data.toString());
});
console.log('Done ');
