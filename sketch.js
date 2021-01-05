var man;
var bad = [];
//finish up hit function https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1027s
function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100; i++) {
    bad[i] = new obstacle();
  }

}

function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -5);
    man.applyForce(force);
  }
}

function draw() {
  background(51);
  translate(-man.pos.x + 100, 0);
  let gravity = createVector(0, 0.05)
  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();
  //Silly hard code or obstacle
  fill(50, 30, 200);
  rect(200, height - 50, 100, 100);

  for (let i = 0; i < 100; i++) {
    if( man.hits(bad[i])){
      console.log("Game Over!");
      console.log(bad[i].pos.x);
    }
    //console.log(bad[i].pos.x);

    bad[i].show();
    bad[i].update();
  }



}
