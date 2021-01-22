const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundOrigin;
var dustbin1, dustbin2, dustbin3;
var paperTest;
var thatGoal;

function preload(){
}

function setup() {
  createCanvas(1350, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height, 1350, 50);

	dustbin1 = new Dustbin(985, 490, 20, 140);
	dustbin2 = new Dustbin(1115, 490, 20, 140);
	dustbin3 = new Dustbin(1050, 570, 150, 20);

	paperTest = new paper(200, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 100, 10);

  keyPressed();
 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperTest.display();

  drawSprites();

  
 
 
}

function keyPressed() {
	if (keyDown("UP_ARROW")) {
	Matter.Body.applyForce(paperTest.body, paperTest.body.position, {x:5, y:-4});
	}
}




