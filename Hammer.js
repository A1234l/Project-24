class Hammer {
    constructor(x,y,w,h,angle){
        var options = {
            'density': 2,
            'friction': 1.0,
            'restitution': 0.5
        };
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill('orange');
        rect(0,0,this.width, this.height);
        pop();
    }
}