/*
Logo
by Darriel
rough draft
mmp210 week5
*/

var smoke;

function preload () {
smoke = loadImage ("allsmoke.jpg");

}



function setup() {
    createCanvas(900, 350);

}

function draw() {
    background(0);

    image(smoke, 0, 0, width, height );
    tint(200, 200, 100);
    fill("black")
    rect(120, 5, 402, 25)
    rect(250, 280, 460, 25)
    fill("pink");
//    textAlign(CENTER, CENTER);
    textSize(25);
    textFont("Comic Sans MC")
    text("YEAH BRO, YOU ALREADY KNOW", 120, 25);
    text("WE OUTCHEA LIVING THE FAST LIFE !!", 250,300);

}
