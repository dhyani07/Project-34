//Create variables here

var dog, happyDog, database, foodS, foodStock, dogImg, dogImg1 ;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,300,150,150);
  dog.addImage("dog",dogImg);

foodstock=database.ref('Food');
foodstock.on("value", readstock);
  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown (UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImg1);
  }


drawSprites();

fill("green");
textSize(15);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);



  //add styles here

}

//Function to read values from DB
function readstock(data) {
  foodS=data.val();
  }
  //Function to write values in DB
  function writeStock(x){
  database.ref('/').update({
  Food:x
  })
}

