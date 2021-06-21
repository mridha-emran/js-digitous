
//ex 001
var sum=0;
for(var x=5;x<=10;x++){
sum=sum+x*x;
}
console.log(sum);

//ex 002
var totel = 0
for (let i = 100 ; i <= 1000 ; i++) {
    if (i%7 === 0)
    totel = totel + 1
}
console.log(totel)


//ex003
function Die() {
    return Math.floor(Math.random() * 6); 
  }
  var sum =0;
  for (var i = 0; i < 20; i++) {
    var result = Die();
    
    if(result<=5){
        sum=sum+result

    }
  }

  console.log(sum);

//ex 004
  /* console.log(box1);5+12=17

  console.log(box2);17+13=30
  console.log(i);=14;*/

  //ex 005
  

/*console.log(box1);12+12+9+6+3=42
console.log(i);0*/


/*console.log(box1);0+-1+-1+-1+-1=-4
console.log(box2);3+1+1=5            
                                
console.log(i);-4*/


    


