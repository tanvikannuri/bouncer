var fixedRect,movingRect;
var gameObject1,gameObject2;
var gameObject3,gameObject4;

function setup(){
createCanvas(1200,800);

fixedRect = createSprite(600,400,40,50);
movingRect = createSprite(300,400,50,40);

fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";

gameObject1 = createSprite(300,300,50,60);
gameObject2 = createSprite(800,300,60,50);

gameObject1.shapeColor = "blue";
gameObject2.shapeColor = "pink";

gameObject1.velocityX = 5;
gameObject2.velocityX = -5;

gameObject3 = createSprite(400,300,50,60);
gameObject4 = createSprite(500,300,60,50);

gameObject3.shapeColor = "yellow";
gameObject4.shapeColor = "orange";

gameObject1.velocityX = -5;
gameObject2.velocityX = 5;




}

function draw(){
background(0);

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if (isTouching(gameObject1,movingRect)) {
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
}
else {
   gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "green";    
}

bounceOff(gameObject1,gameObject2);
    
if (isTouching(gameObject3,movingRect)) {
    gameObject3.shapeColor = "orange";
    movingRect.shapeColor = "orange";
}
else {
   gameObject3.shapeColor = "yellow";
    movingRect.shapeColor = "orange";    
}

bounceOff(gameObject3,gameObject4);
    

drawSprites();
}

