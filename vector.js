function Vector2(x, y)
{
	this.x = x;
	this.y = y;
	
	this.add = function(v)
	{
		return new Vector2(this.x + v.x, this.y + v.y);
	}
	
	this.sub = function(v)
	{
		return new Vector2(this.x - v.x, this.y - v.y);
	}
	
	this.mul = function(s)
	{
		return new Vector2(this.x * s, this.y * s);
	}
	
	this.div = function(s)
	{
		return new Vector2(this.x / s, this.y / s);
	}
	
	this.length = function()
	{
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}
	
	this.normalise = function()
	{
		var len = this.length();
		return new Vector2(this.x / len, this.y / len);
	}
}

function Polar(rotation, length)
{
	return new Vector2(Math.cos(rotation) * length, Math.sin(rotation) * length);
}