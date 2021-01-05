
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,jungle,jungleimage;
var ground;
var score=0;
var bananagroup
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 jungleimage=loadImage("jungle.jpg");
}



function setup() {
  createCanvas(400, 400);
 
  jungle=createSprite(200,200);
  jungle.addImage("jungle",jungleimage);
  jungle.velocityX= -4;
  
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);

  ground.velocityX=-4;
  
  bananagroup = new Group();
  
 score=0;

  
}


function draw() {
background(180);
    drawSprites();
   text(score, 350,50);
  textSize=20;

  
  
  ground.visible=false;
  
  spawnbanana();
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
  if (keyDown("space")){
    monkey.velocityY=-12;
   
      }
  
   monkey.velocityY = monkey.velocityY + 0.8;
   if(keyDown("left_arrow")){
      monkey.velocityX=-4;
    }
  
   if(keyDown("right_arrow")){
      monkey.velocityX=4;
    }
     
 
  monkey.collide(ground);
  
   if(bananagroup.isTouching(monkey)){
    
    score=score+2;
     }
}
function spawnbanana(){
    if(frameCount%80===0){
      banana=createSprite(200,50);
       banana.addImage(bananaImage);
    banana.scale=0.1;
      banana.velocityY=4;
      banana.x = Math.round(random(10,400));
      
      bananagroup.add(banana);
       }
}




