class Bob
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 1,
            'friction': 0,
            'density': 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
       
       this.body.image = loadImage("bob.png");
        //this.body.scale=0.01
       
      }
     

    display()
    {
        var pos=this.body.position;
       // var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
       // rotate(angle);
      // rectMode(CENTER);
     // rect( 0, 0, this.width, this.height);
      imageMode(CENTER);
     image(this.body.image, 0, 0, this.width, this.height); 
        pop();     
    }
}
