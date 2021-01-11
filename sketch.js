
var monkey , monkey_running
var banana ,bananaImage,rock,obstacleImage
var food
var FoodGroup, obstacleGroup
var score
var ground
var gameState = 1
var PLAY = 1
var END = 0 
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  console.log(ground.x)
  
  score = 0
 
  
  FoodGroup = createGroup( )
  obstacleGroup = createGroup()
  
  
  monkey = createSprite(80,315,20,20)
  
  if(gameState === 1){
  monkey.addAnimation("moving",monkey_running)
  }
  
  monkey.scale = 0.1
  
 
     

  
}


function draw() {
  background("skyblue");
  
   stroke("black")
  textSize(20)
  fill("black")
    text("Survival time: "+survivalTime,100,50)
  
  
  
  //console.log(monkey.y)
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground)
  if(keyDown("space")&& monkey.y >= 314.3){
    monkey.velocityY = -18
  
  } 
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
  }
  
   if(obstacleGroup.isTouching(monkey)){
    gameState = 0
     FoodGroup.setVelocityXEach(0)
     obstacleGroup.setVelocityXEach(0)
  }
  
  if(gameState === 1){
  banana()
    obstacles()
    
 
  survivalTime = Math.ceil(frameCount/frameRate())

  
  }
 
  
  
  drawSprites();

  
}

  
function obstacles(){
 if (frameCount % 100 === 0){
   var rock = createSprite(380,330,10,40);
   rock.addImage(obstaceImage)
   rock.scale = 0.1
   rock.velocityX = -3
   obstacleGroup.add(rock)
 }
}

function banana(){
  if (frameCount % 80 === 0){
  food = createSprite(380,20,20,20)
  food.addImage(bananaImage)
  food.scale = 0.1
    food.y = Math.round(random(120,200))
    food.velocityX = -4
    FoodGroup.add(food)
    
}

}







