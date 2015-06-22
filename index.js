var fs = require('fs');

function readFile() {
  fs.readFile('test.txt', function(e, data) {
    console.log(data.toString()); 
  });
}

fs.exists('test.txt', function(exists) {
   if (!exists) {
     fs.writeFile('test.txt', new Buffer("Test Text!"), readFile);    
   } else {
     readFile();
   }
});
