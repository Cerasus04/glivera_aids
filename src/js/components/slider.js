import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

const slider = () => {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1023: {
				slidesPerView: 1,
				spaceBetween: 1,
			},
		},
	});
};
export default slider;
