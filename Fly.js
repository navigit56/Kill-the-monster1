class Fly{
    constructor(pointA,bodyB){
var options = {
    bodyB:bodyB,
    pointA:pointA,
    stiffness:1.2,
    length:250
}
       this.bodyB = bodyB;
       this.rope = constraint.create(options);
       World.add(world,this.rope)

    }
    display(){
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48, 22, 8);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
          }
    }
}