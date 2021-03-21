class Rubber{
    constructor(x,y,r,angle){
        var options = {
            restitution:0.3,
            friction:5,
            density:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill('blue');
        ellipse(0,0,this.radius);
        pop();
    }
}