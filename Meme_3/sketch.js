/*
    Meme v if
    by Darriel
    10.09.2018
    conditional logic / interactive
    mmp210 week6
*/

var smoke;
var sq;
var sq3;
var sq6;
var sq7;
var turtleY = 0;
var turtleSpeed = 45;
var textType = "Impact, Charcoal, sans-serif";
var ts1 = 15;
var ts2 = 18;
var ts3 = 26;
var ts4 = 40;
var ts5 = 60;



function preload() {
    smoke = loadImage("allsmoke.jpg");
    sq = loadImage("squirtle.jpg");
    sq3 = loadImage("sq3.jpeg");
    sq6 = loadImage("sq6.jpg");
    sq7 = loadImage("sq7.jpg");
}

function setup() {
    createCanvas(930, 500);
    image(smoke, 0, 0, width / 2, height / 2);
}

function draw() {



    //memeImage mousePress right

    if (mouseIsPressed) {
        background('lightgreen');
    } else {
        background('lightblue');
    }



    // background rect for mousePress1

    var bgX = 130;
    var bgY = 40;
    var bgWidth = 259;
    var bgHeight = 25;


    // background rect for mousePress2

    var bgX2 = 170;
    var bgY2 = 390;
    var bgWidth2 = 248;
    var bgHeight2 = 25;



    //text

    var textFill = 'pink';
    var textFill2 = 'black';

    //memeImage mouseX moves Right


    if (mouseX > width / 2) {

        image(sq3, 0, 0, width / 2, height / 2); // top left

        image(sq6, width / 2, 0, width / 2, 145) // top right


        textSize(ts1);
        text("DROP AND GIMME 20 !!", 740, 30);


        image(smoke, width / 2, min(140, turtleY), width / 2, height); // right half
        turtleY += turtleSpeed;


        if (turtleY > 171 || turtleY < 0) {
            turtleSpeed *= -1;
        }
        image(sq6, 0, height / 2, width / 2, height / 2); // bottom left

        fill(textFill2);
        textSize(ts2);
        text("WHEN YOU GOTTA COMPETE FOR THE LAST SPOT ON THE TEAM", 30, 280);





        //memeImage mousePress right

        if (mouseIsPressed) {

            image(sq, 130, 0);


            rect(bgX, bgY, bgWidth, bgHeight) // background for words

            rect(bgX2, bgY2, bgWidth2, bgHeight2) // background for words2

            textSize(ts3);
            fill(textFill);
            text("IF YOU WANA GO FASSTTT", 133, 63);
            text("GO SUPERRR FASSSTTTT", 172, 413);
        }

    }
    //memeImage mouseX moves left
    else {

        textSize(ts4);
        fill(textFill2);
        text("SCHOOL FOR THE FAST LIFE", 500, 140);
        image(smoke, width / 2, height / 2, width / 2, 0); // bottom right
        translate(width / 2, 0);
        var r = frameCount / 100 * PI;
        rotate(r);


        translate(width / 2, 0);
        var r = frameCount / 100 * PI;
        rotate(r);
        textSize(ts5);
        image(sq7, 0, 0, width / 2, height / 2); // rotating image 
        fill(textFill2);
        text("OOO WEEE", 100, 300); // rotating text

    }


    fill(textFill);

    textSize(ts3);
    textFont(textType);


}
