class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
      }
        this.pointB = pointB
        this.bodyA = bodyA
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }

    fly(){
        this.shooter.bodyA = null;
    }

    display(){
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position;
            var pointB = this.pointB;
            
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           push();
         
           
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
          
        pop();
        }
    }
    
}