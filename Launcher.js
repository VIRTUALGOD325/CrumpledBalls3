class Launcher{
    constructor(bodyA, pointB){
       var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        lenght: 10
       }
    }

    this.pointB = pointB
    this.Sling = Constraint.create(options);

    World.add(world, this.Sling);
}

display(){
    var pointA = this.Sling.bodyA.position;
    var pointB = this.pointB;

    StrokeWeight(4);
    line(pointA.x, point.A.y, point.B.x, point.B.y);
}