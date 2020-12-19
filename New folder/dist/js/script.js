$(function() {
  
  var link = $('#navbar a.dot');
  
  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  
  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});
/*$(document).ready(function(){

        $(window).scroll(function(){
            var bo = $(this).scrollTop();
             var a = $(".back-top").css('opacity')
             $("#hid").html(bo);
            if ( bo <= 10 && a == 0) {$(".back-top").stop().animate({'opacity':'1'},100)};
        if ( bo > 10 && a == 1) {$(".back-top").stop().animate({'opacity':'0'},200)};
            })
})*/

/*dotNav('section', 'easeInOutCubic');

$(".menu-icon").click(function() {
  $(".menu-burger").toggleClass("menu-burger_expanded");
});

$(".search-icon").click(function() {
  $(".input").toggleClass("input-active");
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});*/
// open mobile menu
$(".menu-icon").click(function() {
  $(".menu-burger").toggleClass("menu-burger_expanded");
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
$(".Click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});









