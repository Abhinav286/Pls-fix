var hero,virus,virus2,virus3,virus4;
var obs1, bg,virusImg;
var bgImg,villainImg;
var invisibleG;
var vaccine,vaccineImg;
var virus2Img,virus3Img,virus4Img ;
var gameState = PLAY;
var PLAY = 1;
var END = 0;

function preload() {

  heroImg = loadImage("./images/heroV2.jpg");
  bgImg = loadImage("./images/background2.jpg");
  vaccineImg = loadImage("./images/vaccineVial.jpg");
  virus2Img = loadImage("./images/virusV2.jpg");
  virus3Img = loadImage("./images/VirusV3.jpg");
  virus4Img = loadImage("./images/VirusV4.jpg");

}




function setup() {
 
  createCanvas(1440, 900);
  hero = createSprite(152, 500, 50, 50);
  hero.addImage(heroImg);
  hero.scale = 0.3;

  invisibleG = createSprite(700,645,1500,50);
  invisibleG.visible = false;

  vaccine = createSprite(1400,530,50,50);
  vaccine.addImage(vaccineImg);
  vaccine.scale = 0.4;

   hero.setCollider("rectangle",0,0,1000,hero.height);
   hero.debug = true;

}
  
  



function spawnViruses() {

  if (frameCount % 140=== 0) {
       
    virus = createSprite(1100,575,50,50);
    virus.scale = 0.2; 
    virus.velocityX =  -5
        

  
  
  var rand = Math.round(random(1,3))
  switch (rand){

    case 1: virus.addImage(virus2Img);
      break;
    case 2: virus.addImage(virus3Img);
      break;
    case 3: virus.addImage(virus4Img);
      break;
    default: break;
  
  }
  }


}


function draw() {
  background(bgImg);
  

 if (gameState == "PLAY") {
    
  spawnViruses();

  if (keyIsDown(32) && hero.y <= 600 ) {

    hero.velocityY = -15;
    } 
    hero.velocityY = hero.velocityY + 0.9
    
    if (invisibleG.x < 0){
      invisibleG.x = ground.width/2;
    }
  } 
 
  else (gameState == "END" ){

  textSize(120)
  text("You Win",500,500)
  } 
  
  hero.collide(invisibleG);
  
  drawSprites();
}


  
