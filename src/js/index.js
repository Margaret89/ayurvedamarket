import {$} from './common';

// Стрелка перемещения вверх
$(window).on('scroll', function(){
	if($(this).scrollTop()>300){
		$('.js-move-up').addClass('visible');
	}else{
		$('.js-move-up').removeClass('visible');
	}
});
$('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});

// Верхний слайдер
if($('.js-top-slider').length){
	$('.js-top-slider').slick({
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		cssEase: 'linear'
	});
}

// Слайдер категорий
if($('.js-cat-slider').length){
	$('.js-cat-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 5
	});
}

// Слайдер блога
if($('.js-blog-slider').length){
	$('.js-blog-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});
}

// Слайдер товаров
if($('.js-slider-product').length){
	$('.js-slider-product').slick({
		infinite: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});
}

// Свернуть/развернуть текст каталога
if($('.js-cat-desc-switch').length){
	$('.js-cat-desc-switch').on('click', function(){
		var tempVal = $(this).text();

		$(this).text($(this).attr('data-text'));
		$(this).attr('data-text', tempVal);
		$('.js-cat-desc-detail').slideToggle(300);
	});
}

// Свернуть/развернуть отзывы
if($('.js-review-list').length){
	$('.js-review-list-switch').on('click', function(){
		var $parent = $(this).parents('.js-review-list');
		var tempVal = $(this).text();

		$(this).text($(this).attr('data-text'));
		$(this).attr('data-text', tempVal);
		$parent.find('.js-review-full').slideToggle(300);
	});
}