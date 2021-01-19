class Bob {
    constructor(x,y,r){

        var opt = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.x=x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill("white");
        ellipse(0,0,this.r, this.r);
        pop();

    }
}