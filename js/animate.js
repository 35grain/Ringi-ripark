//Animations for section elements
let scrolled=false;
$(window).scroll(function() {
   let hT = $('#eelised').offset().top,
       hH = $('#eelised').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) & scrolled==false){
    $('.sticky-cta').fadeIn(1000);
   }
});

$(window).scroll(function() {
   let hT = $('#kontakt').offset().top,
       hH = $('#kontakt').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
    $('#kontakt .info-card').animate({"margin-right": '0', "opacity": '1'}, 1000);
    $('a.sticky-cta').fadeOut(1000);
    scrolled = true;
   }
});

$(window).scroll(function() {
   let hT = $('#asukoht_kaart').offset().top,
       hH = $('#asukoht_kaart').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
    $('#asukoht_kaart .info-piece,#asukoht_kaart .info-block').animate({"margin-right": '0', "opacity": '1'}, 1000);
   }
});

$(window).scroll(function() {
    let hT = $('#detailinfo').offset().top,
        hH = $('#detailinfo').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
     $('#detailinfo .info-card').animate({"margin-right": '0', "opacity": '1'}, 1000);
    }
 });

 //Smooth scrolling for anchors
 $(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top - 16
   }, 500);
});