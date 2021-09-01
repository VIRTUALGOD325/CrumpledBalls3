class Launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.lancher= Constraint.create(options);
        World.add(world, this.lancher);
    }
    fly(){

        this.lancher.bodyA=null;
    }
      display(){
          if(this.lancher.bodyA){
            var pointA = this.lancher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);}
        
    }
   
}



