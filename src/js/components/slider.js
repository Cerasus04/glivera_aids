import Swiper, { Pagination } from 'swiper';
import 'swiper/css/bundle';

const slider = () => {
	const $slider = document.querySelector('.slider');
	const $sectionSlider = document.querySelector('.sliderList');
	const $sectionItem = $sectionSlider.querySelectorAll('.sliderItem');

	let windowWidth = window.innerWidth;
	$(window).on('resize', () => {
		windowWidth = window.innerWidth;
	});

	if (windowWidth < 1023) {
		$slider.classList.add('sliderJs');
		if ($slider.classList.contains('sliderJs')) {
			$slider.classList.add('swiper');
			$sectionSlider.classList.add('swiper-wrapper');
			for (let i = 0; i < $sectionItem.length; i += 1) {
				$sectionItem[i].classList.add('swiper-slide');
			}
			const swiper = new Swiper('.swiper', {
				modules: [Pagination],
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	}
};
export default slider;
