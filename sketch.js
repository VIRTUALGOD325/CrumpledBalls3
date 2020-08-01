
var ball, ballIMG;
var dustbinIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballIMG = loadImage("paper.png");
	dropGroundIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	ball=createSprite(width/2, 120, 10,10);
	ball.addImage(ballIMG);
	ball.scale = 0.6;


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropGround = createSprite(width/1.65, 570, 20,100);
	dropGround.addImage(dropGroundIMG);
	dropGround.scale = 0.6;


	World.add(world, ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	Engine.run(engine);

	launcher = new Launcher(ball.body{x:200, y:100});


	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(1);

  launcher.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		ball.velocityY = 3;
	}
}


