var fs = require('fs');

/* Asynchronous */

fs.readFile('./data.txt', function(err, data) {
    console.log('01 - Asynchronous: ', data);
})

fs.readFile('./data.txt', {encoding: 'utf8'}, function(err, data) {
    console.log('02 - Asynchronous with encoding: ', data);
})


/* Synchronous */

var data = fs.readFileSync('./data.txt', {encoding: 'utf8'});
console.log('03 - Synchronous: %s', data);