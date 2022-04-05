import Swiper from 'swiper';

const slider = () => {
	const swiper = new Swiper('.sliderSection', {
		pagination: {
			el: '.controls_list',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: {
					el: '.swiper-pagination',
					clickable: false,
					type: 'fraction',
				},
			},
		},
		simulateTouch: false,
		spaceBetween: 30,
		watchOverflow: true,
		loop: true,
		speed: 800,
	});
	// swiper.slideNext();
};

export { slider };
