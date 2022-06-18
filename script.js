//An array of nice color codes we shall pick from
let niceColors = ["#C5514C", "#EC9D6C", "#FAE2B7", "#6D7D8F", "#0f25d1"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();  //uncomment this if you DON'T want animation
}

function draw() {
  noStroke();
  let chosenColor = random(niceColors);
  fill(chosenColor);
  let size = random(20, 80);
  circle(mouseX, mouseY, size);
}

//Allow clearing the canvas by clicking...
function mousePressed() {
  background(255);
}
