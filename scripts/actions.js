
// http://nivo.dev7studios.com/support/jquery-plugin-usage/
$(window).load(function() {
    media_queries();
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
    media_queries();
});

function media_queries() {
    if ($(window).width() >= 1600) {
        $("body").addClass("ie-1600").removeClass("ie-320");
    } else if ($(window).width() <= 767) {
        $("body").addClass("ie-320").removeClass("ie-1600");
    } else {
        $("body").removeClass("ie-320").removeClass("ie-1600");
    }
}
// Bättra på språknavigationen genom att kopiera in länkens text till title-attribut i det synliga li-elementet
$(document).ready(function() {
    $("#lang li a").each(function() {
        $(this).parent('li').attr('title', $(this).text());
    });
    
    // Ändrar dynamiskt storlek på text och element beroende på fönstrets storlek
    var context = $('body');
    
    var setBodyScale = function() {
        var scaleSource = context.width(),
            scaleFactor = 0.15,
            maxScale = 180,
            minScale = 75;

        var fontSize = scaleSource * scaleFactor;

        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale;

        $(context).css('font-size', fontSize + '%');
    }
    
    $(window).resize(function(){
        setBodyScale();
    });
    
    setBodyScale();
});


