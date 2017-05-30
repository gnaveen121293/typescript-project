var addNumbers= function(num1 : number,num2 : number){
	return num1 + num2;
}
var total = addNumbers(4,5)
console.log(total)
var addMoreNumbers= function(num1 : number,num2 : number=2){
	return num1 + num2;
}
var sum= addMoreNumbers(1,4)
console.log(sum)


var addManyMoreNumbers= function(num1 : number,num2 : number=2,num3? : number){
	console.log("num1:",num1);
	console.log("num2:",num2);
	console.log("num3:",num3);
if(num3 !==null){
return num1 + num2 +num3
}
	return num1 + num2;

}
var manysum= addManyMoreNumbers(1,5,6)
console.log(manysum);




			function myRestParams(first,second, ...allother){
			console.log("first:",first)
			console.log("second:",second)
			console.log("allother:",allother)


			return allother;

			}
			console.log("myRestParams:" , myRestParams("uma","makesh","vikram","raman","somu"))



function sumNumber(...nums :number[]){
	for (var value of nums){
		console.log(value)
	}
}
sumNumber(1,2,3)
