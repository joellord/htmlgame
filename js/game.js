function init(){
	imageLoader("img/sara-simple.png", gameLoop)
};

function gameLoop(){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	var sara = sprite({
		context: context,
		image: img,
		width: 14,
		height: 18
		});

	window.addEventListener("keypress", keyboardHandler, false);
	sara.draw();
};

function keyboardHandler(e){
	if(e.keyCode == 119){
		console.log("Up");
	} else if(e.keyCode == 97){
		console.log("Left");
	}else if(e.keyCode == 115){
		console.log("Down");
	}else if(e.keyCode == 100){
		console.log("Right");
	}
}

function sprite(params){
	var sprite = {};
	sprite.context = params.context;
	sprite.image = params.image;
	sprite.width = params.width;
	sprite.height = params.height;

	sprite.draw = function(){
		sprite.context.drawImage(
			sprite.image,
			0,
			0,
			sprite.width,
			sprite.height,
			0,
			0,
			sprite.width,
			sprite.height);
	};

	return sprite;
}

function imageLoader(src, callback){
	img = new Image();
	img.src = src;
	img.onload = function(){
		callback(img);
	}
};