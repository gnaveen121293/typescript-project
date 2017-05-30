var Animal = (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.food = function (message) {
        return message;
    };
    return Animal;
}());
var cow = new Animal("cow", "domastic");
console.log(cow);
console.log(cow.food(1));
