var fs = require("fs");
 
fs.readFile("jour07.txt",function(err,data) {
 if(err) {
     console.error(err);
     return;
 }
 console.log("jour07 texte :"+ data.toString());
})


// ex-02
var numbers = [1, 2, 3, 4, 5];
var secondNumbers=numbers.map(function(num) {
    return num*2;
    
})
console.log(secondNumbers)

var longName=
[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
// ex-03
var sortName=longName.map(mun=> {
    var object=mun.firstName+mun.lastName;
    return object
    
})
console.log(sortName)

//  ex-04

var filterNumber=[1, "toto", 34, "javascript",8]
var number=filterNumber.filter(num=>{
    return typeof num==="number"
})
console.log(number);

// ex-05

 var filterEven=[ 1, 2, 3, 4, 5, 6, 7 ,8]
 var evenNumber=filterEven.filter(num=>{
     return num%2===0
 })
 console.log(evenNumber);

 //ex-06

 var cake=[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolatCake=cake.filter(str=>{
        return str.flavor==="chocolate"
        
})

var chocolatCakeSold=chocolatCake.map(str=>{
            str.status="sold out"
          return str
     
})

console.log(chocolatCakeSold)