//Store user's agreement in localstorage and don't show the cookies alert based on this
function cookieMan() {
    localStorage.setItem('RAPcookie', 'true');
    $('.cookies-alert').hide();
    $('body').removeClass('cookie-padding');
}

if(localStorage.getItem('RAPcookie') == 'true') {
    $('.cookies-alert').hide();
}
else {
    $('body').addClass('cookie-padding');
}