
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, stone,rubber;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(20,100);
	stone=new Stone(mouseX,mouseY,50,50);
	rubber=new Rubber(600,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



