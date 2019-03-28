var path = require('path');

var directors = ['users', 'Mars', 'docs'];

var dirstr = directors.join();

var dirstr2 = directors.join(path.sep);

console.log(dirstr2);

var filepath  = path.join('/Users/Mars', 'notepad.exe');

console.log(filepath);

var dirname = path.dirname(filepath);

console.log(dirname);

var basename = path.basename(filepath);
console.log(basename);

var extname = path.extname(filepath);
console.log(extname);
