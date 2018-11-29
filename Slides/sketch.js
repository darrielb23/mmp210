/*
    final project presentation slides
    by Darriel
    mmp210 week11
*/
var slide = 0;

var pop1;
var pop2;

function preload() {
    pop1 = loadImage("popcornbk.png");
    pop2 = loadImage("slide101.jpg");
}

function setup() {
    createCanvas(1210, 600);
    textSize(60);
    textFont('Acme');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background("220");
    
    if (slide == 0) {
        text("Final Project Idea", width/2, height/2);

    } else if (slide == 1) {
        textSize(30);
        text("Speaker sensor", 200, 100);
        
        // fsr graphic
        rect(550, 400, 200, 100);
        ellipse(600, 400, 50);
        ellipse(500, 400, 50);
        line(500, 300, 350, 200);
        line(600, 300, 750, 200);
        line(550, 300, 550, 200);


    } else if (slide == 2) {
        text("Theme: At The Movies", 200, 20);
        image(pop1, 0,0, width, height);

    }



 else if (slide == 3) {
        text("How To Website Is Going To Work", 200, 20);
        image(pop2, 0,0, width,height);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
