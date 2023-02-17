var options2 = {
    frictionAir: 0.0001,
  sleepThreshold: -1
  };
function Box(x, y, w, options2) {
  this.body = Bodies.circle(x, y, w, options2);
  this.w = w;
  Composite.add(engine.world, this.body);
  
this.show = function() {
  var pos = this.body.position;
  var angle = this.body.angle
  
//function mouseClicked() {
//    Body.applyForce( this.body, {x: this.body.position.x, y: this.body.position.y}, {x: 50, y: 50});
//  }
  
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(1);
  noStroke(255);
  fill(240,0,0); 
  rect(0, 0, this.w*2, this.w*2, this.w, this.w);
  pop();
}
}