$(window).scroll(function() {
    let hT = $('#detailinfo').offset().top,
        hH = $('#detailinfo').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
     $('#detailinfo .info-card').animate({"right": '0', "opacity": '1'}, 1000);
    }
 });

 $(window).scroll(function() {
    let hT = $('#kontakt').offset().top,
        hH = $('#kontakt').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
     $('#kontakt .info-card').animate({"right": '0', "opacity": '1'}, 1000);
    }
 });