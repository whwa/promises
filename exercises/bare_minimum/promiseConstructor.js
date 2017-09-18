/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

//then === resolve
//catch === reject
//pluckLIne(filepath).then((firstline)=> {}).catch((err) => {})

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var prom = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        var firstLine = data.slice(0, data.indexOf('\n'));
        resolve(firstLine)
      }
    })
  });

  return prom;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var prom = new Promise((resolve, reject) => {
    request(url, (err, response) => {
      if(err){
        reject(err)
      } else {
        resolve(response.statusCode)
      }
    });
  });
  
  return prom;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
