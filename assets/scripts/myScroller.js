(function( $ ){
  $.fn.myScroller = function() {
    $(this).click(function(e){
		e.preventDefault();
		var target = this.hash;
		// $target = $(target);

		var myTarget = $(target)
		$('body').animate({ scrollTop: (myTarget.offset().top -120) + "px" }, 900);
	});

  };
})( jQuery );