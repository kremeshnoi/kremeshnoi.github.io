
let vh = window.innerHeight * 0.0096;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

	let vh = window.innerHeight * 0.0096;

	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.onload = function(){

	const $portfolio = $('.portfolio');

	// $(document).on('keypress', function (e) {
	// 	if(e.which === 13 && $portfolio.hasClass('closed')) {
	// 		$portfolio.removeClass('closed');
	// 		$portfolio.addClass('opened');
	// 		$portfolio.css({
	// 			'transform' : 'translateY(-1%)'
	// 		});
	// 	} else if (e.which === 13 && $portfolio.hasClass('opened')) {
	// 		$portfolio.removeClass('opened');
	// 		$portfolio.addClass('closed');
	// 		$portfolio.css({
	// 			'transform' : 'translateY(-150%)'
	// 		});
	// 	}
	// });


	//SWIPER

	const swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		observer: true,
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: {
			invert: false,
		},

	});


//TOOLTIP

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});


// TYPEWRITER

	$('#typewriter-desktop').typewrite({
		blinkingCursor: false,
		speed: 10,
		actions: [
			{
				type: 'Hi, my name is Alex. ' +
					'I am a web developer ' +
					'living in Kiev, Ukraine.'
			},
		]
	});

	$('#typewriter-mobile').typewrite({
		blinkingCursor: false,
		speed: 10,
		actions: [
			{type: 'Hi, my name is Alex.'},
			{delay: 2000},
			{remove: {num: 20}, type: 'stepped'},
			{type: 'I am a web developer'},
			{delay: 2000},
			{remove: {num: 23, type: 'stepped'}},
			{delay: 1000},
			{type: 'living in Kiev, Ukraine.'},
		]
	});


//MOBILE NAVBAR

	const nav = $('.mobile-nav');
	$('.navbar-toggler-icon').on('click', function () {
		if ($(nav).hasClass('closed-nav')) {
			$(nav).removeClass('closed-nav').addClass('opened-nav');
			$('.opened-nav').animate({height: '100%'}, 500);
		} else if ($(nav).hasClass('opened-nav')) {
			$(nav).removeClass('opened-nav').addClass('closed-nav');
			$('.closed-nav').animate({height: '0'}, 500);
		}
	});
	$('.mobile-nav a').on('click', function () {
		$(nav).removeClass('opened-nav').addClass('closed-nav');
		$('.mobile-nav').animate({height: '0%'}, 500);
	});


//METRICS

	const sec = $("section.portfolio, section.technologies");
	const header = $("nav");
	const soc = $(".social-icons");
	const main = $("main");

	sec.css({
		top: header.outerHeight() + "px",
		height: soc.offset().top - header.outerHeight() + "px"
	});

	$(window).on("resize", function () {
		sec.css({
			top: header.outerHeight() + "px",
			height: soc.offset().top - header.outerHeight() + "px"
		});
	});

	header.find(".Y").on("click", function (e) {
		e.preventDefault();
		const id = $(this).data("id");
		header.find(".Y").removeClass("active");
		header.find('a[data-id=' + id + ']').addClass("active");
		sec.each((index, s) => {
			$(s).removeClass("show");
			if ($(s).data("id") === id) $(s).addClass("show");
		})
	});

	main.find(".Y").on("click", function (e) {
		e.preventDefault();
		const id = $(this).data("id");
		main.find(".Y").removeClass("active");
		main.find('.Y[data-id=' + id + ']').addClass("active");
		sec.each((index, s) => {
			$(s).removeClass("show");
			if ($(s).data("id") === id) $(s).addClass("show");
		})
	});

	$(document).mouseup(function (e) {
		if (!sec.is(e.target)
			&& !header.find("a").is(e.target)
			&& sec.has(e.target).length === 0) {
			sec.removeClass("show");
			header.find(".Y").removeClass("active");
		}
	});


	//PRELOADER


	setTimeout(function () {
		const preloader = $('.preloader');
		if (!preloader.hasClass('done')) {
			preloader.addClass('done');
			preloader.css('opacity', '0');
			setTimeout(function () {
				preloader.css('z-index', '0');
			}, 1000);
		}
	}, 1000);


	//POSITION OF .TITLE

	const img_pos = $('.portfolio img').offset();
	$('.title').offset({left: img_pos.left + 2});
	$portfolio.css({
		'transform': 'translateY(-150%)'
	});
};
