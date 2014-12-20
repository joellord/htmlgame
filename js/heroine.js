function heroine(params){
	sprite.call(this, params);
};

heroine.update = function(keyPresses){

	switch(keyPresses.pop()){
		case "Up":
			this.direction = "Up"
			this.positionY -= 3;
			this.moving = true;
		break;
		case "Left":
			this.direction = "Left"
			this.positionX -= 3;
			this.moving = true;
		break;
		case "Right":
			this.direction = "Right"
			this.positionX += 3;
			this.moving = true;
		break;
		case "Down":
			this.direction = "Down"
			this.positionY += 3;
			this.moving = true;
		break;
		default:
			this.moving = false;
		break;
	}

	console.log("Not Here")
	sprite.prototype.update.call();
}