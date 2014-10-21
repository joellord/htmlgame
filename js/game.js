function init(){
	var imageResources = ["img/sara-simple.png"]

	imageLoader(imageResources, gameLoop)
};


function gameLoop(){
	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	canvas.width = 500;
	canvas.height = 500;

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	var lastUpdate = new Date().getTime();

	var textX = 10;
	var textY = 10;

	function processInput(){
		//stub
	}

	function update(){
		textX += 1;
		textY += 1;
	}

	function render(){
		context.fillStyle = "#FF0000";
		context.fillRect(0, 0, 500, 500);

		context.fillStyle = 'white';
		context.font = "30px sans";
		context.fillText("Hello World", textX, textY);
	}

	function nextFrame(){
		var currentTime = new Date().getTime();
		console.log(currentTime);

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