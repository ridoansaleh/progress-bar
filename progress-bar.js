var startProg = function(){
	var progressBar, demo, finalWidth, progressLabel, percent, initInterval;

	progressBar = $(".progress-bar").width();
	demo = $("#demo");
	finalWidth = 0;
	progressLabel = $(".progress-label");
	percent = 0;
	initInterval = setInterval(function(){ myCallback() }, 20);

	function myCallback(){
		if(finalWidth < progressBar){
			finalWidth = finalWidth+1;
			demo.css({
				width: finalWidth+"px"
			});
			percent = (finalWidth/progressBar) * 100;
			progressLabel.text(parseInt(percent)+" %");
		}else if(finalWidth == progressBar){
			clearInterval(initInterval);
		}
	}
}
/*created by : ridoan saleh nasution*/