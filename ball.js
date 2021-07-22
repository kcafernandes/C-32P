class Ball{
    constructor(x, y, r){
        var options = {
            isStatic: true,
            friction: 1.0,
            density: 5.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("black");
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}