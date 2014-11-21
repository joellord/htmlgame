function sprite(params){
	this.image = params.image;
	this.width = params.width;
	this.height = params.height;
	this.loop = params.loop;
	this.numberOfFrames = params.numberOfFrames;
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

	context.drawImage(this.image,
						0,
						sheetY,
						this.width / this.numberOfFrames,
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
		break;
		case "Left":
			this.direction = "Left"
		break;
		case "Right":
			this.direction = "Right"
		break;
		case "Down":
			this.direction = "Down"
		break;
		default:
		break;
	}
}