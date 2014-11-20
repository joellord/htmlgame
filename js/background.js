function background(params){
	background.context = params.context;
	background.image = params.image;
	background.width = params.width;
	background.height = params.height;

	background.draw = function(){
		var drawX = 0;
		var drawY = 0;

		while(drawX < canvas.width){
			while(drawY < canvas.height){
				background.context.drawImage(
					background.image,
					0,
					0,
					background.width,
					background.height,
					drawX,
					drawY,
					background.width,
					background.height);
				drawY += 15;
			}
			drawY = 0;
			drawX+=15;
		}
	}

	return background;
}