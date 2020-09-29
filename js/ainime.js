function isMobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

if (isMobile()) $("body").addClass("mobile");

$(document).ready(function () {
	$(".im-dote-js").on("click", function (funcImmersion) {
		funcImmersion.preventDefault();
		var windowWidth = $(window).outerWidth();

		if (
			$("body").hasClass("mobile") ||
			(windowWidth >= 768 && windowWidth <= 1024) ||
			$("html").hasClass("is-device-mobile") ||
			$("html").hasClass("is-device-tablet")
		) {
			var immersionParent = $(this).closest(".immersion-block");
			var immersionMobile = $(immersionParent).find(
				".immersion-block-mobile"
			);

			if (immersionMobile.is(":hidden")) {
				var immersionActive = $(".full-immersion-content").find(
					".is-active"
				);
				$(immersionActive).find(".immersion-block-mobile").hide();
				$(immersionActive).removeClass("is-active");

				$(immersionParent).addClass("is-active");
				$(immersionMobile).show();
			} else {
				$(immersionParent).removeClass("is-active");
				$(immersionMobile).hide();
			}

			funcImmersion.stopPropagation();
		}
	});

	$(".immersion-block-mobile").on("click", function (funcImmersion) {
		funcImmersion.stopPropagation();
	});
	$("body").on("click", function () {
		var immersionActive = $(".full-immersion-content").find(".is-active");
		$(immersionActive).find(".immersion-block-mobile").hide();
		$(immersionActive).removeClass("is-active");
	});

	$(".immersionMobileClick").on("click", function (e) {
		e.preventDefault();
		var parentImmersionBox = $(this).closest(".immersion-block");

		if (!$(parentImmersionBox).hasClass("is-show")) {
			var immersionOpen = $(".full-immersion-content").find(".is-show");
			$(immersionOpen)
				.find(".immersion-block-mobile")
				.animate({ height: "20px" }, 300);
			setTimeout(function () {
				$(immersionOpen)
					.find(".immersion-block-mobile")
					.removeAttr("style");
				$(immersionOpen).removeClass("is-show");
			}, 310);

			var mobileTextHeight = $(parentImmersionBox)
				.find(".immersion-mobile-text")
				.outerHeight();
			$(parentImmersionBox)
				.find(".immersion-block-mobile")
				.animate({ height: mobileTextHeight + "px" }, 300);
			setTimeout(function () {
				$(parentImmersionBox)
					.find(".immersion-block-mobile")
					.removeAttr("style");
				$(parentImmersionBox).addClass("is-show");
			}, 310);
		} else {
			$(parentImmersionBox)
				.find(".immersion-block-mobile")
				.animate({ height: "20px" }, 300);
			setTimeout(function () {
				$(parentImmersionBox)
					.find(".immersion-block-mobile")
					.removeAttr("style");
				$(parentImmersionBox).removeClass("is-show");
			}, 310);
		}
	});
}); //- end ready

let animation = null;
let canvas = null;
let context = null;

function animationLotti(methods) {
	animation = lottie.loadAnimation({
		path: "json/circle-animation.json", // Required
		renderer: "canvas", // Required
		loop: true, // Optional
		autoplay: true, // Optional
		name: "Hello World", // Name for future reference. Optional.
		rendererSettings: { context },
	});
	$("#lottie").addClass("animationInit");

	if (methods === "destroy") {
		animation.destroy();
		$("#lottie").removeClass("animationInit");
	}
}

function initCanvas(){
	if (!context) {
		canvas = document.querySelector(".lottie-canvas");
		canvas.width = 1920;
		canvas.height = 1566;
		context = canvas.getContext("2d");
	}
}

try {
	function loadPageAnime() {

		var windowWidth = $(window).outerWidth();

		if (windowWidth >= 768) {
			initCanvas();
			animationLotti();
		}

		if ("IntersectionObserver" in window) {
			const config = {
				rootMargin: "50px 0px 50px 0px",
				threshold: 0,
			};

			let observer = new IntersectionObserver((entries) => {
				if (entries[0].intersectionRatio > 0) {
					animation.play();
				} else {
					animation.stop();
				}
			}, config);

			const lottieContainer = document.getElementById("lottie");
			observer.observe(lottieContainer);
		}
	} //end loadPageAnime
	window.addEventListener("load", loadPageAnime);

	// participantsSlider

	function resizePageAnime() {
		var windowWidth = $(window).outerWidth();
		if (windowWidth >= 768) {
			if (!$("#lottie").hasClass("animationInit")) {
				initCanvas();
				animationLotti();
			}
		} else {
			animationLotti("destroy");
		}
	} //end resizePageAnime
	window.addEventListener("resize", resizePageAnime);
} catch (e) {}
