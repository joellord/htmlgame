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
	var frameIndex;

	context.drawImage(this.image,
						0,
						0,
						this.width,
						this.height,
						this.positionX,
						this.positionY,
						this.width,
						this.height);
};

sprite.prototype.update = function(keyPresses){
	//filler
}