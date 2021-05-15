class Iron {
    constructor(x, y, w, h) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('grey')
      fill('white')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  