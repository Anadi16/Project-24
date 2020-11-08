
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var dustbin,dustbin2,dustbin3;
var ground;


function setup() {
		createCanvas(800, 700);

		var options = {
			isStatic : true,
		}

		ground = Bodies.rectangle(400,600,800,20,options);
		ground.debug = true;

		


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		ball = new Paper(100,200,20);

		dustbin = new Dustbin(500,300,25,100);

		dustbin2 = new Dustbin(670,300,25,100)

		dustbin3 = new Dustbin(590,380,150,20)

		var options = {
			isStatic : true,
		}


		fill("green");
		ground = Bodies.rectangle(400,600,800,20,options);
		
		World.add(world,ground);

		Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 rect(ground.position.x,ground.position.y,800,20);


  ball.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
 
  
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-10});
	}
}

