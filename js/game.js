function init(){
	imgAssets = ["img/sara.png", "img/grass-tiles.png"];
	imageLoader(imgAssets, gameLoop);
};


function gameLoop(imgAssets){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 480;
	canvas.height = 480;

	heroine.prototype = Object.create(sprite.prototype);
	//heroine.prototype.constructor = heroine;

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var lastUpdate = new Date().getTime();

	var bg = new background({
		context: context,
		image: imgAssets["img/grass-tiles.png"],
		width: 32,
		height: 32
	});

	var sara = new heroine({
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

	function draw(){
		bg.draw();
		sara.draw(context);
	}

	

	function nextFrame(){
		var currentTime = new Date().getTime();

		processInput(currentTime - lastUpdate);
		update();
		draw();

		lastUpdate = currentTime;
		requestAnimationFrame(nextFrame);
	}

	requestAnimationFrame(nextFrame);
}
