var ball;

function setup() {
  createCanvas(400, 400);

  ball = {
    x:200, 
    y:200, 
    r:20,
    cor: "blue"
   }
}

function draw() {
  background(220);

  ellipseMode(RADIUS)
  fill(ball.cor)
  ellipse(ball.x,ball.y,ball.r,ball.r);
}