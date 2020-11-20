class Roof
{
    constructor(x,y,width,height)
    {
        var options = {
            'restituition' : 0.8,
            'friction' : 1.0,
            'density' : 0
            }
        this.body = Bodies.rectangle(x,y,width.height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("sprites/roof/roofImage.jpg");
    }
    display()
    {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    pop();
    }
}