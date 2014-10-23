function init(){
	imageLoader("img/sara-simple.png", gameLoop)
};


function gameLoop(img){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var lastUpdate = new Date().getTime();

	var sara = sprite({
			context: context,
			image: img,
			width: 14,
			height: 18,
			positionX: 150,
			positionY: 150
	});;

	var keyPresses = [];

	function processInput(lastUpdated){
		window.addEventListener("keypress", keyboardHandler);
	}

	function keyboardHandler(e){
		// The 'W' Key
		if(e.keyCode || e.which == 119){
			keyPresses.push("Up");
		} 
		// The 'A' Key
		else if(e.keyCode || e.which == 97){
			keyPresses.push("Left");
			console.log("Left");
		}
		// The 'S' Key
		else if(e.keyCode || e.which == 115){
			keyPresses.push("Down");
			console.log("Down");
		}
		// The 'D' Key
		else if(e.keyCode || e.which == 100){
			keyPresses.push("Right");
			console.log("Right");
		}
	}

	function update(lastUpdated){
		sara.update();
	}

	function render(){
		context.fillStyle = "#000000";
		context.fillRect(0, 0, 500, 500);

		sara.draw();

		// context.fillStyle = 'white';
		// context.font = "30px sans";
		// context.fillText("Hello World", textX, textY);
	}

	function sprite(params){
		var sprite = {};
		sprite.context = params.context;
		sprite.image = params.image;
		sprite.width = params.width;
		sprite.height = params.height;
		sprite.positionX = params.positionX;
		sprite.positionY = params.positionY;

		sprite.draw = function(){
			sprite.context.drawImage(
				sprite.image,
				0,
				0,
				sprite.width,
				sprite.height,
				sprite.positionX,
				sprite.positionY,
				sprite.width,
				sprite.height);
		};

		sprite.update = function(){
			switch (keyPresses.pop()){
				case "Up":
					sprite.positionY -= 10;
					break;
				case "Down":
					sprite.positionY += 10;
					break;
				case "Left":
					sprite.positionX -= 10;
					break;
				case "Right":
					sprite.positionX += 10;
					break;
				default:
					break;
			}
		};

		return sprite;
	}

	function nextFrame(){
		var currentTime = new Date().getTime();
		//console.log(currentTime);

		processInput(currentTime - lastUpdate);
		update(currentTime - lastUpdate);
		render();

		lastUpdate = currentTime;
		requestAnimationFrame(nextFrame);
	}

	requestAnimationFrame(nextFrame);
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