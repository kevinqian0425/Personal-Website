(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict

/*
$(function() {
  $('.circle-graph').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#a378aa',
    trackColor: '#e7b8ef' ,
    size: 150,
    animate: 800
  });
});
*/

$('.more-info-btn').click(function() {
  $('.hidden-content').slideToggle({easing:'easeInOutQuart'});
});
