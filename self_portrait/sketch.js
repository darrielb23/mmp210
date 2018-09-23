// self portrait 
function setup() {
	createCanvas(400, 200);

}

	

    function draw() {

    background("yellow" );




     
    // face
	
	fill("darkoranged");
	ellipse(100, 100, 300); 


    // eyes

    
    
   
    fill ("yellow")
	ellipse(140, 40, 25); // left eye
    fill("green")
    ellipse(135, 50, 10);





	fill("yellow");
    ellipse(50 , 40, 25); // right eye
    fill("green");
    ellipse(60, 50, 10);


	
      // nose
     
     triangle(10, 10, 100, 100, 20, 40);
     





    // mouth

    stroke("yellow");
    fill("blue");
    rect(65, 125, 70, 25) ;

    stroke("red");
    fill("white");
    
	rect(75, 130, 50, 10, 10);  


    
   	



}

