const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var maxObjects = 5;
var objects = [];
var objectsPos;
var i;
var score = 0;
var gameState = "play";

function setup() {
  createCanvas(800,750);

  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(400, height - 200, 30);
  ballbody = createSprite(ball.body.position.x, ball.body.position.x, 25, 25);

  if(frameCount % 80 === 0){
    for(var i = 0; i < maxObjects; i++){
          objects.push(new Objects(random(100, 300), 15, 150, 5));
        }
   }
}

function draw() {
  background("gray");  

  Engine.update(engine);

  if(gameState !== "end"){
  score = Math.round(frameCount);

  for(i = 0; i < maxObjects; i++){
    objects[i].display();
    objects[i].updateY();
  
    console.log(objects[i].body.speed);
    if(objects[i].body.speed <= 0.2){
      gameState = "end";
    }
  }
}

  Matter.Body.setPosition(ball.body, {x: mouseX, y: height - 200});
  //ball.body.position.x = mouseX;
  //ball.body.position.y = mouseY;

  ball.display();

  //console.log(score);

  drawSprites();

  textSize(20);
  text("Score: " + score, 100, 100);
}