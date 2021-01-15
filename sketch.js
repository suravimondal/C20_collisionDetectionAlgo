var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  
  fixedRect= createSprite(200,200,180,130);
  fixedRect.shapeColor= "purple";

  movingRect= createSprite(400,200,100,80);
  movingRect.shapeColor= "pink";

  movingRect.debug= true;
  fixedRect.debug= true;
}

function draw() {
  background(0); 
  
  movingRect.x= mouseX;
  movingRect.y= mouseY;

  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
    movingRect.shapeColor= "yellow";
  }
  else{
    movingRect.shapeColor="pink";
  }
  drawSprites();
}