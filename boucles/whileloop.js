// EX1
var x = 50; 
while(x < 200) { 
   console.log(x)
    x+=2;
} 
//EX2
function roll() {
  return Math.floor(Math.random() * 6)+1; 
}

var dice=true;
 var count=0;
 
  while ( dice!==6) {
     dice=roll();
      
      
     console.log(dice)
        count++
      }
console.log( "dice rolled "+count)

//EX3
  
function race(){
  return Math.floor(Math.random()*10)+1
}
var ussainBolt = 0
var tysonGay = 0
while (ussainBolt < 100 && tysonGay < 100) {
    ussainBolt = ussainBolt + race()
    tysonGay = tysonGay + race()
    

    if(ussainBolt<tysonGay){
      console.log("tysonday win")
    }
     else if(tysonGay<ussainBolt){

       console.log("ussainbolt win")
     }
     
    }

    //EX-4
        console.log(box2);// var =5
        box1 -= 10;
        console.log(box1);//12-10=2-10=-8>0;
    




