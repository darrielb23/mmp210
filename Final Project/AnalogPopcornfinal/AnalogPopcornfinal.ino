/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
int oldAnalogVal = 0;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  int val = oldAnalogVal - analogRead(A0);
    if ( abs (val) > 20){
    Serial.println("superspike");

}

 else if ( abs ( val) > 5){
    Serial.println("spike");
  }

  else{
    Serial.println("low");
  }


  
  oldAnalogVal = analogRead(A0);
//  Serial.println(oldAnalogVal);
  // read the input on analog pin 0:
//  int sensorValue = analogRead(A0);
  // print out the value you read:
//  Serial.println(sensorValue);
  delay(5);        // delay in between reads for stability
}