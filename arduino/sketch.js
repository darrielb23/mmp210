/*
    Arduino + p5 example
*/
var serial;
var portName = "COM3";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
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
    var c = map(sensorValue, 0, 1023, 0, 200);
    var b = map(sensorValue, 0, 1023, 100, 240);

    // sky
    background(c, b, c + 25);
    
    var y = map(sensorValue, 0, 1023, height, 0);
    //var x = map(sensorValue, 0 1023, width, 0);


    // sun
    stroke("white");
    fill('blue');


//dark moon1
    ellipse(20, y, 20);

//dark moon2

    ellipse(420, y -30 , 50);
    
  //dark moon3

    ellipse(300, y - 10, 20);

//dark moon4

    ellipse(115, y + 10, 50);

//dark moon5

    ellipse(87, y - 50, 20);

  //dark moon1
    ellipse(200, y + 20, 20);

//dark moon2

    ellipse(40, y - 10, 50);
    
  //dark moon3

    ellipse(340, y - 19, 20);

//dark moon4

    ellipse(15, y + 20, 10);

//dark moon5

    ellipse(0, y - 50, 30);  
}
