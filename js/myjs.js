$(window).scroll(function(){
	if ($(window).scrollTop()>0) {
		$('#plzheader').css('background','white')
		$('#plzheader').css('box-shadow','0 0 5px rgba(0, 0, 0, 0.19)')
		$('.navbar-right li a').addClass('abc')
	} else{
		$('#plzheader').css('background','transparent')
		$('.navbar-right li a').removeClass('abc')
	}
	
    $('.navbar-right>li').hover(function(){
	
	$(this).children('a').addClass('current')
},function(){
	$(this).children('a').removeClass('current')
})
    for (var i=0;i<$('.gundong').length;i++) {
    	if ($(window).scrollTop()>=($('.gundong').eq(i).offset().top-($(window).height()/2))) {
    		$('.navbar-right li a').removeClass('current')
    		$('.navbar-right li').eq(i).children('a').addClass('current')
    	} else{
    		$('.navbar-right li').eq(i).children('a').removeClass('current')
    	}
    }
})
$(document).ready(function() {
$('.navbar-right li a').click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
});
});

$('.question').click(function(){
	$(this).children('.question-title').children('.question-icon').children('font').toggle()
	$(this).children('.answer').toggle();
})
