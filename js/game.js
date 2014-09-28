function init(){
	imageLoader("img/sara-simple.png", gameLoop)
};

function imageLoader(src, callback){
	img = new Image();
	img.src = src;
	img.onload = function(){
		callback(img);
	}
};

function gameLoop(){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	context.drawImage(img, 150, 150);
};