var hammer;
var stone, ball, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350,100,50);
	stone = new Stone(150,650,90,90);
	ball = new Rubber(700,600,50);
	ground = new Ground(400,695,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightBlue');
  Engine.update(engine);

  drawSprites();
 
  hammer.display();
  stone.display();
  ball.display();
  ground.display();
}



