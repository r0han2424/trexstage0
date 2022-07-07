
var trex ,trex_running;
var ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}
//preload is used to load animation, Image and sound etc
function setup(){
  createCanvas(600,200)

  
  //create a trex sprite
  trex=createSprite(50,180,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
 
  ground=createSprite(300,180,600,10)
}
//setup runs only once
function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-5;
  }
  //gravity
  trex.velocityY=trex.velocityY+0.5;
  edges=createEdgeSprites();
  trex.collide(ground)
  drawSprites();
}
