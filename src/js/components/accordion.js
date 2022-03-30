const sliderAccordion = () => {
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
};

export default sliderAccordion;

// const sliderAccordion = () => {
// 	const accordion = document.querySelector('.accordion');
// 	if (accordion) {
// 		const sliderSection = accordion.classList.contains('slider_section');

// 		let openedTab;

// 		const closeTab = () => {
// 			openedTab.classList.remove('slider_section__item--open');
// 			openedTab = null;
// 		};

// 		accordion.classList.add('accordion--js');
// 		accordion.addEventListener('click', (e) => {
// 			if (e.target.classList.contains('accordion__button')) {
// 				if (sliderSection && openedTab && e.target.parentElement !== openedTab) {
// 					closeTab();
// 				}
// 				e.target.parentElement.classList.toggle('slider_section__item--open');
// 				openedTab = e.target.parentElement;
// 			}
// 		});
// 	}
// 	console.log('заходить в слайдер');
// };

// export default sliderAccordion;
