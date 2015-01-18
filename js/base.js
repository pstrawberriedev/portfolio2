//-------------------------
//	Alien Kitty
//-------------------------

$("#slide-nav a").click(function() {

	var intro = $("#intro-kitty");
	var kitty = $("#alien-kitty");
	var nav = $("#slide-nav");
	var bubbles = $("#intro-kitty .bubble-git, #intro-kitty .bubble-info");
	var currentPage = "#intro-kitty";
	currentPage = $(this).attr('id');
	
	if(intro.is(':visible')) {
		intro.slideUp(function() {
			nav.addClass("morph");
		});
	}
	
	
});

//-------------------------
//	Nav Traversal
//-------------------------
