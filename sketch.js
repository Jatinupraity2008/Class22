const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;
var ground,ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_option ={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_option);
  //World.add(world.object);

  var ball_option ={
    restitution: 1.0
  }
  ball = Bodies.circle(200,200,20,ball_option)
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}