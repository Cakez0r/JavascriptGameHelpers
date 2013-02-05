function BoundingSphere()
{
	this.type = "sphere";
	this.pos = new Vector2(0, 0);
	this.radius = 1;
	
	this.intersects = function(bounds)
	{
		if (bounds.type == "sphere")
		{
			return TestSphereToSphere(this, bounds);
		}
		else if (bounds.type == "box")
		{
			return TestBoxToSphere(bounds, this);
		}
		
		return false;
	}
}

function BoundingBox()
{
	this.type = "box";
	this.pos = new Vector2(0, 0);
	this.extents = new Vector2(1, 1);
	
	this.intersects = function(bounds)
	{
		if (bounds.type == "box")
		{
			return TestBoxToBox(this, bounds);
		}
		else (bounds.type == "sphere")
		{
			return TestBoxToSphere(this, bounds);
		}
		
		return false;
	}
}

//https://github.com/mono/MonoGame/blob/develop3d/MonoGame.Framework/BoundingBox.cs
function TestBoxToSphere(box, sphere)
{
	if (sphere.pos.x - box.pos.x > sphere.radius &&
		sphere.pos.y - box.pos.y > sphere.radius &&
		box.pos.x - sphere.pos.x > sphere.radius &&
		box.pos.y - sphere.pos.y > sphere.radius)
	{
		console.log('A');
		return true;
	}
	
	var dmin = 0;
	var distance = 0;
	if (sphere.pos.x - box.pos.x <= sphere.radius)
	{
		distance = sphere.pos.x - box.pos.x;
		dmin += distance * distance;
	}
	else if ((box.pos.x + box.extents.x) - sphere.pos.x <= sphere.radius)
	{
		distance = sphere.pos.x - (box.pos.x + box.extents.x);
		dmin += distance * distance;
	}
	
	if (sphere.pos.y - box.pos.y <= sphere.radius)
	{
		distance = sphere.pos.y - box.pos.y;
		dmin += distance * distance;
	}
	else if ((box.pos.y + box.extents.y) - sphere.pos.y <= sphere.radius)
	{
		distance = sphere.pos.y - (box.pos.y + box.extents.y);
		dmin += distance * distance;
	}
	
	if (dmin <= sphere.radius * sphere.radius)
	{
		console.log('B');
		return true;
	}
	
	return false;
}

function TestSphereToSphere(a, b)
{
	return a.pos.sub(b.pos).length() <= a.radius + b.radius;
}

function TestBoxToBox(a, b)
{
	return !(a.pos.x > b.pos.x + b.extents.x || a.pos.x + a.extents.x < b.pos.x
		|| a.pos.y > b.pos.y + b.extents.y || a.pos.y + a.extents.y < b.pos.y);
}