class Paper
{
constructor(x,y,r)
{
var options = {
    isStatic: false,
    // restitution:0.3,
    friction:5,
    density:1.2
}

        this.body   = Bodies.circle(x,y,r,options) 
    
		this.r= r;
        this.image =loadImage("paper.png")
		World.add(world,this.body);

}
display()
{
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.r)
    push()
    imageMode(CENTER)
    image(this.image)
    pop()
}
}