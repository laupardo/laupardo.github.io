

function drawCircle{
	var c = document.getElementById("projectCanvas");
	var context = c.getContext("2d");

	let posx = 100;
	let posy = 100;
	context.fillStyle = "#FF0000";
	context.beginPath();
	context.arc(posx, posy, 100, 0, 2 * Math.PI);
	context.fill();
}