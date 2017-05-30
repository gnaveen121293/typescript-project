var superHeros = [];
superHeros = [1, 2, 3];
superHeros.unshift(0);
superHeros.push(4);
superHeros.shift();
superHeros.pop();
console.log(superHeros);
var superWomen = ["mummy", "mother", "girija"];
for (var index in superWomen) {
    console.log(index);
}
for (var _i = 0, superWomen_1 = superWomen; _i < superWomen_1.length; _i++) {
    var value = superWomen_1[_i];
    console.log(value);
}
var people = [];
people.push({ name: "naveen", city: "bengaluru" });
people.push({ name: "siva", city: "hyderabad" });
people.push({ name: "vikram", city: "chennai" });
people.push({ name: "tulasi", city: "mysore" });
console.log(people);
for (var i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}
var sum = 123;
if (true) {
    var sum = 456;
}
// function sample(){
// 	var sum=345;
// }
// sample()
var newsum = 471;
if (true) {
    var newsum_1 = 900;
}
var PI = 3.14;
if (true) {
    var PI_1 = 900;
}
var num = 5;
num = 6;
console.log("num:", num);
console.log(sum);
console.log(newsum);
console.log(PI);
