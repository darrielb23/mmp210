// self portrait 
function setup() {
	createCanvas(300, 200);
	background(80);
	
    // face
	
	fill("darkorange");
	ellipse(100, 100, 150); 


    // eyes
	fill("yellow");
	ellipse(60 , 60, 25); // right eye
    fill("blue")
	ellipse(135, 60, 25); // left eye


    // mouth
	noFill();
	stroke("#ffddff");
	strokeWeight(4);
	rect(75, 125, 50, 10, 10); 	
}

