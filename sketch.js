function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      fill(shapeColor);
      ellipse(x, y, radius);
    }
  
    
    function drawSquare(x, y, size) {
      fill(shapeColor);
      rect(x, y, size, size);
    }
  
    function drawTriangle(x, y, size) {
      fill(shapeColor);
      triangle(x, y, x + size, y, x + size / 2, y - size);
    }
  
    drawCircle(width / 2, height / 2, width / 4); 
    drawSquare(width / 4, height / 4, width / 2); 
    drawTriangle(width * 3 / 4, height / 4, width / 2);
}

      pop();
    }


