
let vh = window.innerHeight * 0.0096;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

	let vh = window.innerHeight * 0.0096;

	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.onload = function(){

	const swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		observer: true,
		observeParents: true,
		slidesPerView:'auto',
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

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	$('#typewriter-desktop').typewrite({
		blinkingCursor: false,
		speed: 10,
		actions: [
			{
				type: 'Hi, my name is Alex. ' +
					'I am a web developer ' +
					'living in Kyiv, Ukraine.'
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
			{type: 'living in Kyiv, Ukraine.'},
		]
	});

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

	const sec = $("section.portfolio, section.technologies");
	const portfolio = $("section.portfolio");
	const slider_wrapper = $(".swiper-wrapper");
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
			main.find(".Y").removeClass("active");
			header.find(".Y").removeClass("active");
		}
	});

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
};
