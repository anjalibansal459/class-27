class Chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:5
        
        }
        this.chain=constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
       // line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y)
  var pointA=this.chain.bodyA.position
  var pointB=this.chain.bodyB.position
  strokeWeight(5)
  stroke("blue")
       line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}