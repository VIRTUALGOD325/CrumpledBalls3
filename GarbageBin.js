class GarbageBin {
    constructor(x,y,height,width){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
        }
    

    this.body = Bodies.rectangle(x,y,height,width,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rect(0, 0, this.width, this.height)
        pop();
    }
};