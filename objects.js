class Objects {
    constructor(x,y,width,height) {
      var options = {
        isStatic: false,
        friction: 1.0,
        density: 0.00001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:10});
        }
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
