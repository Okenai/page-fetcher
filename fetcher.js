const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1]

const fetcher = (url, path) => {
request((url), (error, response, body) => {
  fs.writeFile(path, body, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
    
   })
  
})
}

fetcher(url, path);
