
// http://nivo.dev7studios.com/support/jquery-plugin-usage/
$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'fold', // Specify sets like: 'fold,fade,sliceDown'
        animSpeed: 750, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        controlNav: false, // 1,2,3... navigation
        directionNav: false // Next & Prev navigation
    });
});

// För att hjälpa IE8 att visa media queries
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});
$(window).bind('resizeEnd', function() {
    if ($(window).width() >= 1600) {
        $("body").addClass("ie-1600").removeClass("ie-320");
    } else if ($(window).width() <= 767) {
        $("body").addClass("ie-320").removeClass("ie-1600");
    } else {
        $("body").removeClass("ie-320").removeClass("ie-1600");
    }
});

// Bättra på språknavigationen genom att kopiera in länkens text till title-attribut i det synliga li-elementet
$(document).ready(function() {
    $("#lang li a").each(function() {
        $(this).parent('li').attr('title', $(this).text());
    });
});