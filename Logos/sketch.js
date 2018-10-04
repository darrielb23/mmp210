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
    createCanvas(800, 400);

}

function draw() {
    background(0);

    image(smoke, 0, 0, width, height);
    tint(20, 60, 200);
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont("Comic Sans MC")
    text("YEAH BRO, YOU ALREADY KNOW WE OUTCHEA LIVING THE FAST LIFE !!", width/2, height/2);


}
