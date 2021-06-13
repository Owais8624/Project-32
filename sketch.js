const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6,sunrise7,sunrise8,sunrise9,sunrise10,sunrise11,sunrise12;

var sunrise1.png,sunrise2.png,sunrise3.png,sunrise4.png,sunrise5.png,sunrise6.png,sunrise7.png,sunrise8.png,sunrise9.png,sunrise10.png,sunrise11.png,sunrise12.png;
var bg ;

var x = null;
var y = null;

var width = null; 
var height = null; 


function preload() {
    // create getBackgroundImg( ) here
    sunrise1 = new sunrise1(width,height,x,y);
    sunrise2 = new sunrise1(width,height,x,y);
    sunrise3 = new sunrise3(width,height,x,y);
    sunrise4 = new sunrise4(width,height,x,y);
    sunrise5 = new sunrise5(width,height,x,y);
    sunrise6 = new sunrise6(width,height,x,y);
    sunrise7 = new sunrise7(width,height,x,y);
    sunrise8 = new sunrise8(width,height,x,y);
    sunrise9 = new sunrise9(width,height,x,y);
    sunrise10 = new sunrise10(width,height,x,y);
    sunrise11 = new sunrise11(width,height,x,y);
    sunrise12 = new sunrise12(width,height,x,y);

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   
}

function draw(){
background("bg");
    // add condition to check if any background image is there to add
    Engine.update(engine);

    // write code to display time in correct format here
    sunrise1.display();
    sunrise2.display();
    sunrise3.display();
    sunrise4.display();
    sunrise5.display();
    sunrise6.display();
    sunrise7.display();
    sunrise8.display();
    sunrise9.display();
    sunrise10.display();
    sunrise11.display();
    sunrise12.display();
}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
