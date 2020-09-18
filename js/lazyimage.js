if ("loading" in HTMLImageElement.prototype) {
	const images = document.querySelectorAll('img[loading="lazy"]');
	images.forEach((img) => {
		img.src = img.dataset.src;
	});
} else {
	// Dynamically import the LazySizes library
	const script = document.createElement("script");
	script.src =
		"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js";
	document.body.appendChild(script);
}

if (document.documentElement.classList.contains("is-browser-safari")) {
	const customLazyElements = document.querySelectorAll(".custom-lazy-load");
	customLazyElements.forEach((el) => {
		loadImages(el);
	});
	const loadImages = (el) => {
		const images = el.querySelectorAll("img");
		images.forEach((img) => {
			img.src = img.dataset.src;
		});
		el.classList.add("active-animation");
	};
} else {
	const config = {
		rootMargin: "50px 0px 50px 0px",
		threshold: 0,
	};

	let observer = new IntersectionObserver((entries, self) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				loadImages(entry.target);
				self.unobserve(entry.target);
			}
		});
	}, config);

	const customLazyElements = document.querySelectorAll(".custom-lazy-load");

	customLazyElements.forEach((el) => {
		observer.observe(el);
	});

	const loadImages = (el) => {
		const images = el.querySelectorAll("img");
		images.forEach((img) => {
			img.src = img.dataset.src;
		});
		el.classList.add("active-animation");
	};
}
