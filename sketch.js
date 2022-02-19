var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var gameState = 1;
var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(800, 750);
  
  //crie o fundo
  scene = createSprite(0,0,800,750);
  scene.addImage(backgroundImage);
  scene.scale = 3.9
  
  // criando arco para a flecha
  bow = createSprite(780,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
 redB=  createGroup();
 greenB= createGroup();
 blueB= createGroup();
 pinkB= createGroup();
 arrowG=  createGroup();

  
}

function draw() {
 background(0);
 
 if (scene.x < 20){
  scene.x = scene.width/2;
 }
 
 //Adicione a condição para gameState = PLAY
  if(gameState == 1){
    // soltar arco quando a tecla espaço for pressionada
    if (keyDown("space")) {
     createArrow();
    }
    //arco em movimento
    bow.y = World.mouseY
    // solo em movimento
     scene.velocityX = -3 
     if(score == 30){
       gameState = 2;
     }   
  }
 
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

  if (arrowG.isTouching(redB)) {
    redB.destroyEach();
    arrowG.destroyEach();
    score = score + 4;
  }
  if (arrowG.isTouching(blueB)) {
    blueB.destroyEach();
    arrowG.destroyEach();
    score = score +2;
  }
  if (arrowG.isTouching(greenB)) {
    greenB.destroyEach();
    arrowG.destroyEach();
    score = score + 3;
  }
  if (arrowG.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowG.destroyEach();
    score = score + 1;
  }





 
  
  drawSprites();
 //Adicione a condição de texto para exibir a pontuação.
 if(gameState == 2){
  text ("YOU WIN", 440, 200);
 scene.velocityX = 0;
 red.velocityX = 0;
 blue.velocityX = 0;
 green.velocityX = 0;
 pink.velocityX = 0;
}
 text ("score: " + score, 300, 20);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 780)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 220;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 780)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 220;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 780)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 220;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 780)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 220;
  pink.scale = 1
  pinkB.add(pink);
}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 760;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 190;
  arrow.scale = 0.3;
  arrowG.add(arrow);

}
