/* global Matter, createCanvas, Box, min, max, pixelDensity, width, height, mouseX, mouseY, background, noStroke, fill, rectMode, circle, CENTER */

var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Composite = Matter.Composite;

var engine;
var world;
var boxes = [];

var ground, leftwall, rightwall, roof, cursorobject;

var mConstraint;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  engine.world.gravity.y = 0;
  var options = {
    isStatic: true,
  };

  // Här sätts options för de röda bollarna
  var options2 = {
    frictionAir: 0.0,
    frictionStatic: 0.0,
    friction: 0.0,
    inertia: Infinity,
    slop: 0,
  };

  ground = Bodies.rectangle(200, height + 5, width * 2, 10, options);
  roof = Bodies.rectangle(200, -5, width * 2, 10, options);
  leftwall = Bodies.rectangle(-5, height / 2, 10, height * 2, options);
  rightwall = Bodies.rectangle(width + 5, height / 2, 10, height * 2, options);

  cursorobject = Bodies.circle(200, 200, 21, options2);
  Composite.add(world, cursorobject);

  Composite.add(engine.world, [ground, roof, leftwall, rightwall]);

  // Här läggs bollarna ut
  for (var i = 0; i < 7; i++) {
    boxes.push(
      new Box(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * window.innerHeight),
        min(window.innerWidth, window.innerHeight) * 0.17,
        options2
      )
    );
  }

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  console.log(canvasmouse);
  var options = {
    mouse: canvasmouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  Composite.add(world, mConstraint);
}

/*function mouseClicked() {
  Body.applyForce(
    Box,
    { x: Box.position.x, y: Box.position.y },
    { x: 50, y: 50 }
  );
}*/

function updateObjectPosition() {
  Matter.Body.setPosition(cursorobject, { x: mouseX, y: mouseY });
}

function draw() {
  updateObjectPosition();
  background(230, 223, 208);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  //Ground
  //noStroke(255);
  //fill(255);
  //rectMode (CENTER);
  //rect(200, height, width*2, 10);
  noStroke(255);
  fill(255);
  rectMode(CENTER);
  circle(mouseX, mouseY, 40);
}
