console.log('argv 속성의 파라미터 수 : ', process.argv.length);
console.log(process.argv);
console.dir(process.argv[1]);

process.argv.forEach(function(item, index) {
    console.log(index + ':' + item);
});
