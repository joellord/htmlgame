function sprite(params){
	this.context = params.context;
	this.image = params.image;
	this.width = params.width;
	this.height = params.height;
	this.positionX = params.positionX;
	this.positionY = params.positionY;
	this.loop = params.loop;
	this.direction = params.direction; 

}

sprite.prototype.frameIndex = 0;
sprite.prototype.tickCount = 0;

//Fix me
sprite.prototype.ticksPerFrame = 3;
sprite.prototype.numberOfFrames = 4;

sprite.prototype.draw = function(){
	if(this.direction == "Up"){
		this.context.drawImage(
			this.image,
			this.frameIndex * this.width / this.numberOfFrames,
			0,
			this.width / this.numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / this.numberOfFrames,
			this.height);
	} else if(direction == "Down"){
		this.context.drawImage(
			this.image,
			this.frameIndex * this.width / this.numberOfFrames,
			36,
			this.width / this.numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / this.numberOfFrames,
			this.height);
	} else if(direction == "Left"){
		this.this.numberOfFrames = 3;
		this.width = 47;

		this.context.drawImage(
			this.image,
			this.frameIndex * this.width / this.numberOfFrames,
			54,
			this.width / this.numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / this.numberOfFrames,
			this.height);
	} else if(direction == "Right"){
		this.numberOfFrames = 3;
		this.width = 47;

		this.context.drawImage(
			this.image,
			this.frameIndex * this.width / this.numberOfFrames,
			18,
			this.width / this.numberOfFrames,
			this.height,
			this.positionX,
			this.positionY,
			this.width / this.numberOfFrames,
			this.height);
	}
};

sprite.prototype.update = function(keyPresses){
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
	this.tickCount += 1;

	if (this.tickCount > this.ticksPerFrame) {
		this.tickCount = 0;

		if(this.frameIndex < this.numberOfFrames - 1){
			this.frameIndex += 1; 
		} else if(this.loop){
			this.frameIndex = 0;
		}
	}
};