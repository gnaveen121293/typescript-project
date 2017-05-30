class Animal {
	name : string;
	type : string;
	constructor(name: string,type: string){
		this.name=name;
		this.type=type;


	}
	food(message){
		return message;
	}
}

var cow = new Animal("cow","domastic");
console.log(cow)
console.log(cow.food(1));
