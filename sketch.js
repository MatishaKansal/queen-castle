const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26;

  function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(450,350,200,100);
    box2 = new Box(460,370,20,40);
    box3 = new Box(440,370,20,40);
    box4 = new Box(450, 250, 90, 100);
    box5 = new Box(325, 325, 50, 150);
    box6 = new Box(575, 325, 50, 150);
    box7 = new Box(360, 290, 20, 20);
    box8 = new Box(405, 290, 20, 20);
    box9 = new Box(450, 290, 20, 20);
    box10 = new Box(495, 290, 20, 20);
    box11 = new Box(540, 290, 20, 20);
    box12 = new Box(310, 240, 20, 20);
    box13 = new Box(340, 240, 20, 20);
    box14 = new Box(560, 240, 20, 20);
    box15 = new Box(590, 240, 20, 20);
    box16 = new Box(415, 190, 20, 20);
    box17 = new Box(450, 190, 20, 20);
    box18 = new Box(485, 190, 20, 20);
    box19 = new Box(450, 155, 5, 50);
    box20 = new Box(478, 140, 50, 20);
    box21 = new Box(275, 350, 50, 350);
    box22 = new Box(625, 350, 50, 350);
    box23 = new Box(260, 165, 20, 20);
    box24 = new Box(290, 165, 20, 20);
    box25 = new Box(610, 165, 20, 20);
    box26 = new Box(640, 165, 20, 20);
    ground = new Ground(600,height,1200,20);
 }
function draw(){
  background("blue");
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  ground.display();
}