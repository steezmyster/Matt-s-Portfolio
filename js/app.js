

 /* initializing variables */
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var stickyElements = $('.sticky');
var mainSlider = $('#main-slider');
var selectorNav = $('.selector-nav');

Stickyfill.add(stickyElements);

function goHome() {
  mainSlider.animate({scrollLeft: 0}, 300);
  selectorNav[0].style = "display: block";
  selectorNav[1].style = "display: none";
  selectorNav[2].style = "display: none";
  selectorNav[3].style = "display: none";
};

function goProjects() {
  mainSlider.animate({scrollLeft: 1625}, 300);
  selectorNav[0].style = "display: none";
  selectorNav[1].style = "display: block";
  selectorNav[2].style = "display: none";
  selectorNav[3].style = "display: none";
};

function goAbout() {
  mainSlider.animate({scrollLeft: 3250}, 300);
  selectorNav[0].style = "display: none";
  selectorNav[1].style = "display: none";
  selectorNav[2].style = "display: block";
  selectorNav[3].style = "display: none";
};

function goContact() {
  mainSlider.animate({scrollLeft: 4850}, 300);
  selectorNav[0].style = "display: none";
  selectorNav[1].style = "display: none";
  selectorNav[2].style = "display: none";
  selectorNav[3].style = "display: block";
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
var slidenum = 0;
var btnArray = $('.s-btn');
function buttonSelec(x) {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].classList.remove('s-selector');
  }
  btnArray[x].classList.add('s-selector');
}

function nextSlide(container) {
    var slide0 = 0;
    var slide1 = 1075;
    var slide2 = 2155;
    if (slidenum == 0) {
      $(container).animate({scrollLeft: slide1}, 300);
      slidenum += 1;
      buttonSelec(slidenum);
    }
    else if (slidenum == 1) {
      $(container).animate({scrollLeft: slide2}, 300);
      slidenum += 1;
      buttonSelec(slidenum);
    }
    else if (slidenum == 2) {
      $(container).animate({scrollLeft: slide0}, 300);
      slidenum = 0;
      buttonSelec(slidenum);
    }
    console.log(slidenum);
}

function previousSlide(container) {
    var slide0 = 0;
    var slide1 = 1075;
    var slide2 = 2155;
    if (slidenum == 0) {
      $(container).animate({scrollLeft: slide2}, 300);
      slidenum += 2;
      buttonSelec(slidenum);
    }
    else if (slidenum == 1) {
      $(container).animate({scrollLeft: slide0}, 300);
      slidenum -= 1;
      buttonSelec(slidenum);
    }
    else if (slidenum == 2) {
      $(container).animate({scrollLeft: slide1}, 300);
      slidenum -= 1;
      buttonSelec(slidenum);
    }
    console.log(slidenum);
}

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

function disableOverflow(x) {
  var projects = $('.slider')[0];
  var body = $('#main-slider')[0];

  if (x == 1) {
    projects.style = "overflow: hidden";
  }
  else {
    body.style = "overflow: hidden";
  }
}

function enableOverflow(x) {
  var projects = $('.slider')[0];
  var body = $('#main-slider')[0];

  if (x == 1) {
    projects.style = "overflow: scroll";
  }
  else {
    body.style = "overflow: scroll";
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

function submitMessage(msg) {
  alert(msg);
}
