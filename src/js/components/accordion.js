const sliderAccordion = () => {
	let windowWidth = window.innerWidth;
	document.querySelector('.slider_section__item').classList.add('active');
	$(window).on('resize', () => {
		windowWidth = window.innerWidth;
	});
	const slides = document.querySelectorAll('.controls_list__btn');
	const sliderItem = document.querySelectorAll('.slider_section__item');

	// Скрипт для оживления слайдов

	slides.forEach((slide) => {
		slide.addEventListener('click', (evt) => {
			evt.preventDefault();

			slides.forEach((item) => {
				item.classList.remove('current');
			});
			evt.target.classList.add('current');
			sliderItem.forEach((item) => {
				item.classList.remove('active');
			});
			sliderItem[evt.target.id - 1].classList.add('active');
		});
	});

	if (windowWidth > 1023) {
		const mobileSlider = document.querySelector('.slider_section__item');
		if (mobileSlider.classList.contains('active')) {
			mobileSlider.classList.remove('active');
		}
		const accordion = document.querySelector('.accordion');
		if (accordion) {
			const sliderSection = accordion.classList.contains('slider_section');

			let openedTab;

			const closeTab = () => {
				openedTab.classList.remove('slider_section__item--open');
				openedTab = null;
			};

			accordion.classList.add('accordion--js');
			accordion.addEventListener('click', (e) => {
				if (e.target.classList.contains('accordion__button')) {
					if (sliderSection && openedTab && e.target.parentElement !== openedTab) {
						closeTab();
					}
					e.target.parentElement.classList.toggle('slider_section__item--open');
					openedTab = e.target.parentElement;
				}
			});
		}
	}
};

export default sliderAccordion;
