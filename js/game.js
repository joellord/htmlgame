function init(){
	imgAssets = ["img/sara.png", "img/grass-tiles.png"];
	imageLoader(imgAssets, gameLoop);
};


function gameLoop(imgAssets){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var lastUpdate = new Date().getTime();

	var sara = sprite({
			context: context,
			image: imgAssets["img/sara.png"],
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
		sara.update(keyPresses);
	}

	function render(){
		var pattern = context.createPattern(imgAssets["img/grass-tiles.png"], 'repeat');

		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = pattern;
		context.fill();

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
