class boy{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.thrower=Constraint.create(options)
		World.add(world,this.thrower)
	}

	attach(body){
		this.thrower.bodyA=body;
	}

	fly()
	{
		this.thrower.bodyA=null;
	}

	display()
	{
		if(this.thrower.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}