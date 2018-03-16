

 /* initializing variables */
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var stickyElements = $('.sticky');

Stickyfill.add(stickyElements);

function goHome() {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
};

function goProjects() {
  document.documentElement.scrollTop = document.body.scrollTop = 1350;
};

function goAbout() {
  document.documentElement.scrollTop = document.body.scrollTop = 3000;
};

function goContact() {
  document.documentElement.scrollTop = document.body.scrollTop = 10000;
};

function openLightBox(src) {
  var x = src;
  $("#light-img").attr('src', x);
  $("#light-img").css('top', window.pageYOffset + 150 );
  $("#light-box").fadeIn('fast');
  disableScroll();
  window.addEventListener('click', closeLightBox);
};

function closeLightBox(e) {
  var lightBox = document.getElementById('light-box');
  if (e.target == lightBox) {
    $("#light-box").fadeOut('fast');
    enableScroll();
    console.log('the light box is closed');
  }
};

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
