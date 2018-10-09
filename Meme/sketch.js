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






//meme image 

    var imageX = 0;
    var imageY = 0;
    var imageTint1 = 200;
    var imageTint2 = 200;
    var imageTint3 = 100;
    var imageFill = 'black';



// background for meme

    var bgX = 120;
    var bgY = 5;
    var bgWidth = 402;
    var bgHeight = 25;
    



// background for meme two

    var bgX2 = 250;
    var bgY2 = 280;
    var bgWidth2 = 460;
    var bgHeight2 = 25;

//text

var textfill = 'pink';



 //meme image 

    image(smoke, imageX, imageY, width, height );
    tint(imageTint1, imageTint2, imageTint3);
    fill(imageFill);
    


// background for meme one

    rect(bgX, bgY, bgWidth, bgHeight)



// background for meme two

    rect(bgX2, bgY2, bgWidth2, bgHeight2)


// 
    fill(textfill);


    textSize(25);
    textFont("Comic Sans MC")
    text("YEAH BRO, YOU ALREADY KNOW", 120, 25);
    text("WE OUTCHEA LIVING THE FAST LIFE !!", 250,300);

}
