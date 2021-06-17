//EX 1
var cat= {
    name:"garfield",
    age:3,
    iscute:true,

};
console.log(cat);
console.log(cat.age);
 var soCute = cat.hasOwnProperty("iscute");
 console.log("so cute")


//EX 2
var cat2 = {
    name: "rani",
    age: 3,
    isCute: false,

}

var cats = [cat, cat2]

console.log(cats[0].age)
console.log(cats[1].isCute)

//EX 3
function cheekifeven(num){
    if (num%=0){
        console.log( "is even");
    }
    else{
        console.log("is odd");
    }

}

cheekifeven(6)

//EX 4


function compare (num1,num2){
    if (num1 <num2){
        console.log(num1+" is biger");
    }
    else if(num2<num1){
        console.log(num2+" is biger")}
        else if(num1==num2){
            console.log("equel")
        }
        

        
    }
    //EX 5

    function addup(num){
        
        for(x=1;x<12;x++){
            num=num+x;
        }
        console.log(num)
    }
    addup(12)

    
//EX 6

    function format(num) {
        return parseInt(num / 3600) + ':' + parseInt((num % 3600) / 60) + ':' + parseInt((num% 3600) % 60);
      }
    
      console.log( format(3700))

      // BON 
