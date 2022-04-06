import Swiper, { Pagination } from 'swiper';
import 'swiper/css/bundle';

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
