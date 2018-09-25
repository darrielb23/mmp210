// self portrait 

function setup() {
	createCanvas(320, 200);
	background(80);

  var headwidth = 100;
   //var eyesize = 
    var eyewidth = 30;
    
   var eyey = 55;
    var eyex = 135;
	var skincolor = 'darkorange';

    var eyecolor = 'yellow';
    var mouthcolor = 'green';
    var nosecolor = 'black'; 
     


    //crown

     



     stroke('white');
     line(70, 9, 124, 13);



     noFill();
     stroke('black');

     triangle(74, 14, 77, 5, 80, 14);

     triangle(88, 14, 92, 5, 98, 14);

     triangle(108, 14, 116, 5, 120, 14);







    // face
	noStroke ();
	fill(skincolor);
	ellipse(100, 100, 150); 


    // eyes

	fill(eyecolor);
	ellipse(eyex , eyey, eyewidth); // right eye

    fill(eyecolor)
	ellipse(eyey, eyey, 30); // left eye


    // mouth
     
    fill(mouthcolor);
	rect(75, 125, 50, 10, 10);  

     // nose
     fill(nosecolor);
     triangle(10, 10, 100, 100, 20, 40);	

}

