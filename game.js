function Game(targetFPS, canvasID, canvasWidth, canvasHeight, updateFunc, drawFunc, clearColour)
{
	var canvas = document.getElementById(canvasID);
	
	var context = canvas.getContext("2d");
	this.context = context;
	
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	setInterval(tick, 1000 / targetFPS);
	
	function tick()
	{
		update();
		draw();
	}
	
	function update()
	{
		updateFunc();
	}
	
	function draw()
	{
		context.fillStyle = clearColour;
		context.fillRect(0, 0, canvasWidth, canvasHeight);
		
		drawFunc();
	}
}

function clamp(x, min, max)
{
	return x < min ? min : x > max ? max : x;
}