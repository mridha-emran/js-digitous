const prompt= require("prompt");
      prompt.start()

var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
var rover= { 
	direction :"N",
	x:0,
	y:0,
	travelLog:[],
};

function turnLeft(rover){
	
    if(rover.direction ==="N"){
        rover.direction ="W";
		// console.log(rover + "this is west")
         }
	else if(rover.direction ==="W"){
        rover.direction ="S";
		// console.log(rover + "this is south")
	}
	else if  (rover.direction ==="S"){
        rover.direction ="E";
		// console.log(rover + "this is east")
	}
	else if(rover.direction ==="E") {
		rover.direction ="N";
		// console.log(rover + "this is north")
	}
	 console.log(rover);
	 grid[rover.y][rover.x]=rover.direction

}
 turnLeft(rover);



function turnRight(rover){
	
    if(rover.direction ==="N"){
        rover.direction ="E";
		// console.log(rover + "this is east")
         }
	else if(rover.direction ==="E"){
        rover.direction ="S";
		// console.log(rover + "this is south")
	}
	else if  (rover.direction ==="S"){
        rover.direction ="W";
		// console.log(rover + "this is west")
	}
	else if(rover.direction ==="W") {
		rover.direction ="N";
		// console.log(rover + "this is north")
	}
	 console.log(rover);
	  grid[rover.y][rover.x]=rover.direction
  
};

function moveForward(rover){
	if(rover.x<0||rover.x>9||rover.y<0||rover.y>9){

			console.log("go other direction")
	}
	else if(rover.direction==="N"){
		if(rover.y!=0){

			rover.y--;	
		}
		
	}
	else if(rover.direction==="E"){
		if(rover.x!=9){

			rover.x++;	
		}

	}
	else if(rover.direction==="S"){
		if(rover.y!=9){

			rover.y++;
		}

	}
	else if(rover.direction==="W"){
		if(rover.x!=0){

			rover.x--;	
		}
	}
	console.log(rover)
	grid[rover.y][rover.x]=rover.direction
}


// function moveBackward(rover){
// 	if((rover.x<0||rover.x>10)||(rover.y<0||rover.y>10)){
// 		console.log("go other direction")
// 	}
// 	else if(rover.direction==="N"){
// 		rover.y++;	
// 	}
// 	else if(rover.direction==="E"){
// 		rover.x++;	
// 	}
// 	else if(rover.direction==="S"){
// 		rover.y--;	
// 	}
// 	else if(rover.direction==="W"){
// 		rover.x--;	
// 	}
// 	console.log(rover)
// 	grid[rover.y][rover.x]=rover.direction
// }
// moveForward(rover);
// moveBackward(rover);

function pilotRover(string){
	 
 for ( var i =0; i <= string.length; i ++ ){
		if (string[i]==="l"){
			turnLeft(rover)
			rover.travelLog.push([rover.x,rover.y])
		}
		else if(string[i]==="r"){
			turnRight(rover)
			rover.travelLog.push([rover.x,rover.y])
		}
		else if(string[i]==="f"){
			moveForward(rover)
			rover.travelLog.push([rover.x,rover.y])
		}

		// else if(string[i]==="b"){
		// 	moveBackward(rover)
		// 	rover.travelLog.push([rover.x,rover.y])
			
		// }
 }
 console.table(grid)
}

// pilotRover("rrllffbbm")

function show (){
	prompt.get({name:"input",
		description: "give me r/l/f/b",
	}, 
	function (err,res){
		if (err) {
			return("errr");

		}

		else if(res.input==="l"){
			pilotRover("l")
			show()
		}
		else if(res.input==="r"){
			pilotRover("r")
			show()
		}
		else if(res.input==="f"){
			pilotRover("f")
			show()
		}
		
		
	
	//   console.log(res.show);
	//   pilotRover("rrllffbbm")

	//   console.log(rover.travelLog)
	  

	
	   
	})
}
show()