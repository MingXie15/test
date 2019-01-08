$(document).ready(function(){
	$.each($('.container div'),function(i,n){
			$(n).addClass('animate')
	})
	$.each($('.container img'),function(i,n){
			$(n).addClass('animate')
	})
	$.each($('.container p'),function(i,n){
			$(n).addClass('animate')
	})
	$('.container>.text-center').eq(0).removeClass('animate').find('img').removeClass('animate')
})
function scrollAnimate(n){
	if($(document).scrollTop()+$(window).height()>$(n).offset().top+100){
		$(n).removeClass('animate')
	}
}
$(document).scroll(function(){
	$.each($('.container div'),function(i,n){
		scrollAnimate(n)
	})
	$.each($('.container img'),function(i,n){
		scrollAnimate(n)
	})
	$.each($('.container p'),function(i,n){
		scrollAnimate(n)
	})
})