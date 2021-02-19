const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var engine;
var world;

var ball;
var ground;
var rope;
var boxes;

var mouse, mouseConstriant;
var canvas;
var options;

function preload() {}
function setup() {
  canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(125, 200, 50);
  ground = new Ground(250, 500);
  rope = new Rope(ball.body, { x: 125, y: 25 });

  boxes = [];

  for (var x = 0; x < 500; x += 50) {
    for (var i = 0; i < 250; i += 50) {
      boxes.push(new Box(250 + i, 50 + x));
    }
  }

  mouse = Mouse.create(canvas.elt);
  options = {
    mouse: mouse,
  };

  mouseConstriant = MouseConstraint.create(engine, options);
  World.add(world, mouseConstriant);
}
function draw() {
  Engine.update(engine);
  background("pink");
  ball.display();
  ground.display();
  rope.display();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
  drawSprites();
}
