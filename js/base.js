//-------------------------
//	Navigation
//-------------------------

$("#slide-nav .button").each(function() {

        var intro = $("#intro-kitty");
        var kitty = $("#alien-kitty");
        var nav = $("#slide-buttons");
        var bubbles = $("#intro-kitty .bubble-git, #intro-kitty .bubble-info");
        var currentID ="#" + $(this).attr('id');
        var currentPage = $("#content").find(currentID);

    $(this).click(function() {
        $("#slide-nav .button").removeClass("active");
        if($(this).attr('id') != "introduction") { intro.slideUp(); } 
        else { intro.slideDown(); }
        if(! $(this).hasClass("active")) {$(this).addClass("active");}
        
        if(currentPage.attr('id') == currentID) { return; }
        else {
            $("#content .page").not(currentID).hide(function() {
                currentPage.slideDown();
            });
        } 
    });
});

//-------------------------
//	Carousel
//-------------------------
