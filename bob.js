class Bob  {
  constructor(x,y){
    var options = {
      'isStatic' : false,
      'restitution' : 0.8,
      'friction' : 0.3,
      'density' : 0.5
    }
    this.body = Bodies.circle(x,y,30,options);
    

    World.add(world,this.body);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos = this.body.position;
    push ();
    translate(pos.x,pos.y);
    fill ("blue");
    rectMode(CENTER);
    ellipse(0,0,60);
    pop ();
  }
}