$(window).load(function() {
    $("#top_logos_slider ul").bxSlider({
        pager: false,
        nextSelector: $("#top_logos_slider .arrow_right"),
        prevSelector: $("#top_logos_slider .arrow_left"),
        prevText: '',
        nextText: '',
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 150,
        onSliderLoad: function(){
            $("#top_logos_slider ul").css("visibility", "visible");
        }
    });
    
    $("#bottom_logos_slider ul").bxSlider({
        pager: false,
        nextSelector: $("#bottom_logos_slider .arrow_right"),
        prevSelector: $("#bottom_logos_slider .arrow_left"),
        prevText: '',
        nextText: '',
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 160
    });    
    
    
    $("#people_carousel ul").bxSlider({
        pager: false,
        nextSelector: $("#people_carousel .arrow_right"),
        prevSelector: $("#people_carousel .arrow_left"),
        prevText: '',
        nextText: '',
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 270,
        slideMargin: 25,
		onSliderLoad: function(){
			// Event fires when you click on a clone slide
			$('#people_carousel .bx-clone a').click(function(event){
				// Prevent click event for clone slides
				event.preventDefault();
				// Get the href attribute (url) of the clone slide image
				urlOfImage = $(this).attr('href');
				// Select the real slide by looking for a matching href attribute
				realSlide = $("#people_carousel li").not(".bx-clone").has('a[href="'+urlOfImage+'"]');
				var link = realSlide.find('a[href="'+urlOfImage+'"]');
				jQuery(link).trigger('click');
			});
		}
    });    

    $(".huge_slider ul").bxSlider({
        controls: false,
		auto: true,
        prevText: '',
        nextText: '',
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        pagerCustom: $(".huge_slider_markers")
    });  

    
    $( '#menu-glavnoe-menyu a' ).on( 'click', function () {
        var id = $( this ).attr( 'href' ).match( /#.+$/ )[0];
        var offsetTop = $( id ).offset().top - 100;
        $( 'body' ).stop().animate( {'scrollTop':offsetTop } );
        
        return false;
    } );


});

$(document).ready(function() {
    jQuery('form').attr('onsubmit', 'yaCounter32579275.reachGoal(\'lead\'); return true;');
    jQuery(".opened_element").fancybox({
        'easingIn' : 'easeOutBack', 'easingOut' : 'easeInBack', 'opacity' : false, 'hideOnContentClick' : false, 'titleShow' : true, 'titlePosition' : 'over', 'titleFromAlt' : true, 'showNavArrows' : true, 'enableKeyboardNav' : true, 'cyclic' : false,
         'overlayShow' : true, 'hideOnOverlayClick' : true, 'overlayOpacity' : 0.9, 'overlayColor' : '#000', 'showCloseButton' : false, 'width' : 740, 'height' : 295, 'padding' : 0, 'centerOnScroll' : true, 'enableEscapeButton' : true, 'autoScale' : true,
        'onComplete': function(selectedArray, selectedIndex, selectedOptions) {
            var id = jQuery(selectedArray[selectedIndex]).attr('href');
            $(id).find('.bxslider').bxSlider({
                pager: false,                
                prevText: '',
                nextText: '',
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,  
                slideWidth: 720,
                slideMargin: false
            });
        }
    });
});

$(document).on('click', '.close_popup', function() {
    jQuery.fancybox.close();
    return false;
});