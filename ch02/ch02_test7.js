var calc2 = require('./calc2');

console.log(calc2.add(20, 40));

var nconf = require('nconf');
nconf.env();

var value = nconf.get('OS');
console.log(value);

var os = require('os');

console.log(os.hostname());
console.log(os.freemem());


