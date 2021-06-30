const prompt= require("prompt");
      prompt.start()
// var properties = [{
// 	name : "Put a letter";
	
// }]	  
// prompt.get(properties, function(err,res){
	
// }
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
	direction :"S",
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
	 grid[rover.x][rover.y]=rover.direction

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
	if((rover.x<0||rover.x>10)||(rover.y<0||rover.y>10)){
			console.log("go other direction")
	}
	else if(rover.direction==="N"){
		rover.x--;	
	}
	else if(rover.direction==="E"){
		rover.y++;	
	}
	else if(rover.direction==="S"){
		rover.x++;	
	}
	else if(rover.direction==="W"){
		rover.y--;	
	}
	console.log(rover)
}

function moveBackward(rover){
	if((rover.x<0||rover.x>10)||(rover.y<0||rover.y>10)){
		console.log("go other direction")
	}
	else if(rover.direction==="N"){
		rover.x++;	
	}
	else if(rover.direction==="E"){
		rover.y--;	
	}
	else if(rover.direction==="S"){
		rover.x--;	
	}
	else if(rover.direction==="W"){
		rover.y++;	
	}
	console.log(rover)
}
moveForward(rover);
moveBackward(rover);

function pilotRover(string){
	 
 for ( var i =0; i <= string.length; i ++ ){
		if (string[i]==="l"){
			turnLeft(rover)
		}
		else if(string[i]==="r"){
			turnRight(rover)
		}
		else if(string[i]==="f"){
			moveForward(rover)
		}

		else if(string[i]==="b"){
			moveBackward(rover)
		}
 }
 console.table(grid)
}

pilotRover("rrllffbbm")

function show (){
	prompt.get( [show], function (err,res){
		if (err) {
			return onErr(err);
		}
        else {
	  console.log(res.show);
	  pilotRover("rrllffbbm")
        }
	})
}
show()