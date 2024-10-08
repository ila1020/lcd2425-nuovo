function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
 noLoop();
  background("#3c3b4c");
  fill("Lightblue");
  noStroke();
  let height=25;
  let verticalGutter=10;

  //column=altezza/ (larghezza rect + spazio orizzontale)
  let columns = windowWidth/(verticalGutter + 5);
  //righe=altezza/ (altezza rect + spazio verticale)
  let rows = windowHeight/(height + verticalGutter);

 for(let i= 0; i < columns; i++)
{
  for (let r=0; r<rows; r++){
    let yPos=r*(height + verticalGutter) + random(-2.5, 2.5)
    let xPos=i*(verticalGutter+5)+random(-2.5, 2.5)
    //fill(random(0,120));
    rect(xPos, yPos, 10, 20);
  }
 
 }

}
