class Ground {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, 500, 75, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    rectMode(CENTER);

    rect(pos.x, pos.y, 500, 75);
  }
}
