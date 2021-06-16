 //ex 1
 
 var integer=102;
var float=13.9;
console.log(integer,float);

//ex 2
var basic=34;
var stringified=basic.toString();
console.log(stringified);

//Ex 3

var num = 1.5;
var rounded=Math.round(num);
console.log(rounded);

//ex 4
 var test=12;
 var bis=5;
 console.log(test+bis,test-bis, test%bis);
// ex 5
var test = 143;
var bis =219;
console.log(test>bis , test<bis,test==bis,test!=bis,test===bis);

//ex 6


var limit =50;
var score=64;
if(score>=limit){
    console.log("Ok good !");
}
else{
    console.log("Oh nooo...");
}
// ex 8
var password="azerty";
if(password.length>5){
    console.log("The password is secure" );
}
//EX 9

if(score>=limit===password.length>5){
    console.log("Everything is good")
}
  else if (score>=limit||password.length>5){
    console.log("Something is good")
}
else if (score>=limit && password.length>5){
    console.log("nathing is good")
}
// bon 1
 var min = 1;
 var max =6;
  var random= Math.floor(Math.random() * (max - min + 1) + min); 
  
  if(random===6){
      console.log("yes win");
  }
  else{
      console.log("so close");
  }

//bon 2
  var month="janvier";
  switch(month){
      
    case "janvier":
          console.log("winter");
          break;
          case "mars":
            console.log("spring");
            break;
          case"avril":
            console.log("summer")  
            default:
            console.log("nathing");

  }

  var roundedNumber = 
if (((roundedNumber - Math.floor(roundedNumber)) * 10) >= 5 ) { 
    console.log(Math.ceil(roundedNumber)) 
} else {
    console.log(Math.floor(roundedNumber))}




