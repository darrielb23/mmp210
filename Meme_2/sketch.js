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


function preload() {
    smoke = loadImage("allsmoke.jpg");
    sq = loadImage("squirtle.jpg");
    sq3 = loadImage("sq3.jpeg");
    sq6 = loadImage("sq6.jpg");
    sq7 = loadImage("sq7.jpg");
}


function setup() {
    createCanvas(930, 500);

}

function draw() {
    background(0);



    // background for meme

    var bgX = 130;
    var bgY = 40;
    var bgWidth = 320;
    var bgHeight = 25;




    // background for meme two

    var bgX2 = 170;
    var bgY2 = 390;
    var bgWidth2 = 257;
    var bgHeight2 = 25;




    //text

    var textFill = 'pink';
    var textFill2 = 'black';


    //meme image 


    if (mouseX > width / 2) {

        image(sq3, 0, 0, width / 2, height / 2); // top left
        image(smoke, width / 2, 0, width / 2, height); // right half
        image(sq6, 0, height / 2, width / 2, height / 2); // bottom left


    } else {
        image(sq7, 0, 0, width / 2, height / 2); // top left 
        image(smoke, width / 2, height / 2, width / 2, 0); // bottom right 

        textSize(35);
        text("LET'S GO !!", 520, 100);
        text("LET'S GO !!", 100, 400);
    }





    fill(textFill);

    textSize(25);
    textFont("Impact, Charcoal, sans-serif");




    if (mouseIsPressed) {

        image(sq, 130, 0);


        rect(bgX, bgY, bgWidth, bgHeight) // background for words

        rect(bgX2, bgY2, bgWidth2, bgHeight2) // background for words2


        fill(textFill2);
        text("WELCOME TO FAST LIFE ACADEMY", 132, 63);
        text("SCHOOL FOR THE FAST LIFE", 172, 413);

    }


}
