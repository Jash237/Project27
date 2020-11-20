
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var rope1,rope2,rope3,rope4,rope5;
var roof;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    roof = new Roof(400,780,350,40);

	rope1 = new Rope(100,550,10,300);

	rope2 = new Rope(200,550,10,300);
	
	rope3 = new Rope(300,550,10,300);

	rope4 = new Rope(400,550,10,300);

	rope5 = new Rope(500,550,10,300);

	bob1 = new Bob(100,375,50,50);

	bob2 = new Bob(200,375,50,50);
	
	bob3 = new Bob(300,375,50,50);

	bob4 = new Bob(400,375,50,50);

	bob5 = new Bob(500,375,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



