// //ex 1
// function calculate(number1, number2, operator) {
//     if (operator === "+") {
//         return number1 + number2;
//     }
//      else if (operator === "-") {
//         return number1 - number2;
//     } 
//     else if (operator === "x") {
//         return number1 * number2;
//     }
//      else if (operator === "/") {
//         return number1 / number2;
//     } 
//     else if (operator === "%") {
//         return number1 % number2;
//     }
//      else {
//         console.log(`${operator} is not calculator do`);
//     }
// }

// console.log(process.argv);

// if (process.argv.length !== 5) {
//     console.log("Error:");
// } else {
//     var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
//     console.log(result);
// }
// // //EX 2

// function multiply(number){
    
//     for(var x=1;x<=10;x++){
    

//             console.log(number + " * " + (x) + " = " + x*number );


//     }
// }
// multiply(parseInt(process.argv[2]))

// 03 - EX
var { multiply, addition } = require("./table-utils");

if (process.argv.length !== 4) {
    console.log("Error");
} else {
    
    multiply(parseInt(process.argv[2]));
    
    addition(parseInt(process.argv[3]));
}

//04-EX
var prompt = require("prompt");
var mysteryNum = Math.floor(Math.random() * 100 + 1);


function play(){
    prompt.get(
        {
           name: "userNumber",
            description: "Quel est le nombre mystère ?",
        },
        function (err,res){

            if (err) {
                return onErr(err);
            }
        
            if (res.userNumber<1 || res.userNumber>100) {
                console.log("give me number between 1 et 100");
                play();
            }
        
            else if (res.userNumber < mysteryNum) {
                console.log("give me big number")
                play()
            } else if (res.userNumber > mysteryNum) {
                console.log("give me small number")
                play()
            }
            else{
                console.log("yes win!")
            }
        }

        
    )

}

play()




