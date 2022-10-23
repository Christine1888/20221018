function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(750);
  noFill()
  stroke(255);
  var w= mouseX/5
  for(var j=0;j<height/5;j++)
  {
    for(var i=0;i<width/50;i++)
    {
      stroke(255,255,0)
      ellipse(75+50*i,75+50*j,mouseX/5)
      stroke(255)
      rect(75+50*i,75+50*j,mouseY/10)
      stroke("#a2d2ff")
      ellipse(100+50*i,100+50*j,mouseY/10)
    }
  }
}
