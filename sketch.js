
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1
var block2
var block3

var rec4
var rec5
var rec6

var ball1
var ball2
var ball3
var ball4
var ball5

var angle1 = 60
var angle2 = 60
var angle3 = 60

function preload() {
	
	

}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

    var options={
		isStatic: true
	}

	Engine.run(engine);


    block1 = Bodies.rectangle(600, height, 1200, 20, options)
	World.add(world,block1)
	block2 = Bodies.rectangle(100, 400, 150, 20, options)
	World.add(world,block2)
	block3 = Bodies.rectangle(400, 400, 150, 20, options)
	World.add(world,block3)

	block4 = Bodies.rectangle(250, 200, 150, 20, options)
	World.add(world,block4)
	block5 = Bodies.rectangle(250, 200, 150, 20, options)
	World.add(world,block5)
	block6 = Bodies.rectangle(250, 200, 150, 20, options)
	World.add(world,block6)

	var particle_options = {
	  restitution:0.4,
	  friction:0.02
	}

	ball1 = Bodies.circle(220,  10, 10, particle_options)
	World.add(world,ball1)
	
	ball2 = Bodies.circle(220,  10, 10, particle_options)
	World.add(world,ball2)

	ball3 = Bodies.circle(225,  10, 10, particle_options)
	World.add(world,ball3)

	ball4 = Bodies.circle(230,  10, 10, particle_options)
	World.add(world,ball4)

	ball5 = Bodies.circle(230,  10, 10, particle_options)
	World.add(world,ball5)



	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
  background("turquoise");

  Engine.update(engine);
  
 

  rect(block1.position.x,block1.position.y,1200,20)
  rect(block2.position.x,block2.position.y,150,20)
  rect(block3.position.x,block3.position.y,150,20)

  Matter.Body.rotate(block4,angle1)
  push();
  translate(block4.position.x,block4.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(block5,angle2)
  push();
  translate(block5.position.x,block5.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(block6,angle3)
  push();
  translate(block6.position.x,block6.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 +=0.4;

  ellipse(ball1.position.x,ball1.position.y,10)
  ellipse(ball2.position.x,ball2.position.y,10)
  ellipse(ball3.position.x,ball3.position.y,10)
  ellipse(ball4.position.x,ball4.position.y,10)
  ellipse(ball5.position.x,ball5.position.y,10)
 
}



