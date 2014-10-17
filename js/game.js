function init(){
	var imageResources = ["img/sara-simple.png"]

	imageLoader(imageResources, gameLoop)
};

// Need to set up a proper game loop

function gameLoop(){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	var count = 0;

	while(true){
		/* processInput();
		   update();
		   render(); */

		window.addEventListener("keypress", keyboardHandler);

		if(count == 100){
			break;
		}
	}

	/* var sara = sprite({
		context: context,
		image: img,
		width: 14,
		height: 18
		}); */

	//
	//console.log(isMoving);
	//sara.draw();
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

// Should make this a super class

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

// ImageLoader should load all needed image files.
function imageLoader(src, callback){
	// Attempt to batch load images -- come back to this
	/*var uploadedImages;

	for(img = 0; img < imageUploader.length; img++){
		var sheet = new Image();
		sheet.src = src[img];
	} */

	var img = new Image();
	img.src = src;

	img.onload = function(){ 
		callback(img);
	}

};