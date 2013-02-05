function Sprite(img)
{
	this.img = img;
	this.pos = new Vector2(0, 0);
	this.scale = new Vector2(1, 1);
	this.rot = 0;
	this.size = new Vector2(img.width, img.height);
	this.pivot = this.size.mul(0.5);
	
	
	this.draw = function(canvasContext)
	{
		canvasContext.save();
		canvasContext.translate(this.pos.x, this.pos.y);
		canvasContext.rotate(this.rot);
		canvasContext.scale(this.scale.x, this.scale.y);
		canvasContext.drawImage(this.img, -this.pivot.x, -this.pivot.y);
		canvasContext.restore();
	}
}

