// self portrait 
function setup() {
	createCanvas(320, 200);
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
     
    fill("green");
	rect(75, 125, 50, 10, 10);  

     // nose
     triangle(10, 10, 100, 100, 20, 40);	
}

