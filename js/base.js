//-------------------------
//	Navigation
//-------------------------

$("#slide-nav .button").each(function() {

	// Define
	var intro = $("#intro-kitty");
	var nav = $("#slide-buttons");
	var bubbles = $("#intro-kitty .bubble-git, #intro-kitty .bubble-info");
	var currentID ="#" + $(this).attr('id');
	var currentPage = $("#content").find(currentID);

	// Nav button click
    $(this).click(function() {
        $("#slide-nav .button").removeClass("active");
        if($(this).attr('id') != "introduction") {
            TweenLite.to(intro, .3, { height:0, overflow:"hidden"});
        } 
        else {
            TweenLite.to(intro, .3, { height:182, overflow:"hidden"}); 
        }
        
        if(! $(this).hasClass("active")) {$(this).addClass("active");}
        
        if(currentPage.attr('id') == currentID) { return; }
        else {
            var neww = $("#content .page").not(currentID);
            TweenLite.to(neww, .4, {autoAlpha:0, display:"none", onComplete:pageIn});
            function pageIn() {
                TweenLite.to(currentPage, .4, {autoAlpha:1, display:"block"});
            }
        }
    });
});

//-------------------------
//	Carousel
//-------------------------
