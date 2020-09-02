$(function(){
	function ibg(){

		$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
		}
		ibg();
		$('.menu-icon').click(function(){
			$('.menu-body').slideToggle(300);
		});
		$('.language-caption').click(function(){
			$(this).toggleClass('active');
			$('.lang-list').slideToggle(300);
		});
		$('.header-burger').click(function(){
			$(this).toggleClass('active');
			$('.header-nav-bar').slideToggle(300);
			$('.header-nav-bar').toggleClass('active');
		});
		$('.spoiler-title').click(function(){
			$(this).toggleClass('active');
			if($('.article').hasClass('one')){
				$('.spoiler-title').not(this).removeClass('active');
				$('.spoiler-title').not(this).next().slideUp(500);
			}
			$(this).next().slideToggle(500);
		});
		let burger = $('.header-burger');
		let element =$('.section').innerHeight();
		let elementOffset = $(window).scrollTop();
		$(window).on('scroll',function(){
			let elementOffset = $(this).scrollTop();
			if(elementOffset > element){
				burger.addClass('fixed');
			}else{
				burger.removeClass('fixed');
			}
		});
		let header = $('.header-nav');
		$(window).on('scroll',function(){
			let elementOffset = $(this).scrollTop();
			if(elementOffset > element){
				header.addClass('fixed');
			}else{
				header.removeClass('fixed');
			}
		});
});