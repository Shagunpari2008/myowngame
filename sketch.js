var box1,box2,box3,box4,box5,box6,box7,box8,box9;


function setup(){
 createCanvas(900,300);

box1 = createSprite(10,10,40,40);

box2 = createSprite(100,150,20,200);
  
box3 = createSprite(200,150,20,200);
  
box4 = createSprite(300,150,20,200);
  
box5 = createSprite(400,150,20,200);
 
box6 = createSprite(500,150,20,200);

box7 = createSprite(600,150,20,200);

box8 = createSprite(700,150,20,200);

box9 = createSprite(800,150,20,200);
  
}

function draw(){
background("black");
 
//making box1 to move  
box1.y = World.mouseY;
box1.x = World.mouseX;  
 
//making box2  
if (box1.isTouching(box2)){
 box2.shapeColor="red";
} 
else {
    box1.shapeColor = "pink";
    box2.shapeColor = "silver";
  }
 
  
//making box3  
if (box1.isTouching(box3)){
 box3.shapeColor="orange";

} 
else {
    box1.shapeColor = "pink";
    box3.shapeColor = "silver";
  }
  
  
//making box4  
if (box1.isTouching(box4)){
 box4.shapeColor="yellow";

} 
else {
    box1.shapeColor = "pink";
    box4.shapeColor = "silver";
  }
  
  
 //making box5 
if (box1.isTouching(box5)){
 box5.shapeColor="green";

} 
else {
    box1.shapeColor = "pink";
    box5.shapeColor = "silver";
  }    
  
  
//making box6
if (box1.isTouching(box6)){
 box6.shapeColor="lightblue";

} 
else {
    box1.shapeColor = "pink";
    box6.shapeColor = "silver";
  }    
 
  
//making box7
if (box1.isTouching(box7)){
 box7.shapeColor="blue";

} 
else {
    box1.shapeColor = "pink";
    box7.shapeColor = "silver";
  }    
      
  
//making box8
if (box1.isTouching(box8)){
 box8.shapeColor="indigo";

} 
else {
    box1.shapeColor = "pink";
    box8.shapeColor = "silver";
  }      
  
  
//making box9
if (box1.isTouching(box9)){
 box9.shapeColor="purple";

} 
else {
    box1.shapeColor = "pink";
    box9.shapeColor = "silver";
  }

if(box1.isTouching(box2)){
 text ("RED",300,20);
   }
  
if(box1.isTouching(box3)){
 text ("ORANGE",300,20);
   }  
  
if(box1.isTouching(box4)){
 text ("YELLOW",300,20);
   }  
  
if(box1.isTouching(box5)){
 text ("GREEN",300,20);
   }    
 
if(box1.isTouching(box6)){
 text ("SKY BLUE",300,20);
   } 
  
if(box1.isTouching(box7)){
 text ("BLUE",300,20);
   }   
  
if(box1.isTouching(box8)){
 text ("INDIGO",300,20);
   }
  
if(box1.isTouching(box9)){
 text ("PURPLE",300,20);
   } 
drawSprites();  
}