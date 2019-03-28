console.log('test');

var person = {
    name: 'test',
    age:20    
}

console.log('자바객체 입니다.%j', person);
console.dir(person);

console.time('duration_time');

var result = 0;
for(var i=0;i<10000;i++) {
    result+=i;
}
console.timeEnd('duration_time');


