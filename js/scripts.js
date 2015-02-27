$(document).ready(function(){
	//Menu
	$('.menu-trigger').on('click', function(event) {
		$('.main-menu').toggleClass('main-menu-active');
		$('.main-menu-mobile').toggleClass('main-menu-active');
		$('.site-header').toggleClass('site-move');
		$('.collage').toggleClass('site-move');
		event.preventDefault();
	}); 

	//Close menu
	$(document).on('click', function(ev) {
		var $target = $(ev.target);
		if (!$target.closest('nav').length && !$target.is('.menu-trigger')) {
			closeMenu();
		}
	});
	$('.main-menu a').on('click', closeMenu);
	$('.main-menu-mobile').on('click', closeMenu);

	$(document).on('keydown', function(ev) {
		if (ev.which == 27 && $('.main-menu').hasClass('main-menu-active')) {
			closeMenu();
		}
	});

	//Anchors
	$("a.ancLinks").click(function(event) { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination 
		}, 1100, function() {

		});
		event.preventDefault();
	});

	//Collage 
	$('.collage-box').on('click', function() {
		var collageIndex = $(this).index();
		$(this).addClass('collage-click');
	});

	//Reviews slider
	$('.review').cycle({
		fx: 'fade',
		pager: '#nav',
		timeout: 3000,
		next: '.p_next',
		prev: '.p_prev'
	});

	//Grid
	// pageUnits = 'px';
 //    colUnits = 'px';
 //    pagewidth = 1600;
 //    columns = 10;
 //    columnwidth = 130;
 //    gutterwidth = 30;
 //    pagetopmargin = 0;
 //    pageleftmargin = 15;
 //    rowheight = 20;
 //    gridonload = 'off';
 //    makehugrid();
 //    setgridonload();

    //Enable swiping...
    $(".main-menu-mobile").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') {
        		closeMenu();
        		// console.log('f');
            }  

        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
       threshold:0
	});
    $(".ancLinks").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') {
        		//closeMenu();
        		console.log('f');
            }  

        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
       threshold:0
	});

    //Maps 
    function initialize() {     
        var myLatlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 8,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Hello World!" 
            
        });
    }
    initialize();

    function closeMenu() {
    	$('.main-menu').removeClass('main-menu-active');
    	$('.main-menu-mobile').removeClass('main-menu-active');
    	$('.site-header').removeClass('site-move');
    	$('.collage').removeClass('site-move');
    }

});

