$(document).ready(function(){
	//- show/hide menu tablet
	$(".nav-dropdown-box > a").on("click", function (evnMenu) {
		evnMenu.preventDefault();
		var windowWidth = $(window).outerWidth();
		if (
			$("html").hasClass("is-device-tablet") ||
			$("html").hasClass("is-device-mobile") ||
			windowWidth <= 1279
		) {
			var parentItem = $(this).closest(".nav-dropdown-box"),
				mainNav = $(this).closest(".main-nav");
			if (windowWidth >= 768 && !$(parentItem).hasClass("is-active")) {
				$(mainNav).find(".is-active").removeClass("is-active");
				$(parentItem).addClass("is-active");
				// return false;
			} else if (windowWidth <= 767) {
				if ($(parentItem).hasClass("is-active")) {
					$(parentItem).removeClass("is-active");
					$(parentItem).find(".sub-nav").slideUp();
				} else {
					var showSubNav = $(mainNav).find(".is-active");
					$(showSubNav).find(".sub-nav").slideUp();
					$(showSubNav).removeClass("is-active");

					$(parentItem).addClass("is-active");
					$(parentItem).find(".sub-nav").slideDown();
				}
				return false;
			} //- 767
			else {
				$(parentItem).removeClass("is-active");
				// return false;
			}

			evnMenu.stopPropagation();
		}
	});

	$(".sub-nav").on("click", function (evnMenu) {
		var windowWidth = $(window).outerWidth();
		if (
			$("html").hasClass("is-device-tablet") ||
			$("html").hasClass("is-device-mobile") ||
			(windowWidth <= 1279 && windowWidth >= 768)
		) {
			evnMenu.stopPropagation();
		}
	});

	$("body").on("click", function () {
		var windowWidth = $(window).outerWidth();
		if (
			$("html").hasClass("is-device-tablet") ||
			($("html").hasClass("is-device-mobile") && windowWidth >= 1280) ||
			(windowWidth >= 768 && windowWidth <= 1279)
		) {
			$(".main-nav").find(".is-active").removeClass("is-active");
		}
	});

	// если устройство планшет показываем элементы по клику т.к. ховера на тач устройствах нет
	if (
		!$("html").hasClass("is-device-tablet") ||
		!$("html").hasClass("is-device-mobile")
	) {
		//- tooltip Для государственных образовательных организаций

		$(".tooltip-link").on("mouseenter", function (e) {
			$(this).parent().addClass("is-active");
		});

		//убираем курсор мыши
		$(".tooltip-link").on("mouseleave ", function (e) {
			$(this).parent().removeClass("is-active");
		});
	} //- end is-device-tablet

	//- tooltip по клику
	$(".tooltip-link").on("click", function (evnTooltip) {
		evnTooltip.preventDefault();
		if (
			$("html").hasClass("is-device-tablet") ||
			$("html").hasClass("is-device-mobile")
		) {
			if (!$(this).parent().hasClass("is-active")) {
				$("body")
					.find(".tooltip-box.is-active")
					.removeClass("is-active");
				$(this).parent().addClass("is-active");
			} else {
				$(this).parent().removeClass("is-active");
			}

			evnTooltip.stopPropagation();
		}
	});

	$(".tooltip-text").on("click", function (evnTooltip) {
		if (
			$("html").hasClass("is-device-tablet") ||
			$("html").hasClass("is-device-mobile")
		) {
			evnTooltip.stopPropagation();
		}
	});

	$("body").on("click", function () {
		if (
			$("html").hasClass("is-device-tablet") ||
			$("html").hasClass("is-device-mobile")
		) {
			$(".tooltip-box").removeClass("is-active");
		}
	});

	//- слайдер на главной - СПИКЕРЫ EDCRUNCH 2020
	$(".sliderSpeaker").slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		lazyLoad: "ondemand",
		touchThreshold: 50,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//- слайдер на главной - Новости EDCRUNCH
	$(".sliderNews").slick({
		infinite: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		lazyLoad: "ondemand",
		touchThreshold: 50,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//- слайдер на главной - ЧТО ГОВОРЯТ СПИКЕРЫ EDCRUNCH
	$(".sliderReviews").slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		lazyLoad: "ondemand",
		touchThreshold: 50,
	});

	//Воспроизведение видео
	$(".video-link").on("click", function (e) {
		e.preventDefault();
		var playVideoId = $(this).attr("data-videoId");
		var parentVideo = $(this).closest(".main-video-box");
		$(parentVideo).addClass("is-play");
		$(parentVideo).prepend(
			'<div class="videoBox"><iframe class="frameVideo" type="text/html" src="https://www.youtube.com/embed/' +
				playVideoId +
				'?rel=0&showinfo=0&controls=0&autoplay=1&wmode=opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>'
		);
	});

	//- show menu mobile
	$(".touch-nav").on("click", function (e) {
		e.preventDefault();
		$("html").addClass("htmlFix");
		$("body").addClass("navFix");
		$(".nav__container-js").fadeIn();
		$(".nav-hide").show();
		$(".nav__content-js").addClass("menuShow");
	});

	//- hide menu mobile
	function closeMobileMenu() {
		$(".nav__content-js").removeClass("menuShow");
		$("html").removeClass("htmlFix");
		$("body").removeClass("navFix");
		$(".nav-hide").hide();
		$(".nav__container-js").fadeOut();
	}
	$(".nav-close, .nav-hide").on("click", function (e) {
		e.preventDefault();
		closeMobileMenu();
	});

	//- плавная прокрутка до блоков
	$(".link-scroll").on("click", function (e) {
		e.preventDefault();
		var windowWidth = $(window).outerWidth();

		if (windowWidth <= 767) {
			closeMobileMenu();
		}
		var boxHash = $(this).attr("href");
		scrollTo($(boxHash).offset().top + 50, 1000);
	});

	//- добавить поле в форме
	function addInput(text, parentBox, inputName) {
		$(parentBox).before(
			'<div class="modal-contacts-col m-col-12">' +
				'<input class="ed-input" type="text" name="' +
				inputName +
				'" placeholder="' +
				text +
				'" autocomplete="off">' +
				"</div>"
		);
	}

	//- добавить поле Ссылки на профили в социальных сетях
	$(".btn-add-socail").on("click", function (e) {
		e.preventDefault();
		var parentCol = $(this).closest(".m-col-add");
		addInput(
			"Ссылки на профили в социальных сетях",
			parentCol,
			"social_links[]"
		);
	});

	//- добавить поле Ссылки на выступления
	$(".btn-add-speech").on("click", function (e) {
		e.preventDefault();
		var parentCol = $(this).closest(".m-col-add");
		addInput("Ссылки на выступления", parentCol, "speeches_links[]");
	});

	//количество введенных символов
	function limitChars(myObject, typeChars) {
		$(myObject).on("keyup", function (e) {
			var count = $(this).val().length;
			$(typeChars).text(count);
		});
	}

	limitChars(".theme-textarea", ".theme-symbol span");

	//- показать селект для выбора чекбоксов на странице спикеры
	$("body").on("click", ".filter-btn-js", function (evnOptionBox) {
		evnOptionBox.preventDefault();

		var _this = $(this);

		var filterBox = $(this).closest(".page-filter-box");

		if ($(this).hasClass("is-active")) {
			$(filterBox)
				.find(".filter-box-option")
				.slideUp("slow", function () {
					$(_this).removeClass("is-active");
				});
		} else {
			var activeSelect = $(".filter-sections").find(
				".filter-btn-js.is-active"
			);
			$(activeSelect)
				.parent()
				.find(".filter-box-option")
				.slideUp("slow", function () {
					$(activeSelect).removeClass("is-active");
				});

			$(filterBox).find(".filter-box-option").slideDown();
			$(this).addClass("is-active");
		}

		// evnOptionBox.stopPropagation()
	});

	// $(".filter-box-option").on('click', function(evnOptionBox){
	// 	evnOptionBox.stopPropagation()
	// });

	// $("body").on('click', function(){
	// 		var activeSelectBody = $('.filter-sections').find('.filter-btn-js.is-active');
	// 		$(activeSelectBody).parent().find('.filter-box-option').slideUp();
	// 		$(activeSelectBody).removeClass('is-active');
	// });

	//-посчет выбранных пунктов
	$("body").on("click", ".filter-option-js", function (e) {
		var selectBox = $(this).closest(".page-filter-box");
		countCheckedBox(selectBox);
	});

	// Читать подробнее детальная спикеров
	$(".detail-more-js").on("click", function (e) {
		e.preventDefault();
		var detailImageHeight = $(
			".speakers-detail__about-image"
		).outerHeight();

		if ($(this).hasClass("is-active")) {
			var windowWidth = $(window).outerWidth();
			$(this).text($(this).attr("data-text")).removeClass("is-active");

			var detailBoxHeight;

			if (windowWidth >= 768) {
				detailBoxHeight = detailImageHeight;
			} else {
				detailBoxHeight = 300;
			}

			$(".detail-desc-text").animate(
				{ height: detailBoxHeight + "px" },
				400
			);
			setTimeout(function () {
				$(".detail-desc-text")
					.removeAttr("style")
					.removeClass("detail-show");
			}, 410);
		} else {
			$(this).text($(this).attr("data-change")).addClass("is-active");
			var detailBtnHeight = $(
				".speakers-detail__desc-action"
			).outerHeight();
			var detailInfoHeight = $(".speakers-detail-info").outerHeight();

			$(".detail-desc-text")
				.addClass("detail-show")
				.css({ height: detailImageHeight + "px" })
				.animate(
					{ height: detailInfoHeight + detailBtnHeight + "px" },
					400
				);
			setTimeout(function () {
				$(".detail-desc-text").removeAttr("style");
			}, 410);
		}
	});

	//- переключение табов в модальном окне авторизации
	$(".tab-item").on("click", function (e) {
		e.preventDefault();

		if (!$(this).hasClass("is-active")) {
			var tabId = $(this).attr("data-tab");
			var parentTabsBox = $(this).closest(".modal-content-tabs");
			var tabList = $(parentTabsBox).find(".modal-tab-list");
			$(tabList).find(".is-active").removeClass("is-active");
			$(this).addClass("is-active");

			$(parentTabsBox)
				.find(".modal-tab-block:not(." + tabId + ")")
				.hide();
			$(parentTabsBox)
				.find(".modal-tab-block." + tabId)
				.show();
		}
	});

	//- клик по кнопке Восстановить пароль

	$(".btn-open-modal").on("click", function (e) {
		// e.preventDefault();
		$.fancybox.close();
		var modalId = $(this).attr("href");
		setTimeout(function () {
			$.fancybox.open({
				src: modalId,
			});
		}, 400);
	});

	$(".modal-restore-btn").on("click", function (e) {
		e.preventDefault();
		$.fancybox.close();
		var modalId = $(this).attr("data-href");

		setTimeout(function () {
			$.fancybox.open({
				src: modalId,
			});
		}, 400);
	});

	// Все спикеры в программах
	$("body").on("click", ".btnSpeakersShow", function (e) {
		e.preventDefault();
		var _this = $(this);
		collapseBlocks(_this, "agendaProgramBlock", "agendaProgramList", 'agenda__program-event-box');
	});

	// Читать весь текст в Мероприятиях
	$("body").on("click", ".btnTextShow", function (e) {
		e.preventDefault();
		var _this = $(this);
		collapseBlocks(_this, "eventTextParent", "eventTextRead", 'eventTextView');
	});

	//- свернуть/развернуть фильтр
	$("body").on("click", ".filterBtnJs", function (e) {
		e.preventDefault();
		var _this = $(this);
		var parentFilterBox = $(_this).closest(".expo__filters-block");
		if (!$(_this).hasClass("is-active")) {
			$(parentFilterBox)
				.find(".expo__filters-dropdown")
				.slideDown("slow", function () {
					$(_this).addClass("is-active");
				});
		} else {
			$(parentFilterBox)
				.find(".expo__filters-dropdown")
				.slideUp("slow", function () {
					$(_this).removeClass("is-active");
				});
		}
	});

	//показать скрыть фильтр на мобильном
	$(".btn-filte-js").on("click", function (e) {
		e.preventDefault();
		var _this = $(this);
		if (!$(this).hasClass("is-active")) {
			$(".program__filters").slideDown("slow", function () {
				$(_this).addClass("is-active");
			});
		} else {
			$(".program__filters").slideUp("slow", function () {
				$(_this).removeClass("is-active");
			});
		}
	});

	// ЛК- запустить видео 
	$(".eventVideoJS").on("click", function (e) {
		e.preventDefault();
		var videoLink = $(this).attr('data-video');
		var parentVideoBlock = $(this).closest('.event-video-block');
		$(parentVideoBlock).addClass('is-play');
		$(parentVideoBlock).find('.event__video').show().html('<iframe class="frameVideo" type="text/html" src="' + videoLink +'" frameborder="0" allowfullscreen></iframe>')
	});	
	
	// ЛК переключение табов чата
	$(".chatTabJs").on("click", function (e) {
		e.preventDefault();

		if (!$(this).hasClass("is-active")) {
			var tabId = $(this).attr("data-tab");
			var parentTabsBox = $(this).closest(".event-chat");
			var tabList = $(parentTabsBox).find(".event-chat-tabs");
			$(tabList).find(".is-active").removeClass("is-active");
			$(this).addClass("is-active");

			console.log(tabId);

			$(parentTabsBox).find(".chatTabBlock:not(." + tabId + ")").hide();
			$(parentTabsBox).find(".chatTabBlock." + tabId).show();
		}
	});	

	//accordion
	$(".accordion-btn-js").on("click", function (e) {
		e.preventDefault();
		
		if (!$(this).parent().hasClass('is-active')) {
			var accordionParent = $(this).closest('.accordion__list');
			var activeAccordionBox = $(accordionParent).find('.is-active');
			$(activeAccordionBox).removeClass('is-active');
			$(activeAccordionBox).find('.accordion-text-js').slideUp();

			$(this).parent().addClass('is-active');
			$(this).parent().find('.accordion-text-js').slideDown();
		}
		else {
			$(this).parent().removeClass('is-active');
			$(this).parent().find('.accordion-text-js').slideUp();
		}
	});		

	// билет в ЛК
	$(".ticketCardJs").on("click", function (e) {
		e.preventDefault();	
		var parentTicketItem = $(this).closest('.ticket__card-item');

		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$(parentTicketItem).find('.ticketCardContentJs').slideDown();
		}
		else {
			$(this).removeClass('is-active');
			$(parentTicketItem).find('.ticketCardContentJs').slideUp();
		}
	});

	
	ticketCardContentJs

}); //- end ready

// ЛК
function sliderSlickInit(slider, params) {
	$('.' + slider).slick(params);
}
function sliderSlickDestroy(slider) {
	$('.' + slider).slick('unslick');
}
var sessionSliderParams = {
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	touchThreshold: 50,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}


// свернуть/развернуть блок
function collapseBlocks(event, parentContainer, parentTextBox, collapseBox) {

		var _this = event;
		var parentProgramBox = $(_this).closest("." + parentContainer);
		var heightBox = $(_this).attr("data-height");
	
		if (!$(parentProgramBox).hasClass("is-show")) {
			var agendaProgramListHeight = $(parentProgramBox)
				.find("." + parentTextBox)
				.outerHeight();
			$(parentProgramBox)
				.find("." + collapseBox)
				.animate({ height: agendaProgramListHeight + "px" }, 300);
			setTimeout(function () {
				$(parentProgramBox).find("." + collapseBox).removeAttr("style");
				$(parentProgramBox).addClass("is-show");
			}, 310);
			$(_this).text($(_this).attr("data-change"));
		} else {
			$(parentProgramBox)
				.find("." + collapseBox)
				.animate({ height: heightBox + "px" }, 300);
			$(parentProgramBox).removeClass("is-show");
	
			setTimeout(function () {
				$(parentProgramBox).find("." + collapseBox).removeAttr("style");
				$(_this).text($(_this).attr("data-text"));
			}, 310);
		}

	
}//- collapseBlocks


//- количество пукнтов
function endingText(numb) {
	if((numb == 1) || (numb == 21)  || (numb == 31)  || (numb == 41)  || (numb == 51) ) {
		return "пункт";
	}
	else if( ( (numb >= 2) && (numb <= 4) ) || ((numb >= 22) && (numb <= 24)) || ((numb >= 32) && (numb <= 34)) || ((numb >= 42) && (numb <= 44) || ((numb >= 52) && (numb <= 54)) ) ) {
		return "пункта";
	}
	else {
		return "пунктов";
	}
}

function countCheckedBox(mainBox) {
	var parentSelectBox = $(mainBox);
	var parentOptionBox = $(mainBox).find('.filter-box-option');
	var countChecket = $(parentOptionBox).find('input:checked').length;
	if(countChecket == 0) {
		$(parentSelectBox).find('.filter-btn-js span').text('Не выбрано');
	}
	else {
		$(parentSelectBox).find('.filter-btn-js span').text('Выбрано '+countChecket +' '+ endingText(countChecket));
	}
}



function scrollTo(to) {
    var $obj = jQuery('html, body');
    var top = 0;
    var speed = 500;
    var offsetX = 50;

    if (typeof to == 'object') {
        top = to.offset().top;
    } else if (typeof to == 'string') {
        top = jQuery(to).offset().top;
    } else if (typeof to == 'number') {
        top = to;
    }

    if (arguments.length > 1) {
        if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
            speed = arguments[1];
        } else if (typeof arguments[1] == 'string' || typeof arguments[1] == 'object') {
            if (typeof arguments[1] == 'object') {
                $obj = arguments[1];
            } else if (typeof arguments[1] == 'string') {
                $obj = jQuery(arguments[1]);
            }
        }
        if (typeof arguments[2] == 'number') {
            speed = arguments[2];
        }
    }

    if (jQuery(window).width() < 1000) {
        offsetX = 130;
    }

    if (speed == 0) {
        speed = 1;
    }

    $obj.animate(
        {
            scrollTop: top - offsetX
        },
        speed
    );
}

function isHighDensity(){
return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}

function isRetina(){
return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

function retinaImagesBox(box, retina) {

	if(retina == '2x') {
		var imgPath2x = $(box).attr('data-2x');
		$(box).css({'backgroundImage':'url('+imgPath2x+')'});
		return false;
	}

	if(retina == '1x') {
		var imgPath1x = $(box).attr('data-1x');
		$(box).css({'backgroundImage':'url('+imgPath1x+')'});
		return false;
	}	
}

function speakerAddMoreBtn() {
	var windowWidth = $(window).outerWidth(); 

	var photoSpeakerHeight = $('.detail-desc-img').outerHeight();
	var textSpeakerHeight = $('.speakers-detail-info').outerHeight();

	if(!$('.detail-desc-text').hasClass('detail-show')) {

		if (windowWidth >= 768) {
			if (textSpeakerHeight > photoSpeakerHeight) {
				$('.speakers-detail__desc-content').addClass('speakers-detail-more');
				$('.speakers-detail__desc-action').addClass('d-flex');
			}
			else {
				$('.speakers-detail__desc-content').removeClass('speakers-detail-more');
				$('.speakers-detail__desc-action').removeClass('d-flex');					
			}
	
		}
		else {
			if (textSpeakerHeight > 300) {
				$('.speakers-detail__desc-content').addClass('speakers-detail-more');
				$('.speakers-detail__desc-action').addClass('d-flex');
			}		
			else {
				$('.speakers-detail__desc-content').removeClass('speakers-detail-more');
				$('.speakers-detail__desc-action').removeClass('d-flex');
			}	
	
		}

	}// if detail-show
}

function speakerBtnPosition() {
	var detailImageHeight = $('.speakers-detail__about-image').outerHeight();
	var btnDetailHeight = $('.btn-detail-page').outerHeight();
	var btnPostionTop = (detailImageHeight/2)-(btnDetailHeight/2);
	$('.btn-detail-page').css({'top':btnPostionTop+'px', 'display':'block'});
}


function loadPage() {
	var windowWidth = $(window).outerWidth(); 
	
	//-отобразить кнопку Читать подробнее
	if ($('.speakers-detail-info')) {
		speakerAddMoreBtn();
	}
	//-позиция кнопок на странице детальная спикера
	if ($('.btn-detail-page') && (windowWidth >= 768)) {
		speakerBtnPosition();
	}

	//- при обновлении страницы, если есть селекты на страницы запускаем подсчет в них выбранных пунктов
	if($('.filter-btn-js')) {
	 $('.page-filter-box').each(function(){
			countCheckedBox($(this));
	 });
	};

	// ЛК
	if (windowWidth >= 768) {
		if ($('.sessionSlider')) {
			sliderSlickInit('sessionSlider', sessionSliderParams);
		}
	}	

	try {

		if($('.speakerImg')) {

				if ( isRetina() || isHighDensity() ) {

				 $('.speakerImg').each(function(){
						retinaImagesBox($(this), '2x');
				 });					
				 return false;

				} else {

				 $('.speakerImg').each(function(){
						retinaImagesBox($(this), '1x');
				 });					
				 return false;

				}			
		}

	} catch (e) {}





}//end loadPage
window.addEventListener("load", loadPage);


function resizePage() {
		var windowWidth = $(window).outerWidth(); 

		$('.sub-nav').removeAttr('style');
		$('.main-nav').find('.is-active').removeClass('is-active');
		$('.nav__container, .nav-hide').removeAttr('style');    
		$('html').removeClass('htmlFix');
		$('body').removeClass('navFix');

	if ($('.speakers-detail-info')) {
		setTimeout(function() {
			speakerAddMoreBtn();
		}, 300);
	}		
	//-позиция кнопок на странице детальная спикера
	if ($('.btn-detail-page') && (windowWidth >= 768)) {
		speakerBtnPosition();
	}	

	
	if(windowWidth >= 768 ) {
		try {
			$('.tl-link').removeAttr('style');
		} catch (e) {}			

		if ($('.agendaProgramBlock')) {
			$('.agendaProgramBlock').removeClass('is-show');
			$('.agenda__program-event-box').removeAttr('style');
			var text = $('.agenda__program-action').find('a').attr('data-text');
			$('.agenda__program-action').find('a').text(text);
		}

		if ($('.eventTextParent')) {
			$('.eventTextParent').removeClass('is-show');
			$(".eventTextView").removeAttr("style");
			var text = $('.agenda__program-txt-action').find('a').attr('data-text');
			$(".agenda__program-txt-action").find("a").text(text);
		}
		// ЛК
		if ($('.sessionSlider') && (!$('.sessionSlider').hasClass('slick-initialized'))) {
			sliderSlickInit('sessionSlider', sessionSliderParams);
		}			
	}//- 768

	if (windowWidth >= 960) {
		if ($('.program__filters')) {
			$('.program__filters').removeAttr('style');
			$('.btn-filte-js').removeClass('is-active');
		}		
	}//- 960

	// ЛК
	if (windowWidth <= 767) {
		if ($('.sessionSlider') && ($('.sessionSlider').hasClass('slick-initialized'))) {
			sliderSlickDestroy('sessionSlider');
		}				
	}


	
}//end resizePage
window.addEventListener("resize", resizePage);


