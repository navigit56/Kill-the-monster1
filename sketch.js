
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero;
var fly;
var engine, world;
var cityscape;





function preload(){
cityscape = loadImage("City.jpg");
superimage= loadImage("SuperMan.png");
}

function setup(){
  var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;
    
    this.hero = Bodies.rectangle(1060,187,50,50,{ density:1,frictionAir:1});
    World.add(world,this.hero);

    fly= new Fly(hero.body,{x:1000,y:187})

}

function draw(){
  background(cityscape); 
  fly.display();
  
  var pos = hero.position;
  imageMode(CENTER)
  image(superimage,pos.x,pos.y,250,250);

  drawSprites();

console.log(mouseX,mouseY);

}