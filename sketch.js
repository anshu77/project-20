var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor="red";
  car.velocityX = speed;

  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="grey"
}


function draw() {
  background(255,255,255);  

  if(wall.x-car.x < (car.width/2 + wall.width/2)){
  car.velocityX=0
  var Deformation = [0.5*weight*speed*speed/22500]
  }

if(Deformation<100) {car.shapeColor(0, 255, 0)}

if(Deformation<180 && Deformation>100) {car.shapeColor(230, 230, 0)}

if(Deformation>180) {car.shapeColor(255, 0, 0)}

  drawSprites();
}