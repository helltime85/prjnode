function add(a, b) {
    return a+b;
}

var add1 = function(a, b) {
    return a+b;
}

console.log(add(1, 10));
console.log(add1(2, 10));

var users = [{name:'test1', age:20}, {name:'test2', age:30}, {name:'test3', age:12}];

for(var i=0;i<users.length;i++) {
    console.log(users[i].name);
}

users.forEach(function(user, index) {
    console.log(user.name + ',' + index);
});

