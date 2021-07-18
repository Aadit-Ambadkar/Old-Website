var alphaDust = function () {

    var _menuOn = false;

    function initPostHeader() {
        $('.main .post').each(function () {
            var $post = $(this);
            var $header = $post.find('.post-header.index');
            var $title = $post.find('h1.title');
            var $readMoreLink = $post.find('a.read-more');

            var toggleHoverClass = function () {
                $header.toggleClass('hover');
            };

            $title.hover(toggleHoverClass, toggleHoverClass);
            $readMoreLink.hover(toggleHoverClass, toggleHoverClass);
        });
    }

    function _menuShow () {
        $('nav a').addClass('menu-active');
        $('.menu-bg').show();
        $('.menu-item').css({opacity: 0});
        TweenLite.to(".menu-container", 1, {padding: '0 40px'});
        TweenLite.to(".menu-bg", 1, {opacity: '0.92'});
        TweenMax.staggerTo(".menu-item", 0.5, {opacity: 1}, 0.3);
        _menuOn = true;

        $('.menu-bg').hover(function () {
            $('nav a').toggleClass('menu-close-hover');
        });
    }

    function _menuHide() {
        $('nav a').removeClass('menu-active');
        TweenLite.to(".menu-bg", 0.5, {opacity: '0', onComplete: function () {
            $('.menu-bg').hide();
        }});
        TweenLite.to(".menu-container", 0.5, {padding: '0 100px'});
        $('.menu-item').css({opacity: 0});
        _menuOn = false;
    }

    function initMenu() {

        $('nav a').click(function () {
            if(_menuOn) {
                _menuHide();
            } else {
                _menuShow();
            }
        });

        $('.menu-bg').click(function (e) {
            if(_menuOn) {
                _menuHide();
            }
        });
    }

    return {
        initPostHeader: initPostHeader,
        initMenu: initMenu
    };
}();

$(document).ready(function () {
    alphaDust.initPostHeader();
    alphaDust.initMenu();
});

var list = document.getElementsByClassName("subtitle");
for (var item of list) {
    item.innerHTML = "I'm ";
}
var i = 0;
var j = 0;
var txt = [
    'a mathlete', 
    'a competitive programmer', 
    'a website developer', 
    'a nature enthusiast', 
    'an ml wannabe', 
    'a (retired) swimmer', 
    'a tech junkie', 
    'a youtuber',
    'an aime qualifier',
    'a math competition coordinator',
    'an enthusiastic person',
    'a digital artist',
    'Aadit Ambadkar'
];
var speed = 80;
var wait = 2000;
var wait2 = 600;
addChar();

function addChar() {
  if (i < txt[j].length) {
    for (var item of list) {
      item.innerHTML += txt[j].charAt(i);
    }
    i++;
    setTimeout(function () {addChar();}, speed);
  } else {
    i=0;
    speed=70;
    setTimeout(function () {removeChar();}, wait);
  }
}

function removeChar() {
  if (i < txt[j].length) {
    for (var item of list) {
      item.innerHTML = item.innerHTML.substring(0, item.innerHTML.length-1);
    }
    i++;
    setTimeout(function () {removeChar();}, speed);
  } else {
    i=0;
    j++;
    j%=txt.length;
    speed=80;
    setTimeout(function () {addChar();}, wait2);
    
  }
}