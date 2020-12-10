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
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
}

// Слайдер блога
if($('.js-blog-slider').length){
	$('.js-blog-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		  ]
	});
}

// Слайдер товаров
if($('.js-slider-product').length){
	$('.js-slider-product').slick({
		infinite: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		  ]
	});
}

// Слайдер клуба
if($('.js-club-slider').length){
	$('.js-club-slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1500,
		fade: true,
		cssEase: 'linear'
	});

	$('.js-club-slider-play').on('click', function() {
		$(this).removeClass('active');
		$('.js-club-slider-pause').addClass('active');
		$('.js-club-slider').slick('slickPlay');
	});

	$('.js-club-slider-pause').on('click', function() {
		$(this).removeClass('active');
		$('.js-club-slider-play').addClass('active');
		$('.js-club-slider').slick('slickPause');
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

// Создание мобильного меню
var arrMobileMenu = [];
$('.js-add-mm').each(function(){
	var indexItem = $(this).attr('data-order');
	arrMobileMenu[indexItem] = $(this);
});

for (var i = 0; i < arrMobileMenu.length; i++) {
	$(arrMobileMenu[i]).clone().appendTo('.js-mobile-menu-content');
}

// Открыть/Закрыть мобильное меню
$('.js-open-menu').on('click', function(){
	$('.js-shadow').addClass('is-visible');
	$('.js-mobile-menu').addClass('open');
	$('.js-body').addClass('no-scroll');
});

$('.js-close-menu').click(function(){
	 closeCatMenu();
});

$('.js-shadow').on('click', function(){
	closeCatMenu();
});

function closeCatMenu() {
	$('.js-shadow').removeClass('is-visible');
	$('.js-mobile-menu').removeClass('open');
	$('.js-body').removeClass('no-scroll');
}


// Перемещение мобильного меню
var indentMenu = 0;
var levelMenu = 0;
var titleMobileMenu = $('.js-menu-back').text();

$('.js-menu-arr').on("click", function(event){
	event.preventDefault();
	var $curItem = $(this).parent('.js-menu-link');
	var curItemText = $(this).siblings('.js-menu-text').text();
	var $subMenu = $curItem.siblings('.js-menu-sub');
	indentMenu = indentMenu - 100;
	levelMenu++;

	$('.js-mobile-menu-content-wrap').scrollTop(0);
	$subMenu.addClass('active');
	$('.js-menu-back').addClass('active');
	$('.js-menu-back').text(curItemText);

	$('.js-mobile-menu-content').css('transform','translateX('+indentMenu+'%)');
});

$('.js-menu-back').on("click", function(event){
	if ($(this).hasClass('active')) {
		indentMenu = indentMenu + 100;
		levelMenu--;

		if (levelMenu == 0) {
			$('.js-menu-back').text(titleMobileMenu);
			$('.js-menu-back').removeClass('active');
		}

		$('.js-menu-sub').removeClass('active');

		$('.js-mobile-menu-content').css('transform','translateX('+indentMenu+'%)');
	}
});
