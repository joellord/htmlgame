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

	sprite.update = function(keyPresses){
		switch (keyPresses.pop()){
			case "Up":
				sprite.positionY -= 3;
				move();
				newDirection = "Up"

				break;
			case "Left":
				sprite.positionX -= 3;
				move();
				newDirection = "Left"
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