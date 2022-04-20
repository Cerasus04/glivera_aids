import Swiper, { Pagination } from 'swiper';
import 'swiper/css/bundle';

const slider = () => {
	const $slider = document.querySelector('.slider');
	const $sectionSlider = document.querySelector('.sliderList');
	const $sectionItem = $sectionSlider.querySelectorAll('.sliderItem');

	let windowWidth = window.innerWidth;
	let swiper = null;
	$(window).on('resize', () => {
		windowWidth = window.innerWidth;
		if (windowWidth < 1023) {
			$slider.classList.add('sliderJs');
			if ($slider.classList.contains('sliderJs')) {
				$slider.classList.add('swiper');
				$sectionSlider.classList.add('swiper-wrapper');
				for (let i = 0; i < $sectionItem.length; i += 1) {
					$sectionItem[i].classList.add('swiper-slide');
				}
				if (!swiper) {
					console.log('init');
					swiper = new Swiper('.swiper', {
						modules: [Pagination],
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						loop: true,
					});
				}
			}
		} else {
			if (swiper) {
				console.log('destroy');
				swiper.destroy();
				swiper = null;
			}
		}
	});
};
export default slider;
