let canvasXMax=400;
let canvasYMax=400;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  
  textSize(15);
  let string_toprint="Contenuto mouseX="
  +mouseX+""
  //"Mouse x="+mouseX+
  ", y="+mouseY;
  //text(string_toprint, 20, 20);
  strokeWeight(3);
  line(0,mouseX, canvasXMax, mouseY);
  //feedback tasto mouse sx
  //disegnare la linea gialla 
  //se schiacciamo il mouse
  //p5---> true, se il mouse è schiaccaito,
  //altrimenti è false
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220);
    }
    //LEFT,RIGHT, CENTRAL
    //coloriamo di giallo
    stroke("yellow");
  }
  //altrimenti nero
  else{
    stroke("black");
  }
  mouseIsPressed;
}
