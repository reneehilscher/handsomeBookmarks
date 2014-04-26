// scrollTop
$(document).ready(function(){
	//scrolling to different areas
	//showing hidden content
	$(".show_more a").click(function(){
			  $( ".reasons" ).slideToggle( "slow", function() {
    	console.log("success");
  	});
	});
});



