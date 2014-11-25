function sprite(params){
	var frameIndex = 0;
	var tickCount = 0;
	var ticksPerFrame = ticksPerFrame || 3;
	var numberOfFrames = params.numberOfFrames || 1;
	this.context = params.context;
	this.image = params.image;
	this.width = params.width;
	this.height = params.height;
	this.positionX = params.positionX;
	this.positionY = params.positionY;
	var loop = params.loop;
	var newDirection = newDirection || params.direction;

	this.draw = function(){
		if(newDirection == "Up"){
			this.context.drawImage(
			this.image,
			frameIndex * this.width / numberOfFrames,
			0,
			this.width / numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / numberOfFrames,
			this.height);
		} else if(newDirection == "Down"){
			this.context.drawImage(
			this.image,
			frameIndex * this.width / numberOfFrames,
			36,
			this.width / numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / numberOfFrames,
			this.height);
		} else if(newDirection == "Left"){
			numberOfFrames = 3;
			this.width = 47;

			this.context.drawImage(
			this.image,
			frameIndex * this.width / numberOfFrames,
			54,
			this.width / numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / numberOfFrames,
			this.height);
		} else if(newDirection == "Right"){
			numberOfFrames = 3;
			this.width = 47;

			this.context.drawImage(
			this.image,
			frameIndex * this.width / numberOfFrames,
			18,
			this.width / numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / numberOfFrames,
			this.height);
		}
	};

	this.update = function(keyPresses){
		switch (keyPresses.pop()){
			case "Up":
				this.positionY -= 3;
				move();
				newDirection = "Up"
			break;
			case "Left":
				this.positionX -= 3;
				move();
				newDirection = "Left"
			break;
			case "Down":
				this.positionY += 3;
				move();
				newDirection = "Down"
			break;
			case "Right":
				this.positionX += 3;
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
			} else if(loop){
				frameIndex = 0;
			}

		}
	};
}