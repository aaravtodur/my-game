var ninja;
var pl1,pl2;
var invisibleGround,invisibleGround2;
var ninja_running_ud;
var PLAY = 1;
var END = 0;
 var gameState = PLAY;
 var score=0;
 var obstaclesGroup,obstaclesGroup2;

function preload()
{
    ninja_running = loadAnimation("1.png","2.png","3.png","4.png");
   // ninja_running_ud= loadAnimation("1-ud.png","2-ud.png","3-ud.png","4-ud.png");
    ninja_running_ud = loadAnimation("1-ud.png","2-ud.png","3-ud.png","4-ud.png");
    obstacle_img= loadAnimation("1-ud.png","2-ud.png","3-ud.png","4-ud.png");
    ninjastar_img= loadAnimation("ns1.png","ns2.png","ns3.png","ns4.png");
}

function setup()
{
    createCanvas(windowWidth,windowHeight-100)

    ninja = createSprite(200,525);
    ninja.addAnimation("ninja_running", ninja_running)
    ninja.addAnimation("ninja_running_ud", ninja_running_ud)
    ninja.setCollider('circle',0,0,85)
  ninja.scale = 0.9
  //ninja.debug=true

  pl1 = createSprite(windowWidth/2,windowHeight-150,windowWidth*1000,100)
  pl1.shapeColor = "black";
pl1.velocityX = -3; 

  pl2 = createSprite(windowWidth/2,windowHeight-710,windowWidth*1000,100)
  pl2.shapeColor = "black";
  pl2.velocityX = -3; 

  invisibleGround = createSprite(width/2,height-85,width,20);  
  invisibleGround.shapeColor = "#f4cbaa";
  invisibleGround.visible=false;

  invisibleGround2 = createSprite(width/2,77 ,width,20);  
  invisibleGround2.shapeColor = "#FF0000";
  invisibleGround2.visible=false;

  obstaclesGroup_2 = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
}

function draw()
{
background("blue");

textSize(20);
  fill("white")
  text("Score: "+ score,30,width/2);

  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);

if( keyDown("UP_ARROW")) {
   // jumpSound.play( )
ninja.velocityY=ninja.velocityY-3
 //    touches = [];
  }

  if( keyDown("DOWN_ARROW")) {
    // jumpSound.play( )
 ninja.velocityY=ninja.velocityY+3
  //    touches = [];
   }

   if (pl1.x < 0){
   pl1.x = pl1.width/2;
  }
  
   
    spawnObstacles();
    spawnObstacles_2();
  
    if (ninja.y < windowHeight / 2) {
        ninja.changeAnimation("ninja_running_ud");
    }

    if (ninja.y > windowHeight / 2) {
      ninja.changeAnimation("ninja_running");
  }

ninja.collide(invisibleGround);
ninja.collide(invisibleGround2);

textSize(20);
  fill("white")
  text("Score: "+ score,30,50);

if(obstaclesGroup.isTouching(ninja) ){
  //collidedSound.play()
  gameState = END;

}
 else if (gameState === END) {

  text("game over"+ score,30,50);
  // pl1.velocityX = 0;
  //pl2.velocityX = 0;
  //ninja.velocityY = 10;

  //obstaclesGroup.setVelocityXEach(0);
  //obstaclesGroup_2.setVelocityXEach(0);

  //obstaclesGroup.setLifetimeEach(-1);

 
  textSize(20);
  fill("white")
  text("game over"+ score,30,50);
} 
}
drawSprites();
}

function spawnObstacles() {
    //write code here to spawn the obstacles
    if (frameCount % Math.round(random(140,180)) === 0) {
      var obstacles = createSprite(600,535,50,60);
    obstacles.y = Math.round(random(100,220));
      obstacles.addAnimation("ninjastar_img",ninjastar_img);
      obstacles.scale = 0.1;
      obstacles.velocityX = -3;
      
       //assign lifetime to the variable
      obstacles.lifetime = 300;
      
      obstaclesGroup.add(obstacles);
    }
  }
    function spawnObstacles_2() {
      //write code here to spawn the obstacles
      if (frameCount % Math.round(random(140,180)) === 0) {
        var obstacles_2 = createSprite(600,100,50,60);
      obstacles_2.y = Math.round(random(100,220));
        obstacles_2.addAnimation("ninjastar_img",ninjastar_img);
        obstacles_2.scale = 0.1;
        obstacles_2.velocityX = -3;
        
         //assign lifetime to the variable
        obstacles_2.lifetime = 300;
        
        //adjust the depth
        //cloud.depth = trex.depth;
        //trex.depth = trex.depth+1;
        
        //add each cloud to the group
        obstaclesGroup_2.add(obstacles_2);
      }
    }
  