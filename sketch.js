const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,paper;
var binImg,bin;


function preload(){
    binImg = loadImage("dustbin.png");
  
}
function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();

    bin = createSprite(964,500,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin (909,510,10,120);
    binPart2 = new Dustbin (965,580,130,10);
    binPart3 = new Dustbin (1020,510,10,120);
    launcher = new Launcher (paper.body,{x:200, y:100});
}

function draw(){
    background("white");
    Engine.update(engine);

   
    paper.display();
    
    ground.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcher.fly();
 
}