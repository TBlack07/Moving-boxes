var box1,box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,100,10,10,3)
  box2 = new Box(100,200,20,10,4)
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box1.move();
  box2.move();

}

