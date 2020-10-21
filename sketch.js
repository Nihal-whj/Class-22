const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var obj1;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var obj1_options={
    restitution: 1
  }
obj1=Bodies.circle(100,200,50,obj1_options);
World.add(world,obj1)
console.log(obj1.position.x)
console.log(obj1.position.y)
ground=Bodies.rectangle(200,390,200,20);
World.add(world,ground)
}

function draw() {
  background(0,0,0);  
  ellipseMode(CENTER);
  ellipse(obj1.position.x,obj1.position.y,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
}