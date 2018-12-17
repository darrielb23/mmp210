// Movies


var popbk;
var pop1;
var pop2;
var pop3;
var popSound;
var serial;
var portName = "/dev/cu.usbmodem14301";
var sensorValue;



function preload() {

    popbk = loadImage("bkpop.jpg");
    pop1 = loadImage("images/pop1.png");
    pop2 = loadImage("images/pop2.png");
    pop3 = loadImage("images/pop3.png");
    pop4 = loadImage("images/popcornbk.png");

    popSound = loadSound('pop.mp3');
}



function setup() {

    createCanvas(windowWidth, windowHeight);

    image(popbk, 0, 0, width, height);

    imageMode(CENTER);




    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}


function draw() {
    console.log(sensorValue);

    if (sensorValue == "spike") {
        // Random X
        var popRandomX = random(1100);
        var popRandomX2 = random(1100);
        var popRandomX3 = random(1100);

        // Random Y
        var popRandomY = random(1100);
        var popRandomY2 = random(1100);
        var popRandomY3 = random(1100);



        image(pop1, popRandomX, popRandomY, 200, 200);
        image(pop2, popRandomX2, popRandomY2, 200, 200);
        image(pop3, popRandomX3, popRandomY3, 90, 90);

        popSound.play();

    } else if (sensorValue == "superspike") {
        image(pop4, width / 2, height / 2);

    }




    //     if (serial spike is splike is spike pop the corn for me) {

    //            image(pop2, 130, 0);
    //            image(pop3, 130, 0);
    //            image(pop4, 130, 0);
    //            image(pop5, 130, 0);
    //            image(pop6, 130, 0);
    //            image(pop7, 130, 0);
    //            image(pop8, 130, 0);

    //            }  else {
    //            background('lightblue');
    //        }

}

function mousePressed() {
    //    image(popbk, 0, 0, width, height)

    //    console.log(mousePressed);




}

function keyPressed() {
    if (keyCode == 32) {
        location.reload();
    }
}
