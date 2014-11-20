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
	if(this.direction == "Right" || this.direction == "Left"){
		this.numberOfFrames = 3;
		this.width = 47;
		sheetY = 54;
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
	//filler
}