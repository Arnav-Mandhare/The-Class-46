var b1,b2,b3,b4,b5;
var t1pos = [];
var gameState = "start";
var turn = 3;




function preload(){
t1m = loadImage("abc.png");
t2 = loadImage("td.png");
t3 = loadImage("tr.png");
t4 = loadImage("tl.png");
cloneim = loadImage("tclone.png");
c1im = loadImage("acb.png");
}

function setup(){

 canvas = createCanvas(displayWidth,displayHeight-150);
 
 t1 = createSprite(displayWidth/2,400,10,10);
 t1.addImage("up1",t1m);
 t1.addImage("dw1",t2);
 t1.addImage("r1",t3);
 t1.addImage("f1",t4);
 t1.scale = 0.2;

  cloneGroup = new Group();

 b1 = createButton('UP');
 b1.position(665,500);
 b2 = createButton('DOWN');
 b2.position(655,570);
 b3 = createButton('LEFT');
 b3.position(615,535);
 b4 = createButton('RIGHT');
 b4.position(700,535);
 b5 = createButton('O');
 b5.position(670,535);

 c1 = createSprite(200,200,50,50);
 c1.x = random(20,1290);
 c1.y = random(30,450);
 c1.addImage(c1im);
 c1.scale = 0.2
 
 }

function draw(){
  background(0);

  t1pos.push([t1.x,t1.y]);
  

  if(t1.isTouching(c1)){
    gameState = "clone";
    c1.x = random(20,1290);
    c1.y = random(30,450);
    clone = createSprite(displayWidth/2,400,10,10);
    clone.x = random(20,1290);
    clone.y = random(30,450);
    cloneGroup.add(clone);
    }
 
    

    if(cloneGroup.isTouching(t1)){
      gameState = "end";
    }

    if(gameState == "end"){
      cloneGroup.destroyEach();
      console.log("end");
    }

   
  //up
  b1.mousePressed(()=>{
    t1.y = t1.y - 75;
    t1.changeImage("up1",t1m);
  });

  //down
  b2.mousePressed(()=>{
    t1.y = t1.y + 75;
    t1.changeImage("dw1",t2);
  });

  //left
  b3.mousePressed(()=>{
    t1.x = t1.x - 75;
    t1.changeImage("f1",t4);
  });

  //right
  b4.mousePressed(()=>{
    t1.x = t1.x + 75;
    t1.changeImage("r1",t3);
  });

  b5.mousePressed(()=>{
    turn = turn - 1;
    console.log(cloneGroup);
    for(i=0;i<6;i++){
      if(cloneGroup.get(i)){
        console.log("test2");
       cloneGroup.get(i).destroy();
      }
    }
  });
  


  drawSprites();
}
