$(document).ready(function() {
	var bool = true;
	$("#openButton").click(function(){
		if(bool){
			$(".filter").css("animation-name","moveFilter2");
			$(".filter").css("right","0px");
			bool = false;
		}
		else{
			$(".filter").css("animation-name","moveFilter");
			$(".filter").css("right","-230px");
			bool = true;
		}
	});

	$(".ideaSection").click(function(){
		if(!bool){
			$(".filter").css("animation-name","moveFilter");
			$(".filter").css("right","-230px");
			bool = true;
		}
	});
});