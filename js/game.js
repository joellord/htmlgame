function init(){
	imageLoader("img/sara.png", gameLoop)
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
			width: 63,
			height: 18,
			positionX: 150,
			positionY: 150,
			numberOfFrames: 4,
			loop: true,
			direction: "Up"
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
		}
		// The 'S' Key
		else if(e.keyCode || e.which == 115){
			keyPresses.push("Down");
		}
		// The 'D' Key
		else if(e.keyCode || e.which == 100){
			keyPresses.push("Right");
		}
	}

	function update(lastUpdated){
		sara.update();
	}

	function render(){
		context.fillStyle = "#000000";
		context.fillRect(0, 0, 500, 500);

		sara.draw();
	}

	function sprite(params){
		var sprite = {};
		var frameIndex = 0;
		var tickCount = 0;
		var ticksPerFrame = ticksPerFrame || 3;
		var numberOfFrames = params.numberOfFrames || 1;
		sprite.context = params.context;
		sprite.image = params.image;
		sprite.width = params.width;
		sprite.height = params.height;
		sprite.positionX = params.positionX;
		sprite.positionY = params.positionY;
		sprite.loop = params.loop;
		var newDirection = newDirection || params.direction; 

		sprite.draw = function(){

			if(newDirection == "Up"){
				sprite.context.drawImage(
					sprite.image,
					frameIndex * sprite.width / numberOfFrames,
					0,
					sprite.width / numberOfFrames,
					sprite.height,
					sprite.positionX,
					sprite.positionY,
					sprite.width / numberOfFrames,
					sprite.height);
			} else if(newDirection == "Down"){
				sprite.context.drawImage(
					sprite.image,
					frameIndex * sprite.width / numberOfFrames,
					36,
					sprite.width / numberOfFrames,
					sprite.height,
					sprite.positionX,
					sprite.positionY,
					sprite.width / numberOfFrames,
					sprite.height);
			} else if(newDirection == "Left"){
				numberOfFrames = 3;
				sprite.width = 47;

				sprite.context.drawImage(
					sprite.image,
					frameIndex * sprite.width / numberOfFrames,
					54,
					sprite.width / numberOfFrames,
					sprite.height,
					sprite.positionX,
					sprite.positionY,
					sprite.width / numberOfFrames,
					sprite.height);
			} else if(newDirection == "Right"){
				numberOfFrames = 3;
				sprite.width = 47;

				sprite.context.drawImage(
					sprite.image,
					frameIndex * sprite.width / numberOfFrames,
					18,
					sprite.width / numberOfFrames,
					sprite.height,
					sprite.positionX,
					sprite.positionY,
					sprite.width / numberOfFrames,
					sprite.height);
			}
		};

		sprite.update = function(){
			switch (keyPresses.pop()){
				case "Up":
					sprite.positionY -= 3;

					move();

					newDirection = "Up"

					break;
				case "Left":
					sprite.positionX -= 3;

					move();

					newDirection ="Left"
					break;

				case "Down":
					sprite.positionY += 3;

					move();

					newDirection = "Down"

					break;

				case "Right":
					sprite.positionX += 3;

					move();

					newDirection = "Right"
					break;
				default:
					break;
			}
		};

		function move(){
			tickCount += 1;

			if (tickCount > ticksPerFrame) {
				tickCount = 0;

				if(frameIndex < numberOfFrames - 1){
					frameIndex += 1; 
				} else if(sprite.loop){
					frameIndex = 0;
				}
			}
		};

		return sprite;
	}

	function nextFrame(){
		var currentTime = new Date().getTime();

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