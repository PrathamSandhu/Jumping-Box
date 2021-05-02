var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var box;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite( 100, 580, 100, 30);
    ground1.shapeColor = "blue";
    ground2 = createSprite( 300, 580, 100, 30);
    ground2.shapeColor = "red";
    ground3 = createSprite( 500, 580, 100, 30);
    ground3.shapeColor = "yellow";
    ground4 = createSprite( 700, 580, 100, 30);
    ground4.shapeColor = "orange"

    //create box sprite and give velocity
    box = createSprite(random(20, 750), 70, 50, 50);
    box.velocityX = random(-5, 10);
    box.velocityY = random(-10, 5);
}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box

    if(box.isTouching(ground1)){
        box.shapeColor = "blue";
        box.bounceOff(ground1);
        music.play();
    }

    if(box.isTouching(ground2)){
        box.shapeColor = "red"
        box.bounceOff(ground2);
        music.play();
    }

    if(box.isTouching(ground3)){
        box.shapeColor = "yellow"
        music.stop();
        box.velocityX = 0;
    }

    if(box.isTouching(ground4)){
        box.shapeColor = "orange"
        box.bounceOff(ground4);
        music.play();
    }


    drawSprites();
}
