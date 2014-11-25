function sprite(params){
	this.image = params.image;
	this.width = params.width;
	this.height = params.height;
	this.loop = params.loop;
	this.numberOfFrames = params.numberOfFrames;
	this.frameIndex = 0;
	this.direction = params.direction;
	this.positionX = params.positionX;
	this.positionY = params.positionY;
	this.direction = params.direction;
};

sprite.prototype.draw = function(context) {
	var sheetY = 0;

	if(this.direction == "Left"){
		this.numberOfFrames = 3;
		this.width = 47;
		sheetY = 54;
	} else if(this.direction == "Right"){
		this.numberOfFrames = 3;
		this.width = 47;
		sheetY = 18;
	} else if(this.direction == "Down"){
		sheetY = 36;

	}

	if(this.moving){
		if(this.frameIndex < this.numberOfFrames - 1){
			this.frameIndex += 1;
		} else if(this.loop){
			this.frameIndex = 0;
		}
	}

	context.drawImage(this.image,
						this.frameIndex * this.width / this.numberOfFrames,
						sheetY,
						this.width/ this.numberOfFrames,
						this.height,
						this.positionX,
						this.positionY,
						this.width / this.numberOfFrames,
						this.height);
};

sprite.prototype.update = function(keyPresses){
	switch(keyPresses.pop()){
		case "Up":
			this.direction = "Up"
			this.moving = true;
		break;
		case "Left":
			this.direction = "Left"
			this.moving = true;
		break;
		case "Right":
			this.direction = "Right"
			this.moving = true;
		break;
		case "Down":
			this.direction = "Down"
			this.moving = true;
		break;
		default:
			this.moving = false;
		break;
	}
}