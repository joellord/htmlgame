function init(){
	imgAssets = ["img/sara.png", "img/grass-tiles.png"];
	imageLoader(imgAssets, gameLoop);
};


function gameLoop(imgAssets){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 480;
	canvas.height = 480;

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var lastUpdate = new Date().getTime();

	function background(params){
		background.context = params.context;
		background.image = params.image;
		background.width = params.width;
		background.height = params.height;

		background.draw = function(){
			var drawX = 0;
			var drawY = 0;

			while(drawX < canvas.width){
				while(drawY < canvas.height){
					background.context.drawImage(
						background.image,
						0,
						0,
						background.width,
						background.height,
						drawX,
						drawY,
						background.width,
						background.height);
					drawY += 15;
				}
				drawY = 0;
				drawX+=15;
			}
		}

		return background;
	}

	var bg = background({
		context: context,
		image: imgAssets["img/grass-tiles.png"],
		width: 32,
		height: 32
	});

	var sara = new sprite({
		context: context,
		image: imgAssets["img/sara.png"],
		width: 63,
		height: 18,
		positionX: 150,
		positionY: 150,
		numberOfFrames: 4,
		loop: true,
		direction: "Up"
	});

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
		sara.update(keyPresses);
	}

	function render(){
		bg.draw();
		sara.draw();
	}

	

	function nextFrame(){
		var currentTime = new Date().getTime();

		processInput(currentTime - lastUpdate);
		update();
		render();

		lastUpdate = currentTime;
		requestAnimationFrame(nextFrame);
	}

	requestAnimationFrame(nextFrame);
}
