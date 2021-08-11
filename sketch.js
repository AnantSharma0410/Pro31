const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turns=5;
var particles;
var ball1,ball2,ball3,ball4,ball5;
var r1;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(width/2,height,width,20);



for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375));
 }
}

function draw() {
  background("black");
  textSize(20)
 ground.display();

 
  Engine.update(engine);

  var c= color(random(0,255),random(0,255),random(0,255));

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/4-100,width/2+100),10,10));
    score++
  }
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

  fill("white")
  strokeWeight(20);
  text("Score: "+score,50,100);

  text("500",20,500);
  text("500",100,500);
  text("500",180,500);
  text("500",260,500);

  text("200",340,500);
  text("200",420,500);
  text("200",500,500);

  text("100",580,500);
  text("100",660,500);
  text("100",740,500);

  drawSprites();
}


