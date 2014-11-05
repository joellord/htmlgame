function imageLoader(src, callback){
	var imgAssets = {};

	for(var i = 0; i < src.length; ++i){
		var img = new Image();
		img.src = src[i];

		imgAssets[String(src[i])] = img;
	}

	callback(imgAssets);
};