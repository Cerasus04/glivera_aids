const slider = () => {
	const activeMod = 'active_mod';
	const collapseMod = 'collapse_mod';
	const sliderList = $('.slider_section__list');
	const sliderItems = $('.slider_section__item');

	let indexElem = 0;

	$(sliderItems[indexElem]).removeClass(collapseMod).addClass(activeMod);

	const runInterval = () => {
		return setInterval(() => {
			sliderItems.addClass(collapseMod).removeClass(activeMod);
			$(sliderItems[indexElem % 5]).removeClass(collapseMod).addClass(activeMod);
			indexElem += 1;
		}, 1500);
	};

	let refreshIntervalId = runInterval();

	sliderList.on('mouseover', (e) => {
		clearInterval(refreshIntervalId);
	});
	sliderList.on('mouseleave', (e) => {
		refreshIntervalId = runInterval();
	});

	sliderItems.on('mouseover', (e) => {
		if (e.target.closest('.slider_section__item_link')) return;
		indexElem = +$(e.currentTarget).attr('class').match(/item+\d/)[0].substring(4);

		sliderItems.addClass(collapseMod).removeClass(activeMod);

		const $this = $(e.currentTarget);

		$this.addClass(activeMod).removeClass(collapseMod);
	});
};

export { slider };
