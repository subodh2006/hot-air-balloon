var balloon;
var database; 
var balloonimg; 
var backgroundimg;


function preload(){
  balloonimg = loadImage("balloon.png");
  backgroundimg = loadImage("backround.png");
}

function setup() {
  createCanvas(900,600);
  database = firebase.database();
  balloon = createSprite(100, 200, 50, 50);

balloon.addImage(balloonimg);
balloon.scale = 0.5;
}

function draw() {
  background(backgroundimg);



if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x -10;
}

if (keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}

if (keyDown(UP_ARROW)){

  balloon.y = balloon.y -10;
  balloon.scale = balloon.scale-0.01;
}

if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10;
}

//upadateHeight();
//showError();
//readHeight();

  drawSprites();
}

function upadateHeight(x,y){
database.ref('balloon/height').set({
  'x': height.x + x,
  'y': height.y + y
})
}

function readHeight(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}

function showError(){
console.log("Error in wrriting to the database");
}

