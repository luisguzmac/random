var aliensclaseelite,aliensdeexploracion,reyalien,reayaliendisparando,reyalientocino,rateros,guardiarobot,guardiarobotrip,aliensclaseelitecaminando;
var peppa, humano;

function preload(){
  aliensclaseelite=loadImage("alien.02.gif");
  aliensdeexploracion=loadImage("alien.gif");
  reyalien=loadImage("rey alien passivo.gif");
  reayaliendisparando=loadImage("rey alien.gif");
  reyalientocino=loadImage("rey alien muerte.gif");
  rateros=loadImage("soldado aliado de los aliens.gif");
  guardiarobot=loadImage("guardia del alien.3.gif");
  guardiarobotrip=loadImage("guardia del alien.3.derrotado.webp");
  aliensclaseelitecaminando=loadImage("alien.02.caminando.gif");
  peppa=loadImage("soldado.gif");
}

function setup() {
  createCanvas(1200, 400);

  humano = createSprite(50,310,50,50)
  humano.addImage(peppa);
  humano.scale = 0.2;
  
}

function draw() {
  background("purple");
  
  aliensclaselite();
  aliensdeexploracionXD();
  guardiarobotloco();
  rateros3000();

  drawSprites();
}

function aliensclaselite(){
  if (frameCount % 200 === 0) {
    var ace = createSprite(1200,300,50,50);
    ace.y = Math.round(random(90,350));
    ace.addImage(aliensclaseelite);
    ace.scale = 0.4;
    ace.velocityX = -3;
    
    ace.lifetime = 410;
    
  }
}

function aliensdeexploracionXD(){
  if (frameCount % 100 === 0) {
    var pepitoelmago = createSprite(1200,300,50,50);
    pepitoelmago.y = Math.round(random(20,150));
    pepitoelmago.addImage(aliensdeexploracion);
    pepitoelmago.scale = 0.25;
    pepitoelmago.velocityX = -3;
    
    pepitoelmago.lifetime = 410;}
  }


  function guardiarobotloco(){
    if (frameCount % 100 === 0) {
      var pippa = createSprite(1200,300,50,50);
      pippa.y = Math.round(random(60,280));
      pippa.addImage(guardiarobot);
      pippa.scale = 0.25;
      pippa.velocityX = -3;
      
      pippa.lifetime = 410;}
    }


    function rateros3000(){
      if (frameCount % 100 === 0) {
        var quetiimporta = createSprite(1200,300,50,50);
        quetiimporta.y = Math.round(random(100,300));
        quetiimporta.addImage(rateros);
        quetiimporta.scale = 0.25;
        quetiimporta.velocityX = -3;
        
        quetiimporta.lifetime = 410;}
      }
























































































