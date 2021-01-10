$.fn.parallax = function(resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function(e) {
  $(".mainChild").parallax(-30, e);
  $(".logo").parallax(10, e);
});

$(window).scroll(() => {
    if ($(".hidden").inView() && $('.hidden').height() > 0) {
        loadIn();
    }
})

loadIn();
function loadIn() {
    $('.load').animate({
        width: '20%'
    }, 100, () => {
        var w = $('.hidden').height();
        $('.hidden').height(`${w - 30}px`);
        var pos = $('.hidden').offset().top;
        $('.hidden').css({top: `${pos + 30}px`});
        $('.load').width('90%');
        var pos = $('.load').offset().top;
        $('.load').css({top: `${pos + 30}px`});

        if ($(".hidden").inView() && $('.hidden').height() > 0) {
            loadIn();
        }
        if ($('.hidden').height() <= 0) {
            $('.load').hide();
        }
    })
}

$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top);
    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};
