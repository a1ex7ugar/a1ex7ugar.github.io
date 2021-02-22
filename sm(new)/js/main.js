/** Buy slideUpDown */
$(function(){
    $( ".arrow-1" ).click(function(){ 
		$(".arrow-2").removeClass('active');
		$(".arrow-3").removeClass('active');
		if($(this).hasClass('active')){
			$(".buy__menu-instagram" ).slideUp( 800 )
			$(this).removeClass('active');
		}
		else{
		$(this).addClass('active');
		$(".buy__menu-youtube" ).slideUp( 800 );
		$(".buy__menu-tiktok" ).slideUp( 800 );
		$(".buy__menu-instagram" ).slideDown( 800 );
		
		}
	});
});
$(function(){
    $( ".arrow-2" ).click(function(){ 
		if($(this).hasClass('active')){
			$(".arrow-1").removeClass('active');
			$(".arrow-3").removeClass('active');
			$(".buy__menu-youtube" ).slideUp( 800 );
			$(this).removeClass('active');
		}
		else{
		$(this).addClass('active');
		$(".buy__menu-youtube" ).slideDown( 800 );
		$(".buy__menu-tiktok" ).slideUp( 800 );
		$(".buy__menu-instagram" ).slideUp( 800 );
		}
	});
});
$(function(){
    $( ".arrow-3" ).click(function(){ 
		$(".arrow-1").removeClass('active');
		$(".arrow-2").removeClass('active');
		if($(this).hasClass('active')){
			$(".buy__menu-tiktok" ).slideUp( 800 );
			$(this).removeClass('active');
		}
		else{
	    $(this).addClass('active');
		$(".buy__menu-youtube" ).slideUp( 800 );
		$(".buy__menu-tiktok" ).slideDown( 800 );
		$(".buy__menu-instagram" ).slideUp( 800 );
		}
	});
});

/** Buy slick */
$(document).ready(function(){
	if ($(window).width() < 769) {
	$('.select__items').slick({
		speed: 300,
		arrows: false,
		infinite:true,
  		slidesToShow: 1,
		initialSlide: 4,
  		centerMode: true,
  		variableWidth: true,
		});
	}
  });

  $(document).ready(function(){
	if ($(window).width() < 577) {
	$('.sn__items').slick({
		speed: 300,
		arrows: false,
		infinite:true,
  		slidesToShow: 1,
  		centerMode: true,
  		variableWidth: true,
          
		});
	}
  });


/** Guid slick */
$('.sl').slick({
	dots: true,
	arrows: false,
	initialSlide: 1,
    rows: 2,
	autoplay: true,
	autoplaySpeed: 3000,
    slidesToShow: 2,
	
    responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1		
		  }
		},
	]
});

/**Scroll to Top */
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
        return false;
    });
});

/** Pop-up */
$(".Click-here").on('click', function() {
	$(".custom-model-main").addClass('model-open');
}); 

$(".close-btn").click(function(){
	$(".custom-model-main").removeClass('model-open');
});