//EX 1
var fruits=["mango","lemon","blueberry"];
console.log(fruits);
//EX 2
var ingredients=["eggs", "milk", "butter"];
console.log(ingredients[2]);
console.log(ingredients.indexOf("milk"));
 
// EX 3
var object=["pen", "book",  "lamp"]
object.unshift("chair");
console.log(object);
object.pop();
console.log(object);
object.push("laptop");
console.log(object);
object.shift()
console.log(object);

//EX 4
var numbers = [4, 10, 8, 12,6]
numbers.sort((a, b) => b - a);
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
//EX 5


var limit=10;
for(var total=0; total<10;total++){
    limit=limit+total;
    
}
console.log(limit);

// EX 6
var sentence= "Hello Konexio !";
    let reversed = "";
    for (var x = sentence. length - 1; x >= 0; x--){
    reversed += sentence[x];
    }
        console.log(reversed);
//BON 1
        for (var x=0 ; x <= 100 ; x++) {
            if (x % 3 == 0 && x % 5 == 0) {
                console.log("Fizzbuzz")
            } 
            else if (x % 3 == 0) {
                console.log("Fizz")
            } 
            else if (x % 5 == 0) {
                console.log("Buzz")
            }
            else 
            {
                console.log(x);
            }  
        }  
        // BON 2
        var x=0;
        while(x<=100){
            if (x % 3 == 0 && x % 5 == 0) {
                console.log("Fizzbuzz")
            } 
            else if (x % 3 == 0) {
                console.log("Fizz")
            } 
            else if (x % 5 == 0) {
                console.log("Buzz")
            }
            else 
            {
                console.log(x);
            }  
            x++;
        }
// BON 3
        var nam = ["Amar", "Andy", "Ange", "Anthony", "Artha", "Barry", "Baydir", "Eliot", "Elodie", "Julien", "Kevin", "Laura", "Mridha", "Mohamed", "Rahmad", "Victor"," Yangchen"]
        var randomnum =nam[ Math.floor(Math.random()*nam.length)];
        console.log(randomnum);


     

      
        
    
    








