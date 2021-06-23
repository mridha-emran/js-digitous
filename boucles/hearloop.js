numbers = []
total = 0
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100)+1);
    

}
console.log(i)
for (i = 0; i < numbers.lenght -1; i++) {

    total = total + numbers[i]

}
console.log(numbers)
console.log(total)




numbers = []
max = 0
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100)+1);
    
    if (max < numbers[i]) {
        max = numbers[i]
    }

}
console.log(numbers)
console.log(max)

numbers = []
for (i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 200)+1);

}

j = 0

while (numbers[j] < 75 || numbers[j] > 100) {

    j++

}


console.log(numbers[j])

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var temparray = [];
var totel = 0;
for (var i = 0; i <= words.length - 1; i++) {
    

    temparray = words[i].split(" ").join(""); 
    for (var j = 0; j <= temparray.length - 1; j++) {


        if (temparray[j] == "o") {
            totel++

        }
    }
}

console.log("final result", totel);


    

    
