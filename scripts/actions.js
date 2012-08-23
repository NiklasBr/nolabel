
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


// Bättra på språknavigationen genom att kopiera in länkens text till title-attribut i det synliga li-elementet
$(document).ready(function() {
    $("#lang li a").each(function() {
        $(this).parent('li').attr('title', $(this).text());
    });
});