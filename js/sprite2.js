function sprite(params){
	this.image = params.image;
	this.width = params.width;
	this.height = params.height;
	this.loop = params.loop;
	this.numberOfFrames = params.numberOfFrames;
	this.direction = params.direction;
	this.positionX = params.positionX;
	this.position = params.positionY;
	this.direction = params.direction;
};

sprite.prototype.draw = function(context) {
	var frameIndex;

	context.drawImage(sprite.image,
						sprite.width,
						sprite.height,
						sprite.width,
						sprite.height,
						sprite.positionX,
						sprite.positionY,
						sprite.width,
						sprite.height);
};

sprite.prototype.update = function(keyPresses){
	//filler
}