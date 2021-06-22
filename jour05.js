//ex 1
function calculate(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "%") {
        return number1 % number2;
    } else {
        console.log(`${operator} is not calculator do`);
    }
}

console.log(process.argv);

if (process.argv.length !== 5) {
    console.log("Error:");
} else {
    var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
}
//EX 2

function multiply(number){
    
    for(var x=1;x<=10;x++){
    

            console.log(number + " * " + (x) + " = " + x*number );


    }
}
multiply(parseInt(process.argv[2]))





