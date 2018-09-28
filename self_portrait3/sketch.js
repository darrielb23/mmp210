// self portrait 

function setup() {
    createCanvas(800, 300);
}

function draw() {
    background('blue');




    //crown

    var crownBaseclr = 'white';
    var crownTriangleclr = 'black';
    var crownStroke = 3;

    var crownLineX = 68;
    var crownLineY = 9;

    var crownLineX2 = 124;
    var crownLineY2 = 13;



    //first triangle

    var crownTriX1 = 74;
    var crownTriY1 = 14;

    var crownTriX2 = 77;
    var crownTriY2 = 5;

    var crownTriX3 = 80;
    var crownTriY3 = 14;




    //second triangle

    var crwnTriX1 = 88;
    var crwnTriY1 = 14;

    var crwnTriX2 = 92;
    var crwnTriY2 = 5;

    var crwnTriX3 = 98;
    var crwnTriY3 = 14;




    //third triangle

    var ccrwnTriX1 = 108;
    var ccrwnTriY1 = 14;

    var ccrwnTriX2 = 116;
    var ccrwnTriY2 = 5;

    var ccrwnTriX3 = 120;
    var ccrwnTriY3 = 14;


    //face


    var r = 255; // red;
    var g = 145; // green
    var b = mouseX; // blue




    var facewidth = 150;


    var facePosX = 105;
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


    //Pupil
    var pupilColor = 'black';
    var pupilWidth = 10;

    var pupilX = 60;
    var pupilY = 40;

    var pupil2X = 135;
    var pupil2Y = 40;



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

    var mouthRectX = 75;
    var mouthRectY = 125;
    var mouthRectWidth = 50;
    var mouthHeight = 10;
    var mouthRadius = 10;




    //teeth


    var teethcolor = "white";
    var teethX = 85;
    var teethY = 129;
    var teethX2 = 115;
    var teethY2 = 129;
    var teethwidth = 1.5;




    // face

    noStroke();
    fill(r, g, b);
    ellipse(facePosX, facePosY, facewidth);





    // eyes




    fill(eyecolor);
    ellipse(rightEyeX, rightEyeY, eyewidth); // right eye



    fill(eyecolor);
    ellipse(leftEyeX, leftEyeY, eyewidth); // left eye





    //Pupil



    fill(pupilColor);
    ellipse(pupilX, pupilY, pupilWidth); // left pupil

    fill(pupilColor);
    ellipse(pupil2X, pupil2Y, pupilWidth); // right pupil



    // mouth





    noStroke();
    fill(mouthColor);
    rect(mouthRectX, mouthRectY, mouthRectWidth, mouthHeight, mouthRadius);



    //teeth

    strokeWeight(teethwidth);
    stroke(teethcolor);
    line(teethX, teethY, teethX2, teethY2);





    // nose
    noStroke();
    fill(nosecolor);

    triangle(noseTriX1, noseTriY1, noseTriX2, noseTriY2, noseTriX3, noseTriY3);


    //var s = width - mouseX; // reverses the direction// decided not to use it

    var beCrown = map(mouseX, 0, width, 0, 550, true); // move mouth with mouse x

    //crown

    strokeWeight(crownStroke);
    stroke(crownBaseclr);
    line(crownLineX, crownLineY + beCrown, crownLineX2, crownLineY2 + beCrown);


    noFill();
    stroke(crownTriangleclr);


    //first
    triangle(crownTriX1 + beCrown, crownTriY1, crownTriX2 + beCrown, crownTriY2, crownTriX3 + beCrown, crownTriY3);

    //second
    triangle(crwnTriX1 + beCrown, crwnTriY1, crwnTriX2 + beCrown, crwnTriY2, crwnTriX3 + beCrown, crwnTriY3);

    //third
    triangle(ccrwnTriX1 + beCrown, ccrwnTriY1, ccrwnTriX2 + beCrown, ccrwnTriY2, ccrwnTriX3 + beCrown, ccrwnTriY3);





}
