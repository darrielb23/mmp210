// self portrait 

function setup() {
	createCanvas(320, 200);
	background(80);


//crown



    var crownBaseclr = 'white';
    var crownTriangleclr = 'black';


    var crownLineX = (68)
    var crownLineY = (9)

    var crownLineX2 = 124;
    var crownLineY2 = 13;



//first triangle

  var crownTriX1 = (74)
  var crownTriY1 = (14)

  var crownTriX2 = (77)
  var crownTriY2 = (5)

  var crownTriX3 = (80)
  var crownTriY3 = (14)




//second triangle

  var crwnTriX1 = (88)
  var crwnTriY1 = (14)

  var crwnTriX2 = (92)
  var crwnTriY2 = (5)

  var crwnTriX3 = (98)
  var crwnTriY3 = (14)




//third triangle

  var ccrwnTriX1 = (108)
  var ccrwnTriY1 = (14)

  var ccrwnTriX2 = (116)
  var ccrwnTriY2 = (5)

  var ccrwnTriX3 = (120)
  var ccrwnTriY3 = (14)




//face


    
var facecolor = 'darkorange';



var facewidth = 150;


var facePosX = 105 ;
var facePosY = 100;





 






//eye
    
    var eyewidth = 26;
    var eyecolor = 'yellow';

    // left eye
    var leftEyeX = 58;
    var leftEyeY = 35;




    
    //right eye
    var rightEyeX = 139;
    var rightEyeY = 35;
    




//nose
    var nosecolor = 'black'; 
    var noseTriX1 = 10; 
    var noseTriY1 = 10;
    
    var noseTriX2 = 100; 
    var noseTriY2 = 100;
    
    var noseTriX3 = 20; 
    var noseTriY3 = 40;
  




//mouth

//var mouthline
    var mouthColor = 'black';

    var mouthRectX = 75 ;
    var mouthRectY = 125;
    var mouthRectWidth = 50;
    var mouthHeight = 10;
    var mouthRadius = 10;

   
    

    









   
  


    //crown

     
     stroke(crownBaseclr);
     line (crownLineX, crownLineY, crownLineX2, crownLineY2);




     noFill();
     stroke(crownTriangleclr);


     //first
     triangle(crownTriX1, crownTriY1, crownTriX2, crownTriY2, crownTriX3, crownTriY3);
     
     //second
     triangle(crwnTriX1, crwnTriY1, crwnTriX2, crwnTriY2, crwnTriX3, crwnTriY3);
     
     //third
     triangle(ccrwnTriX1, ccrwnTriY1, ccrwnTriX2, ccrwnTriY2, ccrwnTriX3, ccrwnTriY3);








    // face


	noStroke ();
	fill(facecolor); 
    ellipse(facePosX, facePosY, facewidth );





    // eyes


    

	fill(eyecolor);
    ellipse(rightEyeX ,rightEyeY, eyewidth); // right eye



    fill(eyecolor)
    ellipse(leftEyeX, leftEyeY, eyewidth); // left eye


    //Pupil

    fill("black")
    ellipse(60, 40, 10); // left pupil



    fill("black")
    ellipse(135, 40, 10); // right pupil






    // mouth
     
    



    noStroke();
    fill(mouthColor);
	rect(mouthRectX, mouthRectY, mouthRectWidth, mouthHeight, mouthRadius);  



    //teeth
    stroke( 'white');
    line (85, 129, 115, 129); 






    // nose
     noStroke();
     fill(nosecolor);

     triangle(noseTriX1, noseTriY1, noseTriX2, noseTriY2, noseTriX3, noseTriY3);	

}






