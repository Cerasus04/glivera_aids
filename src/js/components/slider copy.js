import Swiper, { Pagination } from 'swiper';
import 'swiper/css/bundle';

// const slider = () => {
// 	const $sectionSlider = document.querySelector('.sliderList');
// 	const $sectionItem = $sectionSlider.querySelectorAll('.sliderItem');
// 	$sectionSlider.classList.add('swiper-wrapper');
// 	for (let i = 0; i < $sectionItem.length; i += 1) {
// 		$sectionItem[i].classList.add('swiper-slide');
// 	}
// 	let windowWidth = window.innerWidth;
// 	const swiper = new Swiper('.swiper', {
// 		modules: [Pagination],
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true,
// 		},
// 	});
// 	$(window).on('resize', () => {
// 		windowWidth = window.innerWidth;
// 	});

// 	if (windowWidth > 1023) {
// 		console.log('зашел проверить');
// 		if ($sectionSlider.classList.contains('swiper-wrapper')) {
// 			$sectionSlider.classList.remove('swiper-wrapper');
// 			for (let i = 0; i < $sectionItem.length; i += 1) {
// 				$sectionItem[i].classList.remove('swiper-slide');
// 			}
// 		}
// 	}
// };
// export default slider;

const slider = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Pagination],
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
};
export default slider;
